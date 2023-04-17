// Chat.tsx
import React, { useState } from 'react';
import '../../styles/chat.css';
import PromptInput from '../PromptInput';
import { motion } from "framer-motion";
import { useChatContext } from '../../contexts/ChatContext';
import { ChatProps } from '../../interfaces';

const Chat: React.FC<ChatProps> = ({ onSend, isChatVisible }) => {

  const { historyMessages } = useChatContext();

  const chatVariants = {
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
    hidden: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 100 } },
  };

  const messages = historyMessages?.map((message, i) => message && (
    <div className={`message message-${message.type === "question" ? "right" : "left"}`} key={i}>
      <p>{`${message.text}`}</p>
    </div>
  ))

  return (
    <div className="app-container">
      <motion.div
        className="chat-container"
        initial="hidden"
        animate={isChatVisible ? 'visible' : 'hidden'}
        variants={chatVariants}
      >
        <div className="chat-header">
          <h2>GPT</h2>
        </div>
        <div className="chat-content">
        { messages }
        </div>
        <div className="chat-input">
          <PromptInput onSend={onSend} />
        </div>
      </motion.div>
    </div>
  );
};

export default Chat;
