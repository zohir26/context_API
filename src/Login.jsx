import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Login = () => {
    // after login we will go to home page
    const navigate = useNavigate();
    // call sign in function using context
    const { signIn,signInWithGoogle } = useContext(AuthContext)
    const handleLogin = ((event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // sign in
        signIn(email, password)
            .then(res => {
                console.log(res)
                event.target.reset()
                navigate('/')
            })
            .then(error => {
                console.log("error", error)
            })


    })
    const handleGoogleLogin=()=>{
        signInWithGoogle ()
        .then((result)=>{
            console.log(result.user)
            navigate('/');
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>
                            New to this page? Please <Link to='/register'>Register</Link>
                        </p>

                        <p className='mx-auto'>
                            <button onClick={handleGoogleLogin} className='btn btn-ghost'>Login with Google</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;