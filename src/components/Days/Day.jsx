import React, { useState } from 'react';
import data from '../../utils/data.json';
import './Day.css';

const Day = () => {
  const [Days, setDay] = useState();

  const selection = (option) => {
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
        <li onClick={() => selection(0)}>Lunes</li>
        <li onClick={() => selection(1)}>Martes</li>
        <li onClick={() => selection(2)}>Miércoles</li>
        <li onClick={() => selection(3)}>Jueves</li>
        <li onClick={() => selection(4)}>Viernes</li>
        <li onClick={() => selection(5)}>Sábado</li>
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
		  </div>
        )}
      </div>
    </div>
  );
};

export default Day;
