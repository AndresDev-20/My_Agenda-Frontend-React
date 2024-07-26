import './style/login.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import Agenda from '../../components/Agenda/Agenda';
import { useState } from 'react';
const Api = import.meta.env.VITE_REACT_APP_URL;

const Login = () => {
	const [Token, setToken] = useState(localStorage.getItem('token') || false)
	const navigate = useNavigate()
	const RegisterNewUser = () => {
		navigate("register")
	}
const {register, handleSubmit, reset} = useForm()
const submit = (data) => {
	const url = `${Api}/user/login`
	axios.post(url, data)
	.then(res => {
		setToken(localStorage.setItem("token", res.data.token))
		localStorage.setItem("UserId", res.data.user.id)
		setToken(true)
		reset()
	} )
	.catch(err => {
		console.log(err)
		alert("Lo siento pero este usuario no esta registrado o has ingresado los datos mal")
	})
}
  return (
	<div>
		{
			Token
			? <Agenda token={setToken}/>
			:	<div className='Login'>
	  <h1>Bienvenid@ a tu Agenda</h1>
	  <p>¡Te doy la bienvenida a este sitio, que sera tu agenda si lo deseeas, aqui puedes loguearte si tienes cuenta y si no pues dale a la opcion de registrarse!</p>
	  <div className='Login_div'>
		<figure>
			<img src="../../../images/Image1.webp" alt="" />
		</figure>
	  <form onSubmit={handleSubmit(submit)} action="" className='Login_form'>
		<div>
			<label htmlFor="">Email:</label>
			<input {...register("email")} type="email"  required placeholder='Ejemplo@gmail.com'/>
		</div>
		<div>
			<label htmlFor="">Contraseña</label>
			<input {...register("password")} type="password" required placeholder='Password'/>
		</div>
		<button>Ingresar</button>
		<h2>Olvidaste Contraseña</h2>
		<p className='Login_form-Register'><span onClick={RegisterNewUser}>Registrarse</span></p>
	  </form>		
	  </div>
      
	</div>
		}
	</div>

  )
}

export default Login
