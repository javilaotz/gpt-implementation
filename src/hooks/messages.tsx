import { useState, useEffect } from 'react';
import { MessageInterface } from '../interfaces';

const useMessages = () => {
  const [message, setMessage] = useState<MessageInterface>();
  
  const [gptResponse, setGptResponse] = useState<string>()
  const [historyMessages, setHistoryMessages] = useState<MessageInterface[]>([]); // Initialize with an empty array


  useEffect(() => {
    if (message) {
      setHistoryMessages([...historyMessages, message]);
    }
  }, [message]);

  return {
    message,
    setMessage,
    historyMessages,
    setHistoryMessages,
    gptResponse, 
    setGptResponse
  };
};

export default useMessages;
