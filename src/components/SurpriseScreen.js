// src/components/SurpriseScreen.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled components for custom styles
const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffe4e1, #fff0f5);
  color: #ff69b4;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SurpriseText = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Caveat', cursive; /* Add a cute font */
`;

const EmojiText = styled(motion.p)`
  font-size: 2.5rem;
  line-height: 2.5rem;
`;

const LoveHeart = styled(motion.span)`
  font-size: 4rem;
  margin: 0 10px;
`;

const Button = styled(motion.button)`
  background-color: #ff69b4;
  color: white;
  padding: 12px 24px;
  font-size: 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff1493;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-3px);
  }
`;

const ConfettiContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const SuspenseAnimation = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  color: #ff69b4;
  z-index: 2;
`;

const SuspenseOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for suspense */
  z-index: 1;
`;

const ClockWrapper = styled(motion.div)`
  font-size: 3rem;
  font-family: 'Caveat', cursive;
  color: #ff69b4;
  margin-top: 20px;
`;

// Countdown Timer function
const CountdownTimer = ({ onTimerEnd }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId); // Clear timer if component unmounts
    } else {
      onTimerEnd();
    }
  }, [seconds, onTimerEnd]);

  return (
    <ClockWrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      🕒 {seconds}
    </ClockWrapper>
  );
};

const SurpriseScreen = ({ onContinue }) => {
  const [showButton, setShowButton] = useState(false);
  const [showSuspense, setShowSuspense] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true); // State to control overlay visibility

  // This function will be called once the timer ends
  const handleTimerEnd = () => {
    setShowButton(true);        // Show the button after 5 seconds
    setShowSuspense(false);     // Hide the suspense message after 5 seconds
    setShowOverlay(false);      // Hide the dark overlay after 5 seconds
  };

  return (
    <ScreenWrapper>
      {/* Dark suspense overlay, which fades out after 5 seconds */}
      {showOverlay && (
        <SuspenseOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}  // Fade out when overlay is hidden
          transition={{ duration: 1 }}
        />
      )}

      {/* Suspenseful confetti reveal */}
      <ConfettiContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          style={{ position: 'absolute', width: '100%', height: '100%', background: 'url("https://media.giphy.com/media/5xtDCH8sY7i6fdjTr8I/giphy.gif")', backgroundSize: 'cover', zIndex: -1 }}
        />
      </ConfettiContainer>

      {/* Initial message with suspense */}
      <SurpriseText
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        💝 I Have a Surprise for You! 💝
      </SurpriseText>

      {/* Suspense text animation - hidden after 5 seconds */}
      {showSuspense && (
        <SuspenseAnimation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Wait for it... ⏳
        </SuspenseAnimation>
      )}

      {/* Countdown Timer */}
      <CountdownTimer onTimerEnd={handleTimerEnd} />

      {/* Emoji surprise reveal */}
      <EmojiText
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 4 }}
      >
        🎉✨💕💖💘💗💓💞💝💟💕
      </EmojiText>

      {/* Final heart reveal */}
      <LoveHeart
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1.5, delay: 5 }}
      >
        💖
      </LoveHeart>

      {/* Button to see the final surprise after 5 seconds */}
      {showButton && (
        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.1 }}
          onClick={onContinue}
        >
          See the Surprise! 🌟
        </Button>
      )}
    </ScreenWrapper>
  );
};

export default SurpriseScreen;
