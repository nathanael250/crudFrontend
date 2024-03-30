import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Flip } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Employee = () => {
  const[users, setUsers] = useState([]);
  const Navigate = useNavigate()
  useEffect(()=>{
    axios.get("/fetch")
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))

  },[])

  const deletehandle =(id)=>{
    axios.delete("/deleteuser/"+id)
    .then(result=>{
        toast("user deleted successfully")
        setTimeout(()=>{
           window.location.reload()
        },1000)
    })
    .catch(err=>console.log(err))
  }

    return (
        <>
            <Link to="/Add">
                <button className='ml-0 mb-4 bg-purple-700 rounded-lg px-2 py-1 text-white text-sm'>Add</button>
            </Link>
            <div className='max-sm mx-auto bg-white p-6 rounded-lg shadow-2xl'>
                <table className='border border-collapse-2'>
                    <thead>
                        <tr>
                            <th className='p-1 border'>Email</th>
                            <th className='p-1 border'>Role</th>
                            <th className='p-1 border'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((data) => {
                                return (
                                    <tr key={data._id}>
                                        <td className='p-1 border'>{data.email}</td>
                                        <td className='p-1 border'>{data.role}</td>
                                        <td className='p-1 border space-x-2'>
                                            <Link to={`/Edit/${data._id}`}>
                                                <button className='ml-0 bg-green-700 px-2 py-1 text-white text-sm'>Edit</button>
                                            </Link>
                                            
                                                <button onClick={(e)=>deletehandle(data._id)} className='ml-0 bg-red-600 px-2 py-1 text-white text-sm'>Delete</button>
                                           
                                        </td>
                                    </tr>

                                )
                            })

                        }
                    </tbody>
                </table>

            </div>
            <ToastContainer transition={Flip}/>
        </>
    )
}

export default Employee
