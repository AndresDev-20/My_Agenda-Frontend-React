import React from 'react'
import './style/Header.css'

const Header = ({name, token}) => {
	const eliminar = () => {
		localStorage.removeItem("token")
		localStorage.removeItem("UserId")
		token(false)
	}
	setTimeout(()=>{
		localStorage.removeItem("token")
		localStorage.removeItem("UserId")
		token(false)
	}, 50400000)

	const Fecha = new Date()
	let fecha = Fecha.toLocaleDateString()
  return (
	<header className='Header'>
	   <nav onClick={eliminar} className='cerrar'> <i className='bx bx-power-off'></i><span>Cerrar Sesion</span></nav>
	   <nav className='name'>Bienvenido {name}</nav>
	   <nav><i className='bx bxs-time'></i>{fecha}</nav>
	</header>
  )
}

export default Header
