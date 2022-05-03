import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";
import auth from '../ firebase.init';

const Register = () => {
    const navigate = useNavigate()
    const inputEmail = useRef('')
    const inputPassword= useRef('')
  // const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [SignInWithGoogle, googleUser, GoogleError] = useSignInWithGoogle(auth);
    const [SignInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);
    const [SignInWithFacebook, facebookUser, facebookError] = useSignInWithFacebook(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    let from = location.state?.from?.pathname || "/";
      if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        navigate(from, { replace: true });
      }
      if (googleUser || githubUser || facebookUser) {
          navigate('/')
          
      }
     
      const navigateRegister = () =>{
          navigate('/register')
      }
      const handleSubmit = (e)=>{
        e.preventDefault()
        const email = inputEmail.current.value
        const password = inputPassword.current.value

        createUserWithEmailAndPassword( email, password)
       }


    return (
        <div className="relative min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover  items-center"
        style={{}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-red-100 rounded-xl z-10">
            <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    Welcom Back!
                </h2>
                <p className="mt-2 text-sm text-gray-600">Register New User</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-3">
               <span onClick={()=>SignInWithGoogle()} className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"><BsGoogle /></span>
              <span onClick={()=>SignInWithGithub()} className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"><BsGithub /></span>
              <span onClick={()=>SignInWithFacebook()} className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"><BsFacebook /></span>

            </div>
            <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-300"></span>
                <span className="text-gray-500 font-normal">OR</span>
                <span className="h-px w-16 bg-gray-300"></span>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" value="true"/>
                <div className="relative">
                    <div className="absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                    <input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={inputEmail} type="email" placeholder="mail@gmail.com" />
                </div>
                <div className="mt-8 content-center">
                    <label className="text-sm font-bold text-gray-700 tracking-wide">
                        Password
                    </label>
                    <input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={inputPassword} type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"/>
                            <label className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                    <div className="text-sm">
                        <Link onClick={navigateRegister}
                        className='font-medium text-indigo-500 hover:text-indigo-500'
                        to='/register'
                        >
                            Forgot your password?
                        </Link>
                       
                    </div>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                        Register
                    </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                    <span>Already registered user?</span>
                   
                    <Link
                    onClick={navigateRegister}
                    className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
                   to='/login'
                   >
                        Go to login page
                    </Link>
                </p>
            </form>
        </div>
    </div>
    );
};

export default Register;