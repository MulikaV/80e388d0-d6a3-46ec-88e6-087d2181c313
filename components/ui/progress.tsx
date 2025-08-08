"use client";

import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  color = '#3b82f6'
}) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-2.5 rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;