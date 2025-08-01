import React, { useState, useEffect } from 'react';

interface MultiTypewriterProps {
  phrases: string[];
  speed?: number;
  delay?: number;
}

const MultiTypewriter: React.FC<MultiTypewriterProps> = ({
  phrases,
  speed = 80,
  delay = 1500,
}) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex, phrases, speed, delay]);

  return <span className='spand'>{text}</span>;
};

export default MultiTypewriter;
