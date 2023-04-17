// DisplayPrompt.tsx
import React from "react";

interface DisplayPromptProps {
  prompt: string;
}

const DisplayPrompt: React.FC<DisplayPromptProps> = ({ prompt }) => {
  return <div>
    <h1>Question</h1>
    {prompt}
    </div>;
};

export default DisplayPrompt;
