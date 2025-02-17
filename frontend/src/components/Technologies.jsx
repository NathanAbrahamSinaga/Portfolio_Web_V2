import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import matplotlibLogo from '../assets/logos/matplotlib.svg';
import seabornLogo from '../assets/logos/seaborn.svg';
import tailwindsLogo from '../assets/logos/tailwinds.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import scikitLearnLogo from '../assets/logos/scikitlearn.svg';

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
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
      ease: 'easeOut',
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
          {tech.custom ? (
            <img 
              src={tech.icon} 
              alt={tech.alt || 'icon'} 
              className={`w-20 h-20 object-contain ${tech.colorClass}`} 
            />
          ) : (
            <Icon icon={tech.icon} className={`text-7xl ${tech.colorClass}`} />
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

const Technologies = () => {
  const dataAnalystTechnologies = [
    { icon: 'logos:python', colorClass: 'text-blue-500', duration: 2 },
    { icon: 'logos:pandas', colorClass: 'text-indigo-500', duration: 2.5 },
    { icon: 'logos:numpy', colorClass: 'text-purple-500', duration: 3 },
    { icon: matplotlibLogo, colorClass: '', duration: 3.5, custom: true},
    { icon: seabornLogo, colorClass: '', duration: 4, custom: true},
    { icon: scikitLearnLogo, colorClass: 'text-orange-600', duration: 3.5, custom:true },
  ];

  const webDevelopmentTechnologies = [
    { icon: tailwindsLogo, colorClass: 'text-teal-500', duration: 3, custom: true },
    { icon: 'logos:react', colorClass: 'text-[#61DAFB]', duration: 2.5 },
    { icon: 'logos:laravel', colorClass: 'text-red-600', duration: 3.5 },
    { icon: 'logos:nodejs', colorClass: 'text-green-700', duration: 2 },
  ];

  const databaseTechnologies = [
    { icon: 'logos:mysql', colorClass: 'text-cyan-700', duration: 6 },
    { icon: mongodbLogo, colorClass: 'text-green-600', duration: 5, custom: true },
    { icon: 'logos:postgresql', colorClass: 'text-[#336791]', duration: 3 },
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
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TechnologySection title="Data Analyst" technologies={dataAnalystTechnologies} />
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <TechnologySection title="Web Development" technologies={webDevelopmentTechnologies} />
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <TechnologySection title="Database" technologies={databaseTechnologies} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
