import React from 'react'

const Project = ({title,link,image,description, repoLink}) => {
  return (
      <div className="flex flex-col items-start justify-center gap-10">
          <h2 className="font-montserrat font-bold text-[200%]">{title}</h2>
          <a href={link} className="underline font-montserrat font-bold text-[110%]" target='_blank'>{link}</a>
          <div className="font-montserrat font-bold text-[110%]">
          <p>github repo del proyecto:<a href={repoLink} className="underline pl-2" target='_blank'>{repoLink}</a></p>
          </div>
          <img src={image} alt={`img ${title}`} className="w-[900px] rounded-xl shadow-2xl" />
          <p className="font-montserrat text-[130%] text-start">{description}</p>
      </div>
    
  )
}

export default Project