"use client";

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, type = 'text', className = '', ...props }, ref) => {
    return (
      <div className="form-control w-full">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={`
            w-full
            px-4
            py-2
            rounded-md
            border
            border-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-transparent
            transition
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-red-500 text-sm mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;