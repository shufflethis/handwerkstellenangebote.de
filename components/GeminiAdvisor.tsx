import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Role } from '../types';

export const GeminiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Use a ref to store the chat session so it persists across renders without being in state
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        const session = createChatSession();
        if (session) {
            chatSessionRef.current = session;
            // Initial greeting
            setMessages([
            {
                role: Role.MODEL,
                text: "Moin! Ich bin dein Karriere-Assistent für das Handwerk. Suchst du eine Ausbildung, willst du den Meister machen oder suchst du einfach nach dem passenden Gewerk für deine Fähigkeiten?",
                timestamp: Date.now()
            }
            ]);
        } else {
            setError("Chat-Funktion derzeit nicht verfügbar.");
        }
      } catch (err) {
        console.error("Failed to init chat", err);
        setError("Konnte Chat nicht starten.");
      }
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = { role: Role.USER, text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      const modelMsg: ChatMessage = { role: Role.MODEL, text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-secondary text-primary p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105 z-40 flex items-center space-x-2"
        aria-label="Öffne Karriereberater"
      >
        <Sparkles className="w-6 h-6" />
        <span className="font-bold hidden md:inline">Karriere-Berater</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
      <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-secondary" />
          <h3 className="font-bold">Handwerk-Profi KI</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        {error ? (
             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
             </div>
        ) : (
            <>
                {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === Role.USER ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.role === Role.USER 
                        ? 'bg-secondary text-primary rounded-br-none' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                    }`}>
                    {msg.text}
                    </div>
                </div>
                ))}
                {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                    </div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </>
        )}
      </div>

      <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Frag nach Gehältern, Ausbildung..."
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
            disabled={!!error}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim() || !!error}
            className="bg-primary text-white p-2 rounded-md hover:bg-slate-800 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};