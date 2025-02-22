import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'
import LoadingSpinnerImage from '../assets/loading-spinner.gif';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [ inputText, setInputText ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if(isLoading || inputText === '') {
      return;
    }

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessages); 

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="loading-spinner" src={LoadingSpinnerImage}/>,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);


    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ])

    setInputText('');
    setIsLoading(false);
  }
  
  function sendMessageWithKeyDown(event) {
    if(event.key === 'Enter') {
      sendMessage();
    }
    if(event.key === 'Escape') {
      setInputText('');
    }
  }

  return(
    <div className="chat-input-container">
      <input 
        onKeyDown={sendMessageWithKeyDown} 
        type="text" 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText} 
        value={inputText}
        className="chat-input" 
      />
      <button 
        onClick={sendMessage} 
        className="send-button"
      >Send</button>
    </div>
  );
}