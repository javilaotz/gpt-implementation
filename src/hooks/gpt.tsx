// useGPTHook.ts
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGPTProps, GPTResponse } from '../interfaces';

// Replace YOUR_API_KEY with your actual API key
const API_KEY = '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';
const GPT_API_URL = 'https://api.openai.com/v1/chat/completions';

export const useGPTCall = async (input: string) => {
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
          'Authorization': `Bearer ${API_KEY}`,
        },
      },
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching GPT response:', error);
    return `Error: ${error}`;
  }
}

const useGPT: useGPTProps = async (prompt) => {
  const [responseGPT, setResponseGPT] = useState<string | null>(null);

  if(prompt){
    const resp = await useGPTCall(prompt);
    setResponseGPT(resp);
  }

  return responseGPT;
};

export default useGPT;
