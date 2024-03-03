import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getConfingToken from '../../utils/getConfingToken'
import './style/Agenda.css'
import Header from '../Header/Header'
import AddQueaser from '../AddQueaser/AddQueaser'

const Agenda = ({token}) => {
	const [User, setUser] = useState()
    let UserId = localStorage.getItem("UserId")
	useEffect(()=> {
		const url = `http://localhost:8080/api/v1/user/${UserId}`
		axios.get(url,getConfingToken())
		.then(res => setUser(res.data))
		.catch(err => console.log(err))
	},[])


	const [Register, setRegister] = useState(true)
	const abrir = () => {
		setRegister(false)
	}
  return (
    <div className="agenda">
		<Header key={UserId} name={User?.name} token={token}/>
		<div className='agenda-container'>
   <div className="add-task-container ">
		<div className='div'>
        <button onClick={abrir} className="add-task-btn">Agregar Tarea</button>
		</div>
		
		<h1 className='texttt'>Tareas de Hoy</h1>
		<div className='ll'>
        <ul className="task-list">
          {User?.queasers?.map(Tarea => (
            <li key={Tarea.id} className="task-item">
              <span className="checkbox-container">
                <input type="checkbox" className="checkbox" />
              </span>
			  <div>
              <span>{Tarea?.name}</span>
			  <span className='Horario'>{Tarea?.horario}</span>
              <hr />
			  </div>
            </li>
          ))}
        </ul>
		<figure>
			<img src="../../../images/Image8.png" alt="" />
		</figure>			
		</div>
        <div>
			<AddQueaser Register={Register} setRegister={setRegister}/>
		</div>
      </div>
    </div>			
		</div>
   
  );
}

export default Agenda
