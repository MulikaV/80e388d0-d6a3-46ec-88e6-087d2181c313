"use client";

import { FC } from 'react';

interface TimelineProps {
  items: {
    date: string;
    title: string;
    description: string;
    company?: string;
  }[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      {items.map((item, index) => (
        <div key={index} className="mb-8 ml-12">
          <div className="absolute left-3 -ml-1 mt-1.5 h-3 w-3 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900"></div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-blue-500">{item.date}</span>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            {item.company && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.company}
              </span>
            )}
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;