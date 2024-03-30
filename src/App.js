import React from 'react'
import Add from './components/Add'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './components/Employee';
import Edit from './components/Edit';


const App = () => {
  return (
    <div className='h-screen w-full bg-indigo-600 flex flex-col justify-center items-center'>
     
     <Router>
      
        <Routes>
          <Route path="/" element={<Employee/>} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit/:id" element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
