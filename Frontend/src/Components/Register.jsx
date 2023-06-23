import './loginForm.css'
import * as yup from 'yup';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().required('Email is required'),
        first_name: yup.string().required('first name is required'),
        last_name: yup.string().required('last name is required'),
        password: yup.string().required('Password is required'),
        });
    const { register, handleSubmit, formState: { errors } } = useForm({
         resolver: yupResolver(schema),
    }); 
    
    const onSubmit = (data) => {
        axios.post('http://localhost:8081/register/', data)
        .then(response => {
            response.data.message && alert(response.data.message)
            navigate("/"); //to navigate to the login page
        })
    };
    return (
            <div className="directory-menu">
            <form class="form" onSubmit={handleSubmit(onSubmit)}>
    <p id="heading">Register</p>
    <div class="field">
    <input autocomplete="off" placeholder="Username" class="input-field" type="text" id="username" {...register('username')} />
    </div>
    {/* <p>{errors.username?.message}</p> */}
    <div class="field">
    <input type="email" placeholder='email' className='input-field' id="email" {...register('email')} />
      
    </div>
    <div class="field">
    <input type="firstname" placeholder='first name' className='input-field' id='first_name' {...register('first_name')} />
      
    </div>
    <div class="field">
    <input type="lastname" placeholder='Last Name' className='input-field' id='last_name' {...register('last_name')} />
      
    </div>
    <div class="field">
    <input type="password" placeholder='password' className='input-field' id='password' {...register('password')} />
      
    </div>
    <div class="btn">
    <button class="button1" type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
    </div>
</form>
    </div>
            
    )};


export default RegisterForm;    