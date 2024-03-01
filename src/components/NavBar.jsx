import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs"
import SocialLogo from './SocialLogo';
import imgPortfolio from "../assets/portfolioimg.jpg"

const NavBar = () => {
    const[isOpening, setIsOpening] = useState(false)
  
  return (
      <nav className="flex flex-row justify-between items-center py-8 px-8 md:px-[64px] relative ">
          <a href="https://dmedinadev.netlify.app"><div className="border-[2px] md:border-[5px] border-black rounded-[50%]  w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] bg-miImg bg-cover bg-center bg-no-repeat "> 
          </div></a>
          <div className="flex flex-row items-center justify-center gap-2 ">
              <SocialLogo logoSocial={<AiOutlineMail className="w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="mailto:dmedinasm@gmail.com" />
              <SocialLogo logoSocial={<AiFillLinkedin  className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://www.linkedin.com/in/dmedinam" />
              <SocialLogo logoSocial={<BsTwitterX className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://twitter.com/dmedinas88" />
              <SocialLogo logoSocial={<BsGithub className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://github.com/dmedinasm" />
              <SocialLogo isOpening={isOpening}  logoSocial ={<BsThreeDotsVertical  className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] cursor-pointer "  onClick={() => setIsOpening(!isOpening)}/>} />
          </div>
          {isOpening && 
            <div className="bg-slate-300  w-[50%]  right-[5%]  top-[75%] md:top-[80%] mr-[2%] md:mr-[4%] lg:mr-[2%] absolute     rounded-md" >
                <ul className="font-montserrat font-bold text-slate-600 flex flex-col justify-center mt-2  p-4 gap-2">
                    <a href="#aboutMe" onClick={() => setIsOpening(!isOpening)}><li className=" pl-4 hover:text-white hover:bg-slate-600 rounded-xl text-[12px] md:text-[1rem]">Sobre Mí</li></a>
                    <a href="#proyectos" onClick={() => setIsOpening(!isOpening)}><li className=" pl-4 hover:text-white hover:bg-slate-600 rounded-xl  text-[12px] md:text-[1rem]">Proyectos</li></a>
                </ul>
            </div>}
      </nav>
  )
}

export default NavBar