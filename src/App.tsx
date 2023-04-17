// App.tsx
import { useState, useEffect } from "react";
import axios from 'axios';

import Chat from "./components/Chat";
import Toggler from "./components/Toggler";
import { ReactstrapModal } from "./components/ReactstrapModal";
import { DisplayResponse } from "./components/DisplayResponse";

import { useChatContext } from "./contexts/ChatContext";

import { GPTResponse } from './interfaces';

import { Button, Input } from 'reactstrap';
import "./styles/App.css";

// Replace YOUR_API_KEY with your actual API key
const GPT_API_URL = 'https://api.openai.com/v1/chat/completions';

const useGPTCall = async (input: string, key: string) => {
  try {
    const response = await axios.post<GPTResponse>(
      GPT_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`,
        },
      },
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    return `Error: ${error}`;
  }
}

function App() {
  const { setMessage, setHistoryMessages, historyMessages } = useChatContext();
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [gptResponse, setGptResponse] = useState("");
  const [key, setKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const responseObj = { type: "Answer", text: gptResponse };
    setHistoryMessages([...historyMessages, responseObj]);
  }, [gptResponse])

  const handleToggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleKeyChange = (event: any) => {
    if (event.key === 'Enter' && isOpen) {
      setIsOpen(false);
    }
    setKey(event.target.value);
  };

  const handleSend = async (type: string, newPrompt: string) => {
    setMessage({
      type,
      text: newPrompt
    });
    if (key !== "") {
      const response: string = await useGPTCall(newPrompt, key);
      if (response) {
        setGptResponse(response);
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <Chat onSend={handleSend} isChatVisible={isChatVisible} />
        <Toggler handleToggleChat={handleToggleChat} />
      </div>
      <section className="App-content">
        <DisplayResponse message={gptResponse} />
      </section>

      <ReactstrapModal isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Set your GPT API Key"
      >
        <div>
          <Input type="text" placeholder="Enter your OPEN AI API KEY" value={key} onChange={handleKeyChange} />
        </div>
      </ReactstrapModal>
    </div>
  );
}

export default App;
