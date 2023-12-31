import React from 'react';
import { TfiFacebook, TfiInstagram, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi';
import { HiPhone } from "react-icons/hi";
import { BsEnvelopeCheck, BsInstagram } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#1a1a1a] pt-10'>
            <div className='px-3 xl:px-0 xl:container mx-auto md:flex justify-between'>
                <div className='mt-4 md:mt-0 text-white'>
                    <h3 className='font-bold text-2xl text-white uppercase text-left mb-3'>Location</h3>
                    <div className='flex gap-2 items-center leading-5 font-thin'>
                        <span className='p-2 rounded-full inline-block bg-[#769F4F]'><TiLocationOutline className='w-5 h-5' /></span>
                        <p>
                            North Sullukia, Maijdee,<br /> Noakhali sadar, Noakhali, Bangladesh.
                        </p>
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <span className='p-2 rounded-full inline-block bg-[#769F4F]'><HiPhone className='w-5 h-5' /></span>
                        <span>
                            +880 1858-733453
                        </span>
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <span className='p-2 rounded-full inline-block bg-[#769F4F]'><BsEnvelopeCheck className='w-5 h-5' /></span>
                        <span>
                            shadinfr@yahoo.com
                        </span>
                    </div>
                </div>
                <div className='mt-8 md:mt-0 md:basis-1/3'>
                    <h1 className='font-bold text-2xl text-white uppercase mb-3'>NMC College</h1>
                    <p className='font-normal text-gray-300'>
                        Welcome to College Website, the enchanting destination where endless play, imagination, and wonder bring joy to all ages.
                    </p>
                    <div className='flex gap-3 mt-2 text-white'>
                        <TfiFacebook className='w-10 h-10 bg-[#769F4F] p-2 rounded-sm' />
                        <TfiLinkedin className='w-10 h-10 bg-[#769F4F] p-2 rounded-sm' />
                        <TfiTwitterAlt className='w-10 h-10 bg-[#769F4F] p-2 rounded-sm' />
                        <BsInstagram className='w-10 h-10 bg-[#769F4F] p-2 rounded-sm' />
                    </div>
                </div>
            </div>
            <div className='xl:container bg-slate-500 h-[1px] mx-auto mt-8'></div>
            <div className='pb-8 pt-4 px-3 xl:px-0 xl:container mx-auto'>
                <p className='text-sm text-gray-300 text-center' > Copyright © 2023 <Link to='/' className='hover:text-[#769F4F]'>College Website</Link></p>
            </div>
        </footer>
    );
};

export default Footer;