// PromptInput.tsx
import React, { useEffect, useState } from "react";
import "./styles.css";

import { PromptInputProps } from "../../interfaces";
import { useChatContext } from "../../contexts/ChatContext";
import { TrashBin } from "../../assets/SVG/icons/TrashBin";

const PromptInput: React.FC<PromptInputProps> = ({ onSend }) => {
  const [prompt, setPrompt] = useState("");
  const { setHistoryMessages } = useChatContext();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend("question", prompt);
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit">Send</button>
      <button type="button" onClick={() => setHistoryMessages([])}><TrashBin /></button>
    </form>
  );
};

export default PromptInput;
