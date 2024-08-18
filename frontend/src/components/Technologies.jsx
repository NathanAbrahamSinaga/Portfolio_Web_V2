import {RiReactjsLine} from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSvelteFill } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariant = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div 
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                variants={iconVariant(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                variants={iconVariant(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiExpress className="text-7xl text-white" />
            </motion.div>
            <motion.div 
                variants={iconVariant(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <GrMysql className="text-7xl text-[#00758f]" />
            </motion.div>
            <motion.div 
                variants={iconVariant(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <SiDjango className="text-7xl text-[#22ce8c]" />
            </motion.div>
            <motion.div 
                variants={iconVariant(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
            <motion.div 
                variants={iconVariant(7)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
            >
                <RiSvelteFill className="text-7xl text-[#aa1e1e]" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies