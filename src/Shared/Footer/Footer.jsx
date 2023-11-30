import React from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaSkype, FaGoogle } from 'react-icons/fa';
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

    const handleSubscribe = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        console.log(email);
        e.currentTarget.reset();
    }

    const quickLinks = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'Meals',
            link: '/meals'
        },
        {
            text: 'Upcoming Meals',
            link: '/upcoming-meals'
        }
    ];

    const contactsInfo = [
        {
            text: '+1-646-956-2012',
            link: 'tel:+1-646-956-2012',
            logo: 'LuPhoneCall',
            target: '_self'
        },
        {
            text: 'info@myjobgator.com',
            link: 'mailto:info@myjobgator.com',
            logo: 'FaRegEnvelope',
            target: '_self'
        },
        {
            text: '34th Street, 15th Floor, New York',
            link: 'https://www.google.com/maps/place/16+E+34th+St+15th+Floor,+New+York,+NY+10016,+USA/@40.7477695,-73.9859719,17z/data=!4m6!3m5!1s0x89c259a832afd85b:0xcc514a968cca1701!8m2!3d40.747766!4d-73.983783!16s%2Fg%2F11khjvvtkw?entry=ttu',
            logo: 'IoLocationOutline',
            target: '_blank'
        },
    ];
    const iconComponents = {
        FaRegEnvelope: FaRegEnvelope,
        LuPhoneCall: LuPhoneCall,
        IoLocationOutline: IoLocationOutline,
    };

    const social = [
        {
            logo: <FaFacebookF />,
            link: 'https://www.facebook.com/'
        },
        {
            logo: <FaWhatsapp />,
            link: 'tel:+88017351974'
        },
        {
            logo: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/'
        },
        {
            logo: <FaSkype />,
            link: '#'
        },
        {
            logo: <FaGoogle />,
            link: '#'
        }
    ]

    return (
        <footer className="bg-bg-color">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
                    <path fill="white" opacity="0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
                    <path fill="white" opacity="0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
                    <path fill="white" opacity="0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
                    <path fill="white" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
                </svg>
            </div>
            <div className="footer max-w-[1400px] mx-auto pt-20 pb-12 lg:justify-between justify-items-center px-5">
                <div>
                    <Link to={'/'} className="flex items-center space-x-2 pt-2 lg:pt-0">
                        <img className="w-1/6" src="logo.png" alt="" />
                        <span className="lg:text-3xl md:text-2xl text-3xl font-extrabold text-headning-color">HowdyHaven</span>
                    </Link>
                    <p className="text-[#222] pt-5 pb-2 text-center md:text-left mx-auto md:mx-0 text-base font-medium">ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <div className="flex gap-3 text-[#222] justify-center md:justify-start">
                        {
                            social.map((item, index) => <a 
                            key={index}
                            className="bg-white p-2 rounded hover:bg-[#222] hover:text-white duration-500 hover:-translate-y-2"
                            href={item.link}
                            >{item.logo}</a>)
                        }
                    </div>
                </div>
                <div className="pt-3">
                    <h4 className="text-xl font-bold text-headning-color">QUICK LINKS</h4>
                    <ul className="border-t border-[#4e5e6a] pt-8 w-full text-[#222] space-y-2 text-center md:text-left text-base font-medium">
                        {
                            quickLinks.map((quickLink, index) => (
                                <li key={index} className="hover:text-[#506690] duration-300">
                                    <Link to={quickLink.link}>{quickLink.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pt-3 justify-items-center md:justify-items-start">
                    <h4 className="text-xl font-bold text-headning-color text-center">CONTACT INFO</h4>
                    <ul className="border-t border-[#4e5e6a] pt-8 space-y-3 lg:w-full w-44">
                        {
                            contactsInfo.map((contactInfo, index) => (
                                <li key={index} className="flex gap-2 items-center text-[#506690] justify-center md:justify-start text-base font-medium">
                                    {React.createElement(iconComponents[contactInfo.logo])}
                                    <a className="text-[#222] hover:text-[#506690] duration-300" href={contactInfo.link} target={contactInfo.target}>{contactInfo.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pt-3 justify-items-center md:justify-items-start">
                    <h2 className="text-xl font-bold text-headning-color">SUBSCRIBE</h2>
                    <form onSubmit={handleSubscribe} className="form-control border-t border-[#4e5e6a] pt-8">
                        <label className="join">
                            <span className="bg-[#282828] text-white join-item px-4 flex items-center">Email</span>
                            <input type="email" name="email" placeholder="info@site.com" className="join-item input input-bordered bg-white w-28 lg:w-full" />
                        </label>
                    </form>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto border-[#4e5e6a] pt-7 px-5">
                <p className="text-center text-[#222] py-2 font-medium">© Copyright Web Dev Tamim. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;