import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = () => {
    return (
        <div className={`shadow-xl pb-5 md:pb-8 pt-2 md:pt-3 px-2 md:px-3 rounded-3xl`}>
            <img className='w-full h-48 md:h-60  rounded-2xl object-cover' src='https://media.gettyimages.com/id/1323420737/photo/aerial-over-north-carolina-central-university-in-the-spring.jpg?s=612x612&w=gi&k=20&c=bR_78tkO2Vt7VLHptvWAKuJ1fFjvOh14axQhuMBWcj4=' alt="" />
            <div className='md:px-3'>
                <h3 className='font-playfair text-2xl md:text-3xl mt-5 mb-1'>Noakhali Model College</h3>
                <p className='font-semibold'>Admission Dates: <span>10-12-2023</span></p>
                <div className='my-2'>
                    <span className='font-semibold'>Sports: </span>
                    <span className=''>Football</span>
                    <span className=''>, Cricket</span>
                    <span className=''>, Cabadi</span>
                    <span className=''>, Batball</span>
                </div>
                <p className='font-semibold'>Events: </p>
                <div className='divide-y-2'>
                    <div className='flex justify-between items-center gap-2'>
                        <p>Orientation Day</p>
                        <p>30 August 2023</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <p>Orientation Day</p>
                        <p>30 August 2023</p>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <p>Orientation Day</p>
                        <p>30 August 2023</p>
                    </div>
                </div>
                <div className='mt-2'>
                    <p className='font-semibold block md:inline'>Researh history:</p>
                    <p>
                        Founded in 1850, University of Example has a rich history of groundbreaking research in various fields.
                    </p>
                </div>
                <Link to={'/'} className='px-5 md:px-10 py-3 rounded-lg block text-center bg-[#769F4F] text-white font-semibold uppercase mt-5'>Details</Link>
            </div>
        </div>
    );
};

export default CollegeCard;