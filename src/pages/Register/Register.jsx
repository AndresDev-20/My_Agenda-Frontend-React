import React, { useEffect } from 'react'
import './style/Register.css'
import { useForm } from 'react-hook-form'
import  axios  from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
 const {register, handleSubmit, reset} = useForm()
 const navigate = useNavigate()
 const submit = (data) => {
      console.log(data)
		const url = "http://localhost:8080/api/v1/user"
		axios.post(url, data)
		.then(res => {
			res.data
			alert("te has registrado exitosamente ")
			navigate("/")
		})
		.catch(err => {
			alert("lo siento no se ha creado tu usuario")
		})
 }
  return (
	<div className='Register'>
	 <h1>Registrar nuevo Usuario</h1>
	 <div className='Register_div'>
		<figure>
			<img src="../../../images/image2.avif" alt="" />
		</figure>
			 <form onSubmit={handleSubmit(submit)} className='Register_form' action="">
		<div>
			<label htmlFor="">Correo</label>
			<input {...register("email")} type="email" required placeholder='ejemplo@gmail.com' />
		</div>
		<div>
			<label htmlFor="">Nombre:</label>
			<input {...register("name")} type="text" required placeholder=' Adan Andres'/>
		</div>
		<div>
			<label htmlFor="">Apellidos:</label>
			<input {...register("surnames")} type="text" required  placeholder='Marroquin Bernal'/>
		</div>
		<div>
			<label htmlFor="">Contraseña:</label>
			<input {...register("password")} type="password" required placeholder='Password' />
		</div>
		<button>Registrar</button>
	 </form>
	 </div>

	</div>
  )
}

export default Register
