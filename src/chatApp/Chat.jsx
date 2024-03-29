import React, { useState } from "react";
import axios from "axios";

import { MdMessage } from "react-icons/md";
import { CgClose } from "react-icons/cg";

import "./chat.css"; 

function Chat() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const urlInput = 'http://192.168.1.3:8000/user_input'

  const handleUserInput = async () => {
    if (input === "exit") {
      return;
    }
    try {
      const response = await axios.post(urlInput, { input });
      const responseData = response.data;
      const newChatHistory = [...chatHistory, { role: "user", content: input }];
      if (responseData && responseData.response) {
        newChatHistory.push({ role: "system", content: responseData.response });
      }
      setChatHistory(newChatHistory);
      setInput("");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo nuevamente.");
    }
  };

  const toggleChat = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`container ${expanded ? 'expanded' : ''}`}>
      <div className="chat-bubble" onClick={toggleChat}>
        {expanded ? (
          <span className="material-symbols-outlined"><CgClose className="logo"/></span>
        ) : (
          <span className="material-symbols-rounded"><MdMessage className="logo"/></span>
        )}
      </div>
      {expanded && (
        <>
          <div className="chat-header">
            <h2>Chat Bot</h2>
          </div>
          <div className="chat-container">
            <div className="chat-history">
              {chatHistory.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  {message.content}
                </div>
              ))}
            </div>
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleUserInput}>Enviar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;
