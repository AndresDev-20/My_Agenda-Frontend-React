import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfingToken from '../../utils/getConfingToken';
import './style/Agenda.css';
import Header from '../Header/Header';
import AddQueaser from '../AddQueaser/AddQueaser';

const Api = import.meta.env.VITE_REACT_APP_URL;

const Agenda = ({ token }) => {
  const [user, setUser] = useState();
  let userId = localStorage.getItem('UserId');
  
  useEffect(() => {
    const url = `${Api}/user/${userId}`;
    axios
      .get(url, getConfingToken())
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [register, setRegister] = useState(true);

  const abrir = () => {
    setRegister(false);
  };

  const deleteQueaser = (id) => {
    const updatedQueasers = user?.queasers.filter((task) => task.id !== id);

    const url = `${Api}/queaser/${id}`;
    axios
      .delete(url, getConfingToken())
      .then(() => setUser((prevUser) => ({ ...prevUser, queasers: updatedQueasers })))
      .catch((err) => console.log(err));
  };

  const handleTaskAdded = () => {
    const url = `${Api}/user/${userId}`;
    axios
      .get(url, getConfingToken())
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="agenda">
      <Header key={userId} name={user?.name} token={token} />
      <div className="agenda-container">
		
	  <h1 className='name2'>Bienvenido {user?.name}</h1>
        <div className="add-task-container ">
          <div className="div">
            <button onClick={abrir} className="add-task-btn">
              Agregar Tarea
            </button>
          </div>

          <h1 className="texttt">Tareas de Hoy</h1>
          <div className="ll">
            <ul className="task-list">
              {user?.queasers?.map((task) => (
                <li key={task.id} className="task-item">
                  <span className="checkbox-container">
                    <input type="checkbox" className="checkbox" />
                  </span>
					<div>
                    <span>{task?.name}</span>
                    <span className="Horario">{task?.horario}</span>
                  </div>
                  <i onClick={() => deleteQueaser(task.id)} className="bx bx-trash"></i>
                </li>
              ))}
            </ul>
            <figure>
              <img src="../../../images/Image8.png" alt="" />
            </figure>
          </div>
          <div>
            <AddQueaser Register={register} setRegister={setRegister} onTaskAdded={handleTaskAdded} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
