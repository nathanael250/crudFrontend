import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/saveuser', { name, email, role })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={submit} className="space-y-4 bg-gray-300 p-4 rounded ">
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
          Send
        </button>
      </form>
    </div>
  );
};

export default Create;
