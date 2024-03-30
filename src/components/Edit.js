import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
    const { id } = useParams();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get("https://crudfrontend-r880.onrender.com/userforupdate/"+id)
            .then(result => {
                console.log(result.data)
                setEmail(result.data.email)
                setRole(result.data.role)
               
            }

            )
            .catch(err => console.log(err))
    },[id])

    const update = (e) => {
        e.preventDefault();
       axios.put("https://crudfrontend-r880.onrender.com/"+id,{email,role})
       .then(result=>{
        
        toast("Employee updated successfully")
        setTimeout(() => {
            Navigate("/");
        }, 2000);
     }
       )

       .catch(err=>console.log(err))
    }
    return (
        <>
            <div className='max-sm mx-auto bg-white p-6 rounded-xl shadow-lg first:justify-center first:items-center first:divide-y first:divide-slate-500'>
                <div className='font-semibold text-xl w-full text-slate-900 flex justify-center pb-3 uppercase'>Record Employee</div>
                <div className=''>
                    <form method='post' onSubmit={update} className='flex flex-col space-y-2 mt-2 ml-2'>
                        <label >Email:</label>
                        <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-300 rounded-sm focus:border-none focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-purple-500 px-2 py-1 text-slate-500' />
                        <label>Role:</label>
                        <input type='text' name='role' value={role} onChange={(e) => setRole(e.target.value)} className='border border-slate-300 rounded-sm focus:border-none focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-purple-500 px-2 py-1 text-slate-500' />
                        <button type="submit" className='rounded-lg bg-purple-500 px-2 py-1 text-white text-sm'>Edit</button>
                    </form>

                </div>
          
            </div>
            <ToastContainer transition={Flip}/>
        </>
    )
}

export default Edit
