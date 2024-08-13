import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Función para formatear la hora en formato de 12 horas con AM/PM
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // La hora '0' debería ser '12'
    hours = String(hours).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className='Header'>
		<figure>
			<img src="../../../images/logo.png" alt="" />
		</figure>
      <div className='Clock'>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
};

export default Header;
