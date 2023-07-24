import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoginWithSocial from '../../components/LoginWithSocial/LoginWithSocial';
import loginImage from '../../assets/images/login.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                reset();
                Swal.fire({
                    title: 'Success!',
                    text: "You are successfully Login!",
                    icon: 'success',
                    confirmButtonColor: '#14b8a6',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    navigate(from, { replace: true })
                })
            })
            .catch(error => {
                console.log(error?.message);
            })
    }
    return (
        <section className='py-10 md:py-16 xl:container mx-auto'>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className='flex justify-between items-center gap-10'>
                <div className='flex-grow'>
                    <img className='max-w-full' src={loginImage} alt="" />
                </div>
                <div className='shadow-xl max-w-xl mx-auto py-10 md:py-16 px-5 md:px-10 rounded-3xl bg-white flex-grow'>
                    <h2 className='text-3xl font-bold text-center mb-6'>Please Sign In</h2>
                    <form onSubmit={handleSubmit(handleLogin)} className='text-base flex flex-col gap-3'>
                        <div>
                            <input placeholder='Email Address' type='text'
                                className='block w-full py-3 px-5 rounded-lg shadow-inner-lg input-focus'
                                {...register("email", { required: true })} />
                            {errors.email && <small className='text-red-500'>Email field is required!</small>}
                        </div>
                        <div className='relative'>
                            <input placeholder='Password' type={showPassword ? 'text' : 'password'}
                                className='block w-full py-3 px-5 rounded-lg shadow-inner-lg input-focus'
                                {...register("password", { required: true })} />
                            {errors.password && <small className='text-red-500'>Password field is required!</small>}
                            <span className='text-2xl opacity-50 cursor-pointer absolute top-[25px] -translate-y-1/2 right-5' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <input className='cursor-pointer font-semibold uppercase rounded-lg py-3 bg-[#769F4F] text-white' type="submit" value="login" />
                    </form>
                    <div>
                        <small className='text-base block mt-2 text-center font-medium'>Don't have an Account? Please <Link to='/register' className='text-[#769F4F]'>Sign Up</Link></small>
                    </div>
                    <div className='divider divide-slate-400 divide-x-2 mt-5 mb-5'></div>
                    <LoginWithSocial />
                </div>
            </div>
        </section>
    );
};

export default Login;