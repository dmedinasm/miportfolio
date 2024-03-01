import React from 'react'

const SocialLogo = ({logoSocial, link, isOpening}) => {
  return (
    <>
          <div className="border-[2px] md:border-[5px] border-solid border-black rounded-[50%] p-2 md:p-4 flex place-items-center hover:bg-gray-100" style={{backgroundColor: isOpening ? "#F4F4F5" :""}}>
            <a href={link} target='_blank'>
            {logoSocial}
            </a>  
          </div>
    </>
  )
}

export default SocialLogo