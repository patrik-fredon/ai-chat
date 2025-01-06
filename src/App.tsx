import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';

interface Model {
  id: string;
  name: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const App: React.FunctionComponent = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState('tinyllama-1.1b');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Načítání modelů z API
  useEffect(() => {
    axios
      .get('http://192.168.31.62:1337/v1/models')
      .then((response) => {
        setModels(response.data.data || []);
        if (response.data.data && response.data.data.length > 0) {
          setSelectedModel(response.data.data[0].id);
        }
      })
      .catch((error) => {
        console.error('Error during model loading: ', error);
        setSelectedModel('tinyllama-1.1b' || models);
      });
  }, []);

  // Automatické scrollování
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, loading]);

  const sendMessage = () => {
    setLoading(true);

    const requestBody = {
      model: 'tinyllama-1.1b' || models,
      messages: [
        { role: 'user', content: message }
      ],
    };

    console.log('Request Body:', JSON.stringify(requestBody, null, 2));

    axios.post('http://192.168.31.62:1337/v1/chat/completions', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
      transformRequest: [(data) => JSON.stringify(data)],
    })
      .then((response) => {
        console.log('API Response:', response.data);
        if (
          response.data &&
          response.data.choices &&
          response.data.choices.length > 0
        ) {
          const assistantMessage = response.data.choices[0].message;
          setChatHistory((prevHistory) => [
            ...prevHistory,
            { role: 'user', content: message },
            assistantMessage,
          ]);
        } else {
          console.error('Unexpected API response format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error in axios request:', error);
        if (error.response) {
          console.error('API Error Response:', error.response.data);
        }
      })
      .finally(() => {
        setLoading(false);
        setMessage('');
      });
  };


  return (
    <div className="bg-darkBg min-h-screen text-white flex flex-col font-synth">
      <div className="container mx-auto p-2 flex-grow flex flex-col">
        <h1 className="text-4xl text-center uppercase font-bold mb-4 text-neonPink animate-pulse">
          AI Chat
        </h1>

        {/* Výběr modelu */}
        <div className="mb-4">
          <label htmlFor="model" className="block text-xl font-medium mb-1">
            Choose a model:
          </label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="bg-darkBgAlt text-neonBlue p-2 rounded w-full border border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonPink"
          >
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        {/* Chat historie */}
        <div
          ref={chatContainerRef}
          className="bg-darkBgAlt p-4 rounded-3xl h-96 overflow-y-scroll mb-4 flex-grow border border-neonPurple"
        >
          {chatHistory.map((chatMsg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`m-4 flex ${chatMsg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              <div
                className={`m-4 p-8 rounded-3xl font-medium text-xl max-w-xl shadow-white ${chatMsg.role === 'user'
                  ? 'bg-gradient-to-r from-blue-700 to-neonBlue text-white rounded-br-none'
                  : 'bg-gradient-to-r from-purple-500 to-neonPink text-white rounded-bl-none'
                  }`}
              >
                {chatMsg.content}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex justify-center items-center h-full">
              <ClipLoader color="#fe019a" size={150} />
            </div>
          )}
        </div>

        {/* Vstupní pole pro zprávu */}
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="bg-darkBgAlt text-white p-8 m-4 rounded-3xl flex-grow border border-neonBlue break-words focus:outline-none focus:ring-2 focus:ring-neonPink placeholder-neonBlue"
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-neonPink p-10 m-4 rounded-3xl text-white text-3xl uppercase hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-neonBlue"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
