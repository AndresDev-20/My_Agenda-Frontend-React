import { useForm } from 'react-hook-form';
import './style/Add.css';
import axios from 'axios';
import getConfingToken from '../../utils/getConfingToken';

const Api = import.meta.env.VITE_REACT_APP_URL;

const AddQueaser = ({ Register, setRegister, onTaskAdded }) => {
  const cerrar = () => {
    setRegister(true);
  };

  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    data.finalizado = false;
    const url = `${Api}/queaser`;
    axios
      .post(url, data, getConfingToken())
      .then((res) => {
        res.data;
        alert('Se ha creado tu queaser exitosamente');
        onTaskAdded();
		reset()
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Register ? 'clear' : 'Add'}>
      <form onSubmit={handleSubmit(submit)} className="Add_form" action="">
        <div>
          <label htmlFor="">Titulo:</label>
          <input {...register('name')} type="text" required placeholder="Aprenderé a ser mejor" />
        </div>
        <div>
          <label htmlFor="">Horario</label>
          <input {...register('horario')} type="text" required placeholder="Ejemplo: 6AM a 5PM" />
        </div>
        <button>Registrar</button>
      </form>
      <div>
        <i onClick={cerrar} className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default AddQueaser;
