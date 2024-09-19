import React, { useState } from 'react';
import data from '../../utils/data.json';
import './Day.css';

const Day = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [Days, setDay] = useState();

  const selection = (option) => {
    setSelectedDay(option); // Actualizar el índice del día seleccionado
    switch (option) {
      case 0:
        setDay(data.days[0]);
        break;
      case 1:
        setDay(data.days[1]);
        break;
      case 2:
        setDay(data.days[2]);
        break;
      case 3:
        setDay(data.days[3]);
        break;
      case 4:
        setDay(data.days[4]);
        break;
      case 5:
        setDay(data.days[5]);
        break;
      default:
        setDay(null);
        break;
    }
  };

  return (
    <div className='Days'>
      <ul className='Days__Menu'>
        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day, index) => (
          <li 
            key={index} 
            onClick={() => selection(index)} 
            className={selectedDay === index ? 'active' : ''}  // Añadir clase 'active' si el día está seleccionado
          >
            {day}
          </li>
        ))}
      </ul>
      <div className='Days__day'>
        {Days ? (
          <>
            <h1 className='day__name'>{Days.name}</h1>
            <ul className='day__ul'>
              {Days.schedule?.length > 0 ? (
                Days.schedule.map((res, index) => (
                  <li key={index}>
                    <span>{res.time}: </span> <span>{res.title}.</span>
                  </li>
                ))
              ) : (
                <li>No hay horarios disponibles.</li>
              )}
            </ul>
          </>
        ) : (
          <div>
            <h1 className='Bienvenida'>Bienvenido! Selecciona un día para ver la agenda.</h1>
            <img className='Imagesuto' src="../../../../images/aqendalimg.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;
