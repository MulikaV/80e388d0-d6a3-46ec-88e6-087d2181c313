"use client";

import React from 'react';

interface TextAreaProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[150px] ${className}`}
    />
  );
};