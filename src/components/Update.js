import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        axios.get("http://localhost:5000/getforupdate/"+id)
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
                setRole(res.data.role);
            })
            .catch(err => console.log(err));
    }, [id]);

    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/updateuser/${id}`, { name,email,role })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            navigate('/')
    };

    return (
        <div>
        <form onSubmit={update} className="space-y-4 bg-gray-300 p-4 rounded ">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name here..."
          className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-indigo-500 shadow"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email here..."
          className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-indigo-500 shadow"
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role here..."
          className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-indigo-500 shadow"
        />
        <button
          type="submit"
          className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
          update
        </button>
      </form>
        </div>
    );
};

export default Update;
