import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import './Letter.css'; // Import custom styles for additional effects

const LetterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle at center, #ffe6f2, #ffccf2, #ff99cc, #ff69b4);
  position: relative;
  overflow: hidden;
  animation: backgroundPan 15s infinite alternate ease-in-out;

  @keyframes backgroundPan {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`;

const Envelope = styled(motion.div)`
  position: relative;
  width: 600px;  /* Increased width */
  height: 500px; /* Increased height */
  background: linear-gradient(145deg, #ffccf2, #ff99cc);
  border: 3px solid #ff69b4;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 105, 180, 0.6);
  }
`;

const Flap = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 50%;
  background: linear-gradient(145deg, #ff69b4, #ff85b0);
  border-bottom: 3px solid #ff69b4;
  border-radius: 0 0 15px 15px;
  transform-origin: bottom;
  z-index: 1;
`;

const LetterContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px; /* Increased padding */
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Hide overflow for animation */
`;

/* const LetterText = styled.h2`
  color: #ff1493;
  font-family: 'Great Vibes', cursive;
  font-size: 4.5rem; /* Increased font size */
/*text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  animation: bounce 1s infinite alternate;

  @keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }
`;*/

const LetterMessageContainer = styled.div`
  max-height: 300px; /* Set a max height for the scrollable area */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 10px; /* Padding for the message */
  margin-top: 20px; /* Space between the title and the message */
`;

const LetterMessage = styled.p`
  font-size: 2.5rem; /* Increased font size */
  color: #ff69b4;
  font-family: 'Poppins', sans-serif;
  margin: 10px 0;
  text-align: center;
  line-height: 1.6;
  font-weight: 300;
`;

const HeartAnimation = styled(motion.img)`
  width: 150px;
  margin-top: 20px;
  filter: drop-shadow(0 0 15px #ff69b4);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 25px #ff1493);
  }
`;

const Sticker = styled(motion.img)`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: -10px;
  right: -10px;
  transform: rotate(-15deg);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg) scale(1.2);
    filter: drop-shadow(0 0 10px #ff69b4);
  }
`;

const Sparkle = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ff69b4;
  border-radius: 50%;
  box-shadow: 0 0 20px #ff69b4;
  opacity: 0.7;
`;

const LoadingMessage = styled.div`
  font-size: 2rem;
  color: #ff69b4;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 20px;
`;

const HeartBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('https://cdn.pixabay.com/photo/2014/02/27/15/18/heart-239195_1280.png') no-repeat;
  background-size: cover;
  opacity: 0.1; /* Light background */
  z-index: -1; /* Send to the back */
`;

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Delay for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleEnvelopeClick = () => {
    setIsOpen((prev) => !prev); // Toggle open/close
  };

  // Create random sparkle positions
  const sparkles = Array.from({ length: 20 }).map((_, index) => ({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    delay: Math.random() * 2 + 's',
    duration: Math.random() * 2 + 1 + 's',
  }));

  return (
    <LetterContainer>
      {loading ? (
        <LoadingMessage>Get Ready...</LoadingMessage>
      ) : (
        <>
          <HeartBackground />
          <Envelope onClick={handleEnvelopeClick}>
            {/* Flap Animation */}
            <Flap
              initial={{ rotateX: 0 }}
              animate={{ rotateX: isOpen ? 180 : 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />

            {/* Letter Content */}
            <LetterContent
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
              transition={{ duration: 0.5 }}
            >
            <LetterMessageContainer>
            <LetterMessage>
              Hey you heart-stealing thief!! 🎉
              <br />
              <br />
              Guess what? The moment we’ve been waiting for has finally come—my dad said YES to us! 😍💖 I can hardly believe it!
              <br />
              <br />
              I was so nervous to talk to him, you know? I rehearsed my speech like I was preparing for a big performance! I walked in, took a deep breath, and said, “Dad, I need your blessing for my amazing Husband!” He looked at me with that serious dad face, and I thought, “Oh no, here it comes…” 😅
              <br />
              <br />
              But then he burst out laughing and said, “Of course! As long as he treats you right!” 🎊 I was jumping for joy inside! I mean, who wouldn’t want to hear their dad say yes to the love of their life?
              <br />
              <br />
              We’re one step closer to our happily ever after! Can you believe it? I can’t wait to share this amazing journey with you. Let’s celebrate this awesome news together soon! Maybe a little lunch date? Just you, me, and a cake big enough to hold all our dreams! 🎂✨
              <br />
              <br />
              I’m so grateful to have you in my life, and I can’t wait to see what’s next for us!
              <br />
              <br />
              Love you tons! ❤️
            </LetterMessage>
          </LetterMessageContainer>
          
              <HeartAnimation
                src="https://cdn-icons-png.flaticon.com/512/1821/1821818.png"
                alt="Heart Animation"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </LetterContent>

            {/* Sticker Animation */}
            <Sticker
              src="https://cdn-icons-png.flaticon.com/512/3534/3534087.png"
              alt="Cute sticker"
              animate={{ rotate: isOpen ? [0, 360, 0] : 0 }}
              transition={{ duration: 2, loop: Infinity }}
            />

            {/* Sparkles */}
            {sparkles.map((sparkle, index) => (
              <Sparkle
                key={index}
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  transition: `opacity ${sparkle.duration} ease-in-out`,
                  opacity: 0,
                  animation: `sparkle ${sparkle.delay} forwards`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: [0.5, 1.5, 0.5], opacity: [0, 1, 0] }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </Envelope>
        </>
      )}
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </LetterContainer>
  );
};

export default Letter;
