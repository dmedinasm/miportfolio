import React, { useState } from 'react'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitterX, BsGithub } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseFill } from 'react-icons/ri'

import SocialLogo from './SocialLogo'

const NavBar = () => {
  const [isOpening, setIsOpening] = useState(false)

  return (
      <nav className="flex flex-row justify-between items-center py-8 px-8 md:px-[64px] relative ">
          <a href="https://dmedinadev.netlify.app"><div className="border-[2px] md:border-[5px] border-black rounded-[50%]  w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] bg-miImg bg-cover bg-center bg-no-repeat ">
          </div></a>
          <div className="flex flex-row items-center justify-center gap-2 ">
              <SocialLogo logoSocial={<AiOutlineMail className="w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="mailto:dmedinasm@gmail.com" />
              <SocialLogo logoSocial={<AiFillLinkedin className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://www.linkedin.com/in/dmedinam" />
              <SocialLogo logoSocial={<BsTwitterX className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://twitter.com/dmedinas88" />
              <SocialLogo logoSocial={<BsGithub className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>} link="https://github.com/dmedinasm" />
              <SocialLogo onClick={() => setIsOpening(!isOpening)} isOpening={isOpening} logoSocial ={
            !isOpening
              ? <RxHamburgerMenu className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]" onClick={() => setIsOpening(!isOpening)}/>
              : <RiCloseFill className="sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]" onClick={() => setIsOpening(!isOpening)}/>
              }/>
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
