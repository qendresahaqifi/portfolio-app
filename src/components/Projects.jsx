import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Weather App",
        description: "A sleek weather forecast app using OpenWeather API, built with React and Tailwind CSS.",
        image: "/projects/project-2.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://weather-app-qendresahaqifi.vercel.app/",
        gitHubUrl: "https://github.com/qendresahaqifi/weather-app",
    },
    {
        id: 2,
        title: "Blog App",
        description: "A modern blog platform with category filtering and dynamic routing, developed using React and JSON data.",
        image: "/projects/project-3.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://blog-app-qendresahaqifi.vercel.app/",
        gitHubUrl: "https://github.com/qendresahaqifi/blog-app",
    },
    {
        id: 3,
        title: "Eshop App",
        description: "A stylish e-commerce landing page crafted with React and Tailwind, featuring product highlights and dark mode.",
        image: "/projects/project-4.png",
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://eshop-app-qendresahaqifi.vercel.app/",
        gitHubUrl: "https://github.com/qendresahaqifi/eshop-app",
    },

]

const Projects = () => {
  return (
    <section id="projects" className='py-24 px-4 relative'>
        <div className="container mx-auto max-w-5xl">
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Featured <span className='text-primary'>Projects</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, key) => {
                    return <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className='p-6'>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => {
                                    return <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                                        {tag}
                                    </span>
                                })}
                            </div>
                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                            <div className='flex justify-between items-center'>
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className='text-center mt-12'>
                <a href="https://github.com/qendresahaqifi" target="_blank" className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projects