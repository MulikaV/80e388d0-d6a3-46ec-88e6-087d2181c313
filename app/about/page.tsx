"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/placeholder.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Professional Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I am a passionate developer with expertise in building modern web applications.
                My journey in software development started several years ago, and I have been
                constantly learning and improving my skills since then.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
                <li>Bachelor of Computer Science - University Name</li>
                <li>Advanced Web Development Certification</li>
                <li>Various Online Courses and Bootcamps</li>
              </ul>
              
              <Link 
                href="/cv.pdf" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                download
              >
                Download CV
              </Link>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="font-medium">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.level}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}

const techStack = [
  { name: "React", level: "Advanced", icon: "⚛️" },
  { name: "Next.js", level: "Advanced", icon: "▲" },
  { name: "TypeScript", level: "Intermediate", icon: "TS" },
  { name: "Node.js", level: "Intermediate", icon: "🟢" },
  { name: "TailwindCSS", level: "Advanced", icon: "🎨" },
  { name: "PostgreSQL", level: "Intermediate", icon: "🐘" },
  { name: "Docker", level: "Basic", icon: "🐳" },
  { name: "AWS", level: "Basic", icon: "☁️" },
];