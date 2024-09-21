import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const chatEndRef = useRef(null); 

  
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; 

    setIsLoading(true);
    setError('');

    // Add user message to the conversation
    setConversation((prev) => [...prev, { type: 'user', text: message }]);

    try {
      const res = await axios.post('http://localhost:5000/generate-response', {
        message: message,
      });

      // Add bot response to the conversation
      setConversation((prev) => [...prev, { type: 'bot', text: res.data.response }]);
    } catch (err) {
      console.error(err);
      setError('Failed to generate a response. Please try again.');
    } finally {
      setIsLoading(false);
    }

    setMessage(''); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Salary Chatbot</h2>

        <div className="flex flex-col space-y-4 mb-4 p-4 h-96 overflow-y-auto bg-gray-50 rounded-lg border">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-lg ${
                  msg.type === 'user' ? 'bg-blue-500 text-white max-w-xs' : 'bg-gray-300 text-black max-w-xs'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} /> 
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {error && (
          <div className="bg-red-100 p-4 rounded-lg border border-red-300 mt-4">
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
