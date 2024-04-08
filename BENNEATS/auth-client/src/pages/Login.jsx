import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'   

function Login() {
    return (
        <div className='login bg-gradient-to-br   from-[#eeaeca] via-[#c7b4d7] to-[#94bbe9]'>
            <div className='login h-screen pt-[16vh]'>
                <form className='ease-in mx-auto sm:w-max shadow-2xl backdrop-blur-md flex flex-col items-center rounded-md px-8 py-5 lg:w-max duration-300 w-[80%] bg-[#c7b4d7] '>
                    
                    <img src={logo} alt="Placeholder" className='mb-6 logo cursor-pointer text-center' />
                   
                    <div className='mb-4'>
                        <label htmlFor="email"  className='block text-gray-700 text-sm mb-2 font-bold'>
                            Email
                        </label>
                        <input type="email" name='email' placeholder='Enter your email' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700 text-sm mb-2 font-bold'>
                            Password
                        </label>
                        <input type="password"  placeholder='*************' name='password' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                    </div>
                    <button className='bg-red active:scale-90 transition duration-150 transform hover:shadow-2xl shadow-xl w-full rounded-full px-8 py-2 text-xl  font-medium bg- mx-auto text-center bg-[#eeaeca]' >Sign In </button>

                    <Link to="/register" className='text-yellow text-center font-semibold w-full mb-3 py-2 px-4 rounded '>
                        Create an account
                        
                    </Link>
                    
                    {/* Other form elements */}
                </form>
            </div>

        </div>
    )
}

export default Login
