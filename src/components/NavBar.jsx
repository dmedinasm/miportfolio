import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import SocialLogo from './SocialLogo';
import imgPortfolio from "../assets/portfolioimg.jpg"

const NavBar = () => {
  return (
      <nav className="flex flex-row justify-between py-8 px-[64px] ">
          <div className="border-[5px] border-black rounded-[50%]  w-[100px] h-[100px] bg-miImg bg-cover bg-center bg-no-repeat"> 
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
              <SocialLogo logoSocial={<AiOutlineMail className=" w-[50px] h-[50px]"/>} link="mailto:dmedinasm@gmail.com" />
              <SocialLogo logoSocial={<AiFillLinkedin  className="w-[50px] h-[50px]"/>} link="https://www.linkedin.com/in/dmedinam" />
              <SocialLogo logoSocial={<BsTwitterX className="w-[50px] h-[50px]"/>} link="https://twitter.com/dmedinas88" />
              <SocialLogo logoSocial={<BsGithub className="w-[50px] h-[50px]"/>} link="https://github.com/dmedinasm" />
          </div>

      </nav>
  )
}

export default NavBar