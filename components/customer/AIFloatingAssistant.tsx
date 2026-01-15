"use client";

import { Bot, Send, X, MessageSquare, Sparkles, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function AIFloatingAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Hi! I am the Cindoor AI. Ask me about products, comparisons, or gift ideas!' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: "I can help with that. This product has great reviews for battery life and sound quality compared to other models in this price range." }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Trigger */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-40 bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 hover:scale-110 transition-all flex items-center gap-2 group"
                    >
                        <div className="relative">
                            <Bot size={28} />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-indigo-600"></span>
                        </div>
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
                            Ask AI Assistant
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-6 right-6 z-50 w-[350px] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-indigo-100"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Cindoor AI Assistant</h3>
                                    <p className="text-xs text-indigo-100 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                                    <div className={cn(
                                        "max-w-[85%] p-3 text-sm rounded-2xl shadow-sm",
                                        msg.role === 'user'
                                            ? "bg-indigo-600 text-white rounded-tr-none"
                                            : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                                    )}>
                                        {msg.role === 'ai' && <Sparkles size={12} className="inline mr-1 text-indigo-400" />}
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Suggested Questions */}
                        <div className="px-4 py-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
                            {["Compare prices", "Track my order", "Return policy"].map(q => (
                                <button key={q} onClick={() => setInput(q)} className="text-xs px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors whitespace-nowrap flex-shrink-0">
                                    {q}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your question..."
                                    className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-gray-900 placeholder:text-gray-400"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
