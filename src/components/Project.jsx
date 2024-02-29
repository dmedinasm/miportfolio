import React from 'react'

const Project = ({title,link,image,description, repoLink}) => {
  return (
      <div className="flex flex-col items-start justify-center gap-10">
          <h2 className="font-montserrat font-bold text-[130%] md:text-[200%] text-slate-600">{title}</h2>
          <a href={link} className="underline font-montserrat font-bold text-[85%] md:text-[110%]" target='_blank'>{link}</a>
          <div className="font-montserrat font-bold text-[85%] md:text-[110%]">
          <p className="pr-6 mb-2">github repo del proyecto:</p>
          <a href={repoLink} className="underline" target='_blank'>{repoLink}</a>
          </div>
          <img src={image} alt={`img ${title}`} className="w-[900px] rounded-xl shadow-xl" />
          <p className="font-montserrat  text-[100%] md:text-[130%] text-start leading-8 md:leading-10 ">{description}</p>
      </div>
    
  )
}

export default Project