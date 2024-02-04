import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/getallusers")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    })
    const handledelete = (id) => {
        axios.delete("http://localhost:5000/deleteuser/" + id)
            .then(res => {console.log(res.data)
                window.location.reload()
            })
      
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Link to='/Create' className='bg-blue-500 text-white px-2 py-1 mr-2'>add</Link>
            <br/><br/>
            <table className='table w-full border-collapse border border-gray-800 rounded-lg bg-white'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='border p-2'>Name</th>
                        <th className='border p-2'>Email</th>
                        <th className='border p-2'>role</th>
                        <th className='border p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr className='hover:bg-gray-100'>
                                    <td className='border p-2'>{user.name}</td>
                                    <td className='border p-2'>{user.email}</td>
                                    <td className='border p-2'>{user.role}</td>
                                    <td className='border p-2'>
                                    <Link to={`/Update/${user._id}`} className='bg-blue-500 text-white px-2 py-1 mr-2'>update</Link>
                                        <button onClick={(e) => handledelete(user._id)} className='bg-red-500 text-white px-2 py-1'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
           
        </div>
    )
}

export default User
