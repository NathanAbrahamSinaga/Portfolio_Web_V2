import logo from "../assets/n.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="Kevin Rush Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a 
          href="https://www.linkedin.com/in/nathan-abraham-sinaga-a122b8208" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover="hover"
          variants={iconVariants}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="https://github.com/NathanAbrahamSinaga" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover="hover"
          variants={iconVariants}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/nthn_abrhm" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover="hover"
          variants={iconVariants}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;