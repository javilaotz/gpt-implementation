import React from 'react'
import { QuestionMark } from '../../assets/SVG/icons/QuestionMark';

type Props = {
  handleToggleChat: () => void;
}

export default function Toggler({ handleToggleChat }: Props) {
  return (
    <div>
      <button
        id="toggle-chat-btn"
        className="toggle-chat-btn"
        onClick={handleToggleChat}
      >
        <QuestionMark />
      </button>
  </div>
  )
}