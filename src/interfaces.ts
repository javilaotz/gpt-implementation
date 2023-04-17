export interface MessageInterface {
  type: string | null;
  text: string | null;
}

export interface ChatContextState {
  message: MessageInterface | undefined;
  setMessage: (message: MessageInterface) => void;
  historyMessages: MessageInterface[] | [];
  setHistoryMessages: (message: MessageInterface[]) => void;
}

export interface ChatContextProviderInterface {
  children: React.ReactNode;
}

export interface ChatProps {
  onSend: (newPrompt: string, type: string) => void;
  isChatVisible: boolean;
}

export interface GPTResponse {
  created: number;
  id: string;
  object: string;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    index: number;
    finish_reason: string;
    message: {
      content: string;
      role: string;
    }
  }[];
}

export interface PromptInputProps {
  onSend: (prompt: string, type: string) => void;
}

export type useGPTProps = (prompt: string) => Promise<string | null>;