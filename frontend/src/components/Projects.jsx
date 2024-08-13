import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className="border-b border-neutral-900">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl"
        >
            Projects
        </motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4"
                    >
                        <img 
                            src={project.image} 
                            width={150}
                            height={150}
                            alt={project.title}
                            className="mb-6 rounded"
                        />
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4"
                    >
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        <div className="mb-4 flex space-x-4">
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center rounded bg-neutral-800 px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 transition duration-300"
                            >
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center rounded bg-purple-900 px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-purple-800 transition duration-300"
                            >
                                <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                        </div>
                        <div>
                            {project.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects