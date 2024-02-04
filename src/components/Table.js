import React from 'react'

const Table = () => {
    return (
        <div>
            <table className='table w-full border-collapse border border-gray-800 rounded-lg bg-white'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='border p-2'>Name</th>
                        <th className='border p-2'>Email</th>
                        <th className='border p-2'>Age</th>
                        <th className='border p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className='hover:bg-gray-100'>
                        <td className='border p-2'>nathan</td>
                        <td className='border p-2'>nathan</td>
                        <td className='border p-2'>nathan</td>
                        <td className='border p-2'>
                            <button className='bg-blue-500 text-white px-2 py-1 mr-2'>Update</button>
                            <button className='bg-red-500 text-white px-2 py-1'>Delete</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Table
