import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
const AboutMe = () => {
  return (
      <section className="py-12 px-8 md:px-[64px] flex flex-col gap-10 ">
          <h2 className="font-montserrat font-bold  text-[200%] md:text-[300%] mb-4 text-slate-600 text-start"> Sobre Mí</h2>
          <div>
              <h3 className="font-montserrat font-bold text-[130%] md:text-[200%] text-slate-600 mb-2">Mi camino</h3>
              <ul className="font-montserrat text-[100%] md:text-[130%] text-start leading-8 md:leading-10 flex flex-col gap-8 pl-4 items-start">
                <li ><span className="font-bold text-slate-600 ">✔  2007 - Técnico Medio en Informática:</span> Adquirí las bases de la programación y el pensamiento lógico.</li>
                <li ><span className="font-bold text-slate-600 ">✔ 2009-2014 - Carrera de Ingeniería en Telecomunicaciones:</span> Fortalecí mis conocimientos de lógica computacional a traves de materias como electrónica digital y lenguaje ensamblador aplicado a sistemas con microprocesadores.</li>
                <li > <span className="font-bold text-slate-600 ">✔ 2014-2022 - Ingeniero en Telecomunicaciones:</span> Desarrollo habilidades de gestión y trabajo en equipo.</li>
                <li ><span className="font-bold text-slate-600 ">✔ 2022-presente - Desarrollador Frontend:</span> Retomo mi pasión por la programación, enfocandome en React. He completado varios cursos y proyectos, y estoy listo para aportar valor a partir de los conocimientos adquiridos.</li>
              </ul>
          </div>
          <div>
              <h3 className="font-montserrat font-bold text-[130%] md:text-[200%] text-slate-600  mb-2">Mis Habilidades</h3>
              <ul className="font-montserrat text-[100%] md:text-[130%] text-start leading-8 md:leading-10 flex flex-col gap-4 pl-4">
                  <li className="flex items-center gap-2"><span className="text-slate-600 font-bold">✔</span> HTML, CSS, JavaScript</li>
                  <li className="flex items-center gap-2 "><span className="text-slate-600 font-bold">✔</span> ReactJS</li>
                  <li className="flex items-center gap-2"><span className="text-slate-600 font-bold">✔</span> Responsive design</li>
                  <li className="flex items-center gap-2"><span className="text-slate-600 font-bold">✔</span> Trabajo en equipo</li>
                  <li className="flex items-center gap-2"><span className="text-slate-600 font-bold">✔</span> Autoaprendizaje</li>
              </ul>
          </div>
          <div>
              <h3 className="font-montserrat font-bold text-[130%] md:text-[200%] text-slate-600 mb-2">Mi Pasión</h3>
              <p className="font-montserrat text-[100%] md:text-[130%] text-start leading-8 md:leading-10 ">Me apasiona crear interfaces web intuitivas, atractivas y fáciles de usar. Estoy en constante aprendizaje y siempre buscando nuevos desafíos. ¿Te interesa un desarrollador frontend motivado, con capacidad de aprendizaje rápido y dispuesto a trabajar en equipo? ¡Contáctame!</p>
          </div>
          <hr className="mt-12 font-bold text-black text-[4px]" />
      </section>
   
  )
}

export default AboutMe