import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft, FaBell } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import avatar from "../../assets/avatar.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 150);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = <>
        <li><NavLink to={'/'} id="nav-item" className="hover:bg-transparent hover:text-[#767474] font-semibold duration-300">Home</NavLink></li>
        <li><NavLink to={'/meals'} id="nav-item" className="hover:bg-transparent hover:text-[#767474] font-semibold duration-300">Meals</NavLink></li>
        <li><NavLink to={'/upcoming-meals'} id="nav-item" className="hover:bg-transparent hover:text-[#767474] font-semibold duration-300">Upcoming Meals</NavLink></li>
        <li className="hidden lg:flex"><NavLink to={''} id="nav-item" className="hover:bg-transparent hover:text-[#767474] font-semibold duration-300 flex">
            <FaBell></FaBell>
        </NavLink></li>
    </>

    const headerStyle = {
        transition: "top 0.3s ease-out",
        top: isScrolled ? "0" : "-80px",
    };

    return (
        <header className={`${isScrolled ? 'shadow-lg sticky top-0 z-50 bg-white' : 'bg-bg-color'}`} style={headerStyle} >
            <div className="navbar max-w-[1400px] mx-auto px-5 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="text-2xl text-[#282828] cursor-pointer lg:hidden"><FaAlignLeft className="-mb-2"></FaAlignLeft></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow font-semibold text-[#282828] w-[100vw] tracking-[0.5px] text-[15px] bg-white mx-auto mt-7 border-t rounded-none -ml-5">{navItems}</ul>
                    </div>
                    <Link to={'/'} className="hidden lg:flex text-xl justify-start items-center gap-2">
                        <img className="lg:w-1/6 w-full" src="logo.png" alt="logo" />
                        <span className="text-[#282828] font-bold md:text-4xl text-2xl">HowdyHaven</span>
                    </Link>
                </div>
                <div className="navbar-center">
                    <Link to={'/'} className="lg:hidden text-xl -ml-10">
                        <img className="w-1/2 mx-auto" src="logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex menu menu-horizontal px-1 text-[#222] lg:text-base text-sm font-medium">
                        {navItems}
                    </ul>
                    {
                        user ? (
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div tabIndex={0} className="w-10 mb-2 cursor-pointer">
                                    {
                                        user.photoURL ? (
                                            <img className="rounded-full" src={user.photoURL} alt="Profile" />
                                        ) : (
                                            <img className="rounded-full" src={avatar} alt="Profile" />
                                        )
                                    }
                                </div>
                                <ul tabIndex={0} className="w-40 dropdown-content z-[1] menu p-3 shadow bg-white rounded-lg text-right font-semibold space-y-1">
                                    {
                                        user.displayName ? (
                                            <li className='text-[#010f1c] text-center'>{user.displayName}</li>
                                        ) : (
                                            <li className='text-[#010f1c] text-center'>User Name</li>
                                        )
                                    }
                                    <Link to={'/dashboard'}><li className='text-[#010f1c] hover:text-[#708BF7] pb-1 text-center'>Dashboard</li></Link>
                                    <li><button className='bg-[#708BF7] text-white text-xs hover:text-white hover:bg-[#010f1c] w-full active:scale-90 justify-center' onClick={handleSignOut}>SIGN OUT</button></li>
                                </ul>
                            </div>
                        ) : (
                            <Link to={'/login'} className="bg-[#282828] text-white hover:bg-btn-hover font-semibold text-[15px] tracking-[1px] py-[14px] px-7 rounded leading-[15px] duration-300 active:scale-x-95">Join US</Link>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;