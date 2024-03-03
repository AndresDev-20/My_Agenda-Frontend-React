import { useForm } from 'react-hook-form'
import './style/Add.css'
import axios  from 'axios'
import getConfingToken from '../../utils/getConfingToken'
import { useEffect } from 'react'

const AddQueaser = ({Register, setRegister}) => {
	const cerrar = () => {
		setRegister(true)
	}

	const {register, handleSubmit, reset}  = useForm()
	const submit = (data) => {
		data.finalizado = false
		const url = "http://localhost:8080/api/v1/queaser"
		axios.post(url, data, getConfingToken())
		.then(res => (
			res.data,
			alert("se ha creado tu queaser exitosamente")
			))
		.catch(err => console.log(err))
	}

  return (
	<div className={Register ? "clear" : "Add"}> 

	  <form onSubmit={handleSubmit(submit)} className='Add_form' action="">
		<div>
			<label htmlFor="">Titulo:</label>
			<input {...register("name")} type="text" required placeholder='Aprendere a ser mejor'/>
		</div>
		<div>
			<label htmlFor="">Horario</label>
			<input {...register("horario")} type="text" required placeholder='Eje: 6AM a 5PM' />
		</div>
		<button>Registrar</button>
	  </form>
	  <div>
		<i onClick={cerrar} className='bx bx-x'></i>
		</div>
	</div>
  )
}

export default AddQueaser
