"use client";

import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, description }) => {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-300 dark:border-gray-700">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 mt-1.5" />
      <time className="text-sm text-gray-500 dark:text-gray-400">{year}</time>
      <h3 className="text-xl font-semibold mt-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{company}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Timeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;