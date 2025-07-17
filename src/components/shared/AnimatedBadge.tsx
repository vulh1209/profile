import React from "react";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  variant?: "tech" | "social" | "button";
  href?: string;
  onClick?: () => void;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  variant = "tech",
  href,
  onClick,
}) => {
  const baseStyles = `
    relative
    group
    inline-flex
    items-center
    justify-center
    transition-all
    duration-300
    ease-out
    cursor-pointer
    hover:scale-110
    active:scale-95
  `;

  const variants = {
    tech: `
      px-4 py-2
      rounded-full
      bg-blue-600/20
      text-blue-400
      hover:bg-blue-500/30
      hover:text-blue-300
      hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.3)]
      backdrop-blur-sm
    `,
    social: `
      p-3
      rounded-full
      bg-gray-800/50
      text-gray-300
      hover:bg-gray-700/60
      hover:text-white
      hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)]
      backdrop-blur-sm
    `,
    button: `
      px-6 py-3
      rounded-lg
      font-medium
      bg-blue-600
      text-white
      hover:bg-blue-500
      hover:shadow-[0_0_30px_5px_rgba(59,130,246,0.4)]
      active:bg-blue-700
    `,
  };

  const content = (
    <div className={`${baseStyles} ${variants[variant]}`}>
      {children}
      <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (onClick) {
    return <button onClick={onClick}>{content}</button>;
  }

  return content;
};

export default AnimatedBadge;
