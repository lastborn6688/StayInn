import React from 'react'
import { assets } from '../assets/assets'
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter, FaTiktok, FaArrowRight} from 'react-icons/fa';

const socialLinks =[
    {
        icon: FaInstagram,
        link: "https://www.instagram.com",
        color: "hover:text-pink-500"
    },
    {
        icon: FaFacebook,
        link: "https://www.facebook.com",
        color: "hover:text-blue-500"
    },
    {
        icon: FaWhatsapp,
        link: "https://www.whatsapp.com",
        color: "hover:text-green-500"
    },
    {
        icon: FaTiktok,
        link: "https://www.tiktok.com",
        color: "hover:text-black hover:bg-gray-300"
    },
]

  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Certification",
  ];

const Footer = () => {
  return (
   <div className='text-gray-800 bg-[rgb(245,250,251)] pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='text-sm'>
                        Find your perfect stay among the world’s finest, from boutique inns to luxury villas, resorts, and exclusive private islands.</p>
                    <div className='flex items-center gap-3 mt-4'>
                        {socialLinks.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={`text-xl ${item.color}`}>
                                <item.icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p className='text-lg font-playfair text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                        <FaArrowRight className='text-white'/>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()}StayInn. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
