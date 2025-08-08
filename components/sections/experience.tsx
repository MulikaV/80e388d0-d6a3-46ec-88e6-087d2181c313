"use client";

import { motion } from 'framer-motion';
import { TimelineItem } from '@/components/ui/timeline';

const experienceData = [
  {
    id: 1,
    date: '2022 - Present',
    title: 'Senior Developer',
    company: 'Tech Company',
    description: 'Led development team in creating enterprise applications',
  },
  {
    id: 2,
    date: '2020 - 2022',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Developed and maintained client websites and applications',
  },
  {
    id: 3,
    date: '2018 - 2020',
    title: 'Junior Developer',
    company: 'Startup',
    description: 'Worked on front-end development and UI implementation',
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            {experienceData.map((item) => (
              <TimelineItem
                key={item.id}
                date={item.date}
                title={item.title}
                company={item.company}
                description={item.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;