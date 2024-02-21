import React from 'react'

const Hero = () => {
  return (
    <section className="py-12 my-2 px-8 md:px-[64px] md:text-start">
        <h1 className="font-montserrat font-bold text-[195%] md:text-[300%] lg:text-[390%] w-[100%]  tracking-tight leading-[1.5] mb-[5%]">Daniel Miguel Medina, Junior Frontend Developer. Conocimientos de Javascript, React y TailwindCSS</h1>
        <p className="font-montserrat text-[110%] md:text-[150%] md:text-start leading-8 md:leading-10 w-[100%] tracking-[-.01em] ">He desarrollado varios proyectos personales, como una aplicación web para planificar dietas, además de maquetar demos de landing pages responsivas manejando diferentes estilos. En estos proyectos, he aprendido a trabajar de forma autónoma y a resolver problemas de forma creativa.</p>
        <hr className="mt-12 font-bold text-black text-[4px]"/>
    </section>
  )
}

export default Hero