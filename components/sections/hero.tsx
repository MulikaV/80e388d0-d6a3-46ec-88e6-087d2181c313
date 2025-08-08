"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            John Doe
            <span className="block text-3xl md:text-4xl text-gray-400 mt-2">
              Full Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Building digital experiences with modern web technologies
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <a 
              href="#projects" 
              className="bg-primary px-8 py-3 rounded-lg hover:bg-primary/80 transition"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="border border-gray-600 px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;