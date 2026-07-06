import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-[#849171] text-white shadow-lg shadow-brand-primary/30",
    secondary: "bg-brand-secondary hover:opacity-90 text-white shadow-lg",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10",
    white: "bg-white text-brand-secondary hover:bg-gray-50 border border-gray-200 shadow-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};