import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/nathan2.png"
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    hidden2: {x: 100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ml-10">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
                    >
                        Nathan Abraham Sinaga
                    </motion.h1>
                    <motion.span 
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent"
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                    >
                            IT Student
                    </motion.span>
                    <motion.p 
                        className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        src={profilePic} 
                        alt="Nathan Abraham Sinaga" 
                        variants={container(1.2)}
                        initial="hidden2"
                        animate="visible"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero