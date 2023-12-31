import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { AuthContext } from '../../routes/AuthProvider';
import logo from '../../assets/images/ngc-logo.jpeg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const { user, logOut } = useContext(AuthContext);


    // // LogOut
    // const handleLogOut = () => {
    //     logOut()
    //         .then(result => { })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }

    // Logo Area for navbar
    const logoArea = <>
        <Link to='/' className='font-bold text-2xl uppercase'><img className='w-16 md:w-24' src={logo} alt="College Website" /></Link>
    </>
    // Nav Menu Items 
    const navItems = <>
        <NavLink to='/' className={({ isActive }) => isActive ? "text-[#769F4F]" : "" + `hover:text-[#769F4F]`}>Home</NavLink>
        <NavLink to='/all-toys' className={({ isActive }) => isActive ? "text-[#769F4F]" : "" + `hover:text-[#769F4F]`}>All Toys</NavLink>
        {/* {
            user && <>

                <NavLink to='/my-toys' className={({ isActive }) => isActive ? "text-p" : "" + `hover:text-[#1B9C85]`}>My Toys</NavLink>
                <NavLink to='/add-toy' className={({ isActive }) => isActive ? "text-p" : "" + `hover:text-[#1B9C85]`}>Add A Toy</NavLink>
            </>
        }
        <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-p" : "" + `hover:text-[#1B9C85]`}>Blogs</NavLink>
        {
            user && <span className='cursor-pointer hover:text-[#1B9C85]' onClick={handleLogOut}>Logout</span>
        }
        {
            user ? <img className='w-8 h-8 object-cover rounded-full cursor-pointer' title={user.displayName || "Please Refresh the page to see your name"} src={user.photoURL || 'https://img.freepik.com/free-icon/user_318-159711.jpg'} alt="" />
                : <>
                    <NavLink to='/login' className={({ isActive }) => isActive ? "text-p" : "" + `hover:text-[#1B9C85]`}>Sign In</NavLink>
                    <NavLink to='/register' className={({ isActive }) => isActive ? "text-p" : "" + `hover:text-[#1b9c85]`}>Sign Up</NavLink>
                </>
        } */}
    </>
    return (
        <header className='flex items-center justify-between py-5 px-3 xl:px-0 xl:container mx-auto relative'>
            <div>
                {logoArea}
            </div>
            <div className='overflow-hidden'>
                <div className={`md:static min-w-[180px] hidden md:flex items-center flex-row gap-4 font-medium text-[#2a2a2e] duration-300`}>
                    {navItems}
                </div>

                {/* Mobile Menu */}
                <div className='md:hidden'>
                    <button
                        title='Open Menu'
                        onClick={() => setMenuOpen(true)}
                    >
                        <TfiAlignRight className='w-5 text-p' />
                    </button>
                    {menuOpen && (
                        <div className='absolute top-3 w-full start-1/2 -translate-x-1/2 z-10'>
                            <div className='p-5 bg-white border rounded-xl w-11/12 mx-auto shadow-2xl'>
                                {/* Logo and button Section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        {logoArea}
                                    </div>
                                    {/* Dropdown menu close Button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <TfiClose className='w-5 text-p' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav menu items sectin */}
                                <div className={`bg-white min-w-[180px] font-medium text-[#1a1a1a] duration-300 flex flex-col gap-4`}>
                                    {navItems}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;