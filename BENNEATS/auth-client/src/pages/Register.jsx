import React from 'react'
import avater from '../assets/profile.jpg'
function Register() {
    return (
        <div className='register'>
            <div className='w-full mx-auto pt-[16vh]'>
                <form className='ease-in mx-auto sm:w-max shadow-sm backdrop-blur-md  rounded-md px-8 py-5 lg:w-max duration-300 w-[80%] bg-white'>
                    <label htmlFor="file-upload " className='custom-file-upload'>
                        <img src="" alt="" className='h-32 bg-contain rounded-full mx-auto cursor-pointer' />
                    </label>
                    <label className='block text-center text-gray-700 text-base mb-2  '>Profile Picture</label>
                    <input type="file" label="Image" name='myFile' id='file-upload' className='hidden' accept='.jpeg .png .jpg' />
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-gray-700 text-sm mb-2'>
                            Name
                        </label>
                        <input type="text" name='name' placeholder='Enter your name' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-gray-700 text-sm mb-2'>
                            Email
                        </label>
                        <input type="email" name='email' placeholder='Enter your email' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-4'>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm mb-2'>
                                Password
                            </label>
                            <input type="password" placeholder='*************' name='password' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 text-sm mb-2'>
                                Confirm Password
                            </label>
                            <input type="password" placeholder='*************' name='confirmpassword' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' />
                        </div>

                    </div>
                    <button className='bg-red active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5'>Register </button>

                    <Link to="/login" className='text-yellow text-center font-semibold w-full mb-3 py-2 px-4 rounded '>
                        Already Account

                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Register
