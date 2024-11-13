import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Register = () => {
   // call the context from AuthProvider.jsx
    const {createUser}= useContext(AuthContext);
    const navigate= useNavigate();
    
    const handleRegister =((event)=>{
    event.preventDefault();
    const name= event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
 
   
    

    // create user
    createUser(email,password)
    .then((result)=>{
        console.log(result)
        event.target.reset();
        navigate('/')
    })
    .catch((error)=>{
     console.log(error)
    })
   })
    return (
       
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body"  onSubmit={handleRegister}>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name"className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>
                           Already have an account? Please <Link to='/login'>Login</Link>
                        </p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;