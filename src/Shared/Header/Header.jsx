import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft, FaBell } from 'react-icons/fa';
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <li className="hidden lg:flex"><NavLink to={''} id="nav-item" className="hover:color-[#767474] font-semibold duration-300 flex bg-red-300">
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
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow font-semibold text-[#282828] tracking-[0.5px] text-[15px] bg-white w-screen mx-auto mt-7 border-t rounded-none -ml-5">{navItems}</ul>
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
                    <Link to={'/login'} className="bg-[#282828] text-white hover:bg-btn-hover visited:bg-btn-hover focus:bg-btn-hover font-semibold text-[15px] tracking-[1px] py-[14px] px-7 rounded leading-[15px] duration-300 active:scale-x-95">Join US</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;