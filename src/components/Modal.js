// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transform-origin: bottom;
`;

const ModalHeader = styled.div`
  background: #ff69b4; /* Header background color */
  padding: 15px;
  text-align: center;
  color: white;
  font-size: 1.5rem;
`;

const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #ff69b4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff85b0;
  }
`;

const Modal = ({ onClose, message }) => {
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalContainer
        initial={{ scale: 0, rotateX: -90 }}
        animate={{ scale: 1, rotateX: 0 }}
        exit={{ scale: 0, rotateX: -90 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <ModalHeader>🎉 Surprise! 🎉</ModalHeader>
        <ModalContent>{message}</ModalContent>
        <ModalContent>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
