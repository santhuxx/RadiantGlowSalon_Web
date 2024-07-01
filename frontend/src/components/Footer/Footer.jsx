import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/@SurfacedHub",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "https://github.com/santhuxx/",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "https://instagram.com/_santhu.x",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "https://www.linkedin.com/in/kavindusanthusha/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
  },
]

const quickLinks01 =[
  {
    path: "/home",
    display:"Home",
  },
  {
    path: "/home",
    display:"About Us",
  },
  {
    path: "/services",
    display:"Services",
  },
  {
    path: "/",
    display:"Blog",
  },
]

const quickLinks02 =[
  {
    path: "/find-a-beautician",
    display:"Find a Beautician",
  },
  {
    path: "/",
    display:"Request an Appoinment",
  },
  {
    path: "/",
    display:"Get a Opinian",
  },
]


const quickLinks03 = [
  {
    path: "/",
    display:"Donate",
  },
  {
    path: "/contact",
    display:"Contact Us",
  },

]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px] '>
          <img src={logo} alt=''/>
          <p className='text-[16px] leading-7 font-[400] text-textColor'>
            Copiright © {year} developped by Santhu.x all right reserved.
          </p>

          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index)=>(
              <Link
                to={link.path}
                key={index}
                className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center
                justify-center group hover:bg-primaryColor hover:border-none'
                >
                  {link.icon}
                </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
