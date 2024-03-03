import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {

  return (
    <div>
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
     </Routes>
    </div>
  )
}

export default App