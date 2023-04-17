// src/contexts/ChatContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import useMessages from '../hooks/messages';
import {
  ChatContextState,
  ChatContextProviderInterface
} from "../interfaces";
import useGPT from '../hooks/gpt';

const ChatContext = createContext<ChatContextState | undefined>(undefined);

const ChatContextProvider: React.FC<ChatContextProviderInterface> = ({ children }) => {
  const {
    message, 
    setMessage, 
    historyMessages, 
    setHistoryMessages, 
  } = useMessages();

  const value = {
    message,
    setMessage,
    historyMessages,
    setHistoryMessages
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatContextProvider');
  }
  return context;
};

export { ChatContextProvider, useChatContext };
