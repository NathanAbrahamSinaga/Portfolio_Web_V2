import React, { useState } from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl text-neutral-300"
      >
        Get in Touch
      </motion.h2>
      <motion.form 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}  
        className="max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-300">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-300"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-300">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-300"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-300">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-neutral-300"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-cyan-900 bg-neutral-300 rounded-md hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
        >
          Send Message
        </button>
        {submitStatus === 'success' && (
          <p className="mt-4 text-green-500">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-500">Error sending message. Please try again.</p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;