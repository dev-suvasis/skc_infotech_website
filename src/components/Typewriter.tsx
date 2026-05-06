"use client";

import React, { useState, useEffect } from 'react';

interface Part {
  text: string;
  className?: string;
}

interface TypewriterProps {
  parts: Part[];
  className?: string;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ parts, className = "", delay = 40 }) => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentPartIndex < parts.length) {
      const currentPart = parts[currentPartIndex];
      if (currentCharIndex < currentPart.text.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Move to next part
        const timeout = setTimeout(() => {
          setCurrentPartIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentPartIndex, currentCharIndex, parts, delay]);

  return (
    <h1 className={className}>
      {parts.map((part, index) => {
        let textToShow = "";
        if (index < currentPartIndex) {
          textToShow = part.text;
        } else if (index === currentPartIndex) {
          textToShow = part.text.slice(0, currentCharIndex);
        }
        
        return (
          <span key={index} className={part.className}>
            {textToShow}
          </span>
        );
      })}
      {!isComplete && (
        <span className="animate-pulse border-r-2 border-secondary ml-1" />
      )}
    </h1>
  );
};

export default Typewriter;
