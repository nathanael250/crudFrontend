
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './components/User';
import Create from './components/Create';
import Update from './components/Update'
import Table from './components/Table';
function App() {


  return (
    <div>
     <div className="flex items-center bg-indigo-800 justify-center w-full h-screen">
     <Router>
        <Routes>
          <Route path='/' element={<User/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
          <Route path='/Table' element={<Table/>}/>
          
        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
