"use client";

import React, { useState, useEffect } from 'react';

interface DynamicTypewriterProps {
  prefix: string;
  suffix: string;
  words: string[];
  className?: string;
  highlightClass?: string;
  typingDelay?: number;
  erasingDelay?: number;
  newWordDelay?: number;
}

const DynamicTypewriter: React.FC<DynamicTypewriterProps> = ({
  prefix,
  suffix,
  words,
  className = "",
  highlightClass = "text-secondary",
  typingDelay = 100,
  erasingDelay = 50,
  newWordDelay = 2000
}) => {
  const [phase, setPhase] = useState<'typingPrefix' | 'typingFirstWord' | 'typingSuffix' | 'looping'>('typingPrefix');
  const [prefixText, setPrefixText] = useState("");
  const [suffixText, setSuffixText] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'typingPrefix') {
      if (prefixText.length < prefix.length) {
        timer = setTimeout(() => {
          setPrefixText(prefix.slice(0, prefixText.length + 1));
        }, typingDelay);
      } else {
        setPhase('typingFirstWord');
      }
    } else if (phase === 'typingFirstWord') {
      const fullWord = words[0];
      if (currentWord.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentWord(fullWord.slice(0, currentWord.length + 1));
        }, typingDelay);
      } else {
        setPhase('typingSuffix');
      }
    } else if (phase === 'typingSuffix') {
      if (suffixText.length < suffix.length) {
        timer = setTimeout(() => {
          setSuffixText(suffix.slice(0, suffixText.length + 1));
        }, typingDelay);
      } else {
        timer = setTimeout(() => setPhase('looping'), newWordDelay);
      }
    } else if (phase === 'looping') {
      const fullWord = words[currentWordIndex];
      
      if (!isDeleting) {
        if (currentWord.length < fullWord.length) {
          timer = setTimeout(() => {
            setCurrentWord(fullWord.slice(0, currentWord.length + 1));
          }, typingDelay);
        } else {
          timer = setTimeout(() => setIsDeleting(true), newWordDelay);
        }
      } else {
        if (currentWord.length > 0) {
          timer = setTimeout(() => {
            setCurrentWord(fullWord.slice(0, currentWord.length - 1));
          }, erasingDelay);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [prefixText, suffixText, currentWord, isDeleting, currentWordIndex, phase, prefix, suffix, words, typingDelay, erasingDelay, newWordDelay]);

  const Cursor = () => <span className="animate-pulse border-r-4 border-secondary ml-1" />;

  return (
    <h1 className={className}>
      <span>
        {prefixText}
        {phase === 'typingPrefix' && <Cursor />}
      </span>
      
      {phase !== 'typingPrefix' && (
        <span className={highlightClass}>
          {" "}{currentWord}
          {(phase === 'typingFirstWord' || (phase === 'looping')) && <Cursor />}
        </span>
      )}

      {phase !== 'typingPrefix' && phase !== 'typingFirstWord' && (
        <span>
          {" "}{suffixText}
          {phase === 'typingSuffix' && <Cursor />}
        </span>
      )}
    </h1>
  );
};

export default DynamicTypewriter;
