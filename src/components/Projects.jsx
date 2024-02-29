import React from 'react'
import Project from './Project'
import gpt4Img from '../assets/gpt4uxui.jpg'
import restaurantImg from '../assets/restaurantuxui.jpg'
import dietaryImg from '../assets/dietary.jpg'
const Projects = () => {
  return (
    <section className="py-12 px-8 md:px-[64px] my-2 flex flex-col">
        <h1 className="font-montserrat font-bold  text-[200%] md:text-[300%] mb-4 text-start text-slate-600">Proyectos Personales</h1>
        <p className="font-montserrat text-[110%] md:text-[130%] mb-12 leading-8 md:leading-10">Aquí presento una selección de mis proyectos personales. Cada uno de ellos representa una oportunidad para explorar nuevas ideas, desarrollar mis habilidades y desafiarme a mí mismo.</p>

      <div className="flex flex-col gap-10">
        <Project
          title="GPT-4 UI/UX Landing Page Demo"
          link="https://gpt4uiux.netlify.app"
          image={gpt4Img}
          description="Este proyecto consistió en el desarrollo y maquetación de una Landing Page Demo a partir de un diseño proporcionado en Figma. El objetivo era crear una página web funcional y atractiva que reflejara fielmente el diseño original, utilizando  HTML, CSS y React. El resultado final fue una Landing Page Demo completa y funcional que reflejaba fielmente el diseño original de Figma. La página web era atractiva, fácil de navegar y respondía correctamente en diferentes dispositivos."
          repoLink ="https://github.com/dmedinasm/gpt3uxui"
        />
        <Project
          title="Restaurant UI/UX Landing Page Demo"
          link="https://restaurantuxiu.netlify.app"
          image={restaurantImg}
          description="Este proyecto consistió en la maquetación y desarrollo de una Landing Page Demo para un restaurante a partir de un diseño preestablecido en Figma. El objetivo era crear una página web atractiva e informativa que pudiera captar la atención de los clientes potenciales y los incentivara a visitar un restaurante determinado. Su desarrollo fue implementado con HTML, TailwindCSS y React."
          repoLink ="https://github.com/dmedinasm/restaurantuxui"
        />
        <Project
          title="Dietary Planner Tool"
          link="https://dietaryplannertool.netlify.app"
          image={dietaryImg}
          description="Dietary Planner Tool es una herramienta online desarrollada con React y TailwindCSS  para crear planes de dieta a partir de filtros de información que suministra el usuario. Esta herramienta accede a una API de multitud de recetas y crea un plan de dieta de 7 días, dando información nutricional de cada receta de dicho plan."
          repoLink ="https://github.com/dmedinasm/newdietaryplan"
        />
      </div>
       
    </section>
  )
}

export default Projects