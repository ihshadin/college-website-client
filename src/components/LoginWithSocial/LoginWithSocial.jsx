import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWithSocial = () => {
    const { googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex justify-center gap-5'>
            <span onClick={handleGoogleLogin} className='p-3 inline-block rounded-full hover:text-[#1a1a1a] text-[#769F4F] border-[3px] border-[#769F4F] cursor-pointer'>
                <FaGoogle className='h-6 w-6 ' />
            </span>
            <span onClick={handleGoogleLogin} className='p-3 inline-block rounded-full hover:text-[#1a1a1a] text-[#769F4F] border-[3px] border-[#769F4F] cursor-pointer'>
                <FaGithub className='h-6 w-6 ' />
            </span>
        </div>
    );
};

export default LoginWithSocial;