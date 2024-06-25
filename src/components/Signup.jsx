import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function Signup() {
    const navigate = useNavigate()
    const [error, SetError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()


    const create = async (data) => {
        SetError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            SetError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={'mx-auto w-full max-w-lg bg-toggle mt-1 rounded-xl p-3 border border-black/10 text-primary '}>
                <div className='mb- flex justify-center '>
                    <span className='inline-block w-full max-w-[200px] pr-6 pt-3'>
                        <Logo width="100%" />
                    </span>
                </div>
                <p className="text-center text-green-500 text- font-semibold leading-tight p-2">Demo email and password in login page   <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline">
                        - Login page
                    </Link> 
                    </p>
                <h2 className="text-center text-2xl font-bold leading-tight p-2">Sign up to create account</h2>
                <p className="mt- text-center text-base text-primary  ">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-3'>
                        <Input
                            label="Full Name:"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email:"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                        label = "Password:"
                        type = "password"
                        placeholder = "Enter your password"
                        {...register("password",{
                            required:true,
                        })}
                        />
                        <Button
                        type="submit"
                        className= "w-full"
                        >Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
