import { RiReactjsLine, RiTailwindCssFill, RiSvelteFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiDjango, SiFlask, SiScikitlearn } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const subtitleVariant = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const TechnologySection = ({ title, technologies }) => (
  <div className="mb-16">
    <motion.h3 
      className="text-2xl mb-8 text-center"
      variants={subtitleVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>
    <div className="flex flex-wrap items-center justify-center gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={iconVariant(tech.duration)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 ${tech.bgClass || ''}`}
        >
          <tech.icon className={`text-7xl ${tech.colorClass}`} />
        </motion.div>
      ))}
    </div>
  </div>
);

const Technologies = () => {
  const frontendTechnologies = [
    { icon: RiReactjsLine, colorClass: "text-[#61DAFB]", duration: 2.5 },
    { icon: RiTailwindCssFill, colorClass: "text-teal-500", duration: 3 },
    { icon: RiSvelteFill, colorClass: "text-orange-600", duration: 7 },
  ];

  const backendTechnologies = [
    { icon: FaNodeJs, colorClass: "text-green-700", duration: 2 },
    { icon: SiExpress, colorClass: "text-white", duration: 3 },
    { icon: SiDjango, colorClass: "text-lime-500", duration: 2 },
    { icon: SiFlask, colorClass: "text-black", bgClass: "bg-neutral-200", duration: 4 },
  ];

  const dataScienceTechnologies = [
    { icon: SiScikitlearn, colorClass: "text-orange-600", duration: 3.5 },
  ];

  const databaseTechnologies = [
    { icon: SiMongodb, colorClass: "text-green-600", duration: 5 },
    { icon: GrMysql, colorClass: "text-cyan-700", duration: 6 },
    { icon: BiLogoPostgresql, colorClass: "text-[#336791]", duration: 3 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <TechnologySection title="Data Science" technologies={dataScienceTechnologies} />
        <TechnologySection title="Frontend Web" technologies={frontendTechnologies} />
        <TechnologySection title="Backend Web" technologies={backendTechnologies} />
        <TechnologySection title="Database" technologies={databaseTechnologies} />
      </motion.div>
    </div>
  );
};

export default Technologies;