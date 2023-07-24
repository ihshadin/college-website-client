import React from 'react';
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import { GoSearch } from 'react-icons/go'
import Gallery from '../../components/Gallery/Gallery';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <section className='py-8 md:py-12 overflow-hidden'>
                <div className='px-3 xl:px-0 xl:container mx-auto'>
                    <div className='py-10'>
                        <label htmlFor="search_box" className='block text-center text-2xl font-bold mb-5'>Find College Name</label>
                        <div className='flex max-w-xl mx-auto'>
                            <input className='px-5 py-3 flex-grow font-medium shadow-inner-xl search-focus' type="text" name="search_box" id="search_box" placeholder='Write college name' required />
                            <button className='px-5 md:px-10 text-center bg-[#769F4F] text-white font-semibold uppercase'>
                                <GoSearch className='w-7 h-7 mx-auto' />
                            </button>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 justify-between gap-6'>
                        <CollegeCard />
                        <CollegeCard />
                        <CollegeCard />
                    </div>
                </div>
            </section>
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto overflow-hidden'>
                <div className='mb-10'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom" >Explore Our Gallery</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" >
                        Discover a wide variety of captivating images showcasing our diverse collection of toys. Immerse yourself in a world of fun and wonder.
                    </p>
                </div>
                {/* images components */}
                <Gallery />
            </section>
            <section className='px-3 py-14 md:py-24 xl:px-0 xl:container mx-auto overflow-hidden'>
                <div className='mb-10'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold' data-aos="zoom-in" data-aos-anchor-placement="top-bottom">Research Paper</h2>
                    <p className='w-full md:w-2/4 mt-2 text-center text-zinc-600 text-base mx-auto' data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" >
                        Discover a wide variety of captivating images showcasing our diverse collection of toys. Immerse yourself in a world of fun and wonder.
                    </p>
                </div>
                {/* images components */}
                <Gallery />
            </section>
            <Testimonials />
        </>
    );
};

export default Home;