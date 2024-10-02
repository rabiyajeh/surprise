import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled components for custom styles
const MessageBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 5px solid #ff69b4;
  border-radius: 20px;
  background-color: #fff0f5;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const HeartAnimation = styled(motion.span)`
  font-size: 2.5rem;
  margin: 5px;
`;

const Balloon = styled(motion.img)`
  width: 50px;
  position: absolute;
`;

const PartyPoppers = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
`;

const Message = () => {
  // Animated styles for balloons, hearts, and confetti
  const balloonVariants = {
    float: {
      y: [-20, 20],
      transition: { yoyo: Infinity, duration: 2 },
    },
  };

  return (
    <MessageBox
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, type: 'spring' }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontFamily: 'Caveat, cursive' }}
      >
        🎉 Surprise! 🎉
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ fontSize: '1.5rem' }}
      >
        My father has agreed to our marriage! 💖
      </motion.p>

      {/* Animated Heart Emojis */}
      <div>
        {['💖', '💓', '💘', '💝'].map((heart, index) => (
          <HeartAnimation
            key={index}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, -30, 0], opacity: 1 }}
            transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
          >
            {heart}
          </HeartAnimation>
        ))}
      </div>

      {/* Balloon Animations */}
      <Balloon
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Red_balloon.svg/1200px-Red_balloon.svg.png"
        alt="Red balloon"
        variants={balloonVariants}
        animate="float"
        style={{ top: '100px', left: '20px' }}
      />
      <Balloon
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Red_balloon.svg/1200px-Red_balloon.svg.png"
        alt="Red balloon"
        variants={balloonVariants}
        animate="float"
        style={{ top: '120px', right: '30px' }}
      />

      {/* Party Poppers */}
      <PartyPoppers
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ top: '50px', right: '50px' }}
      >
        🎊🎉🎊
      </PartyPoppers>
      <PartyPoppers
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ top: '70px', left: '50px' }}
      >
        🎉🎊🎉
      </PartyPoppers>

      {/* Cute Image with Animation */}
      <motion.img
        src="https://example.com/path-to-your-cute-image.jpg"
        alt="Cute animation"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, loop: Infinity }}
        style={{ width: '200px', margin: '20px 0', borderRadius: '20px' }}
      />
    </MessageBox>
  );
};

export default Message;
