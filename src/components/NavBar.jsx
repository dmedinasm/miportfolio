import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import SocialLogo from './SocialLogo';
import imgPortfolio from "../assets/portfolioimg.jpg"

const NavBar = () => {
  return (
      <nav className="flex flex-row justify-between items-center py-8 px-8 md:px-[64px]  ">
          <a href="https://dmedinadev.netlify.app"><div className="border-[2px] md:border-[5px] border-black rounded-[50%]  w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-miImg bg-cover bg-center bg-no-repeat "> 
          </div></a>
          <div className="flex flex-row items-center justify-center gap-2 ">
              <SocialLogo logoSocial={<AiOutlineMail className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px]"/>} link="mailto:dmedinasm@gmail.com" />
              <SocialLogo logoSocial={<AiFillLinkedin  className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://www.linkedin.com/in/dmedinam" />
              <SocialLogo logoSocial={<BsTwitterX className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://twitter.com/dmedinas88" />
              <SocialLogo logoSocial={<BsGithub className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://github.com/dmedinasm" />
          </div>

      </nav>
  )
}

export default NavBar