"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { techStack } from '@/lib/constants';

const TechStack = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Technologies I Work With
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;