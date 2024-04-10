import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avater from '../assets/profile.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'





function Register() {
    const [image, setImage] = useState({})
    const [uploading, setUploading] = useState(false)
    const handleImage = async (e) => {
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('image', file)
        setUploading(true)
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/all/Upload-image', formData)

            setUploading(false)
            setImage({
                url: data.url,
                public_id: data.public_id
            })
        } catch (error) {
            console.log(error)
        }
    }


    const navigate=useNavigate()
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const passwordConfirm = from.confirmpassword.value
        const profileImage = image?.url
        const userData={name,email,password,passwordConfirm,profileImage}

        fetch('http://localhost:8000/api/v1/user/register',{
            method:'POST',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                localStorage.setImage("token",data.token),
                toast.success(data.message)
                from.reset()
                navigate('/')
            }else{
                toast.error(data.message)
            }
        })
    }

    console.log(image)

    return (
        <div className='register  bg-[#eeaeca] h-screen'>
            <div className='w-full mx-auto pt-[16vh]'>
                <form className='ease-in mx-auto sm:w-max shadow-sm backdrop-blur-md gap-8  rounded-md px-8 py-5 lg:w-max duration-300 w-[80%] bg-gray-500  ' onSubmit={handleOnSubmit}>
                    <label htmlFor="file-upload" className='custom-file-upload bg-white'>
                        <img src={image?.url || avater} alt="" className='h-32 bg-contain rounded-full mx-auto cursor-pointer' />
                        <input type="file" id="file-upload" name='myFile' accept='.jpeg, .png, .jpg' className='hidden' onChange={handleImage} />
                       

                    </label>
                    <label className='block text-center text-gray-700 text-base mb-2'>Profile Picture</label>
                    <div className='mb-3'>
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
                    <ToastContainer/>

                </form>
            </div>
        </div>
    )
}

export default Register
