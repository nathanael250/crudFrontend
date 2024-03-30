import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Add = () => {

    const [email, setEmail] = useState();
    const [role, setRole] = useState();
    const Navigate = useNavigate();
    const submit = (e) => {

        e.preventDefault()

        axios.post("https://crudbackend-hvhg.onrender.com/employees", { email, role })
            .then(result=>{toast("Employee Recorded Successfully!")
            setEmail("")
            setRole("")
            setTimeout(()=>{
                Navigate("/")
            },2000)
        }
            )
            .catch(err => console.log(err))
            
    }

    return (

        <>
            <div className='max-sm mx-auto bg-white p-6 rounded-xl shadow-lg first:justify-center first:items-center first:divide-y first:divide-slate-500'>
                <div className='font-semibold text-xl w-full text-slate-900 flex justify-center pb-3 uppercase'>Record Employee</div>
                <div className=''>
                    <form method='post' onSubmit={submit} className='flex flex-col space-y-2 mt-2 ml-2'>
                        <label >Email:</label>
                        <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} className='border border-slate-300 rounded-sm focus:border-none focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-purple-500 px-2 py-1 text-slate-500' />
                        <label>Role:</label>
                        <input type='text' name='role' onChange={(e) => setRole(e.target.value)} className='border border-slate-300 rounded-sm focus:border-none focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-purple-500 px-2 py-1 text-slate-500' />
                        <button type="submit" onClick={submit} className='rounded-lg bg-purple-500 px-2 py-1 text-white text-sm'>Record</button>
                    </form>

                </div>
                
            </div><ToastContainer autoClose={500} transition={Flip}/>

           
        </>

    )
}

export default Add
