// DisplayPrompt.tsx
import React from "react";

interface DisplayResponseProps {
  message: string;
}

export const DisplayResponse: React.FC<DisplayResponseProps> = ({ message }) => {
  const tripleQuoteRegex = /```([\s\S]*?)```/;
  const match = message.match(tripleQuoteRegex);
  const content = match ? match[1] : "";

  return (
    <div>
    Contenido analizado
    <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
    );
};
