"use client";

import { Send, Bot, User, Sparkles, TrendingUp, DollarSign, MessageSquare } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
    timestamp: string;
}

const QUICK_ACTIONS = [
    { icon: DollarSign, label: "Suggest Pricing", prompt: "Analyze market prices for Nike Air Jordan 1 and suggest optimal pricing." },
    { icon: TrendingUp, label: "Trending Products", prompt: "What are the top trending footwear categories this week?" },
    { icon: Sparkles, label: "Optimize Description", prompt: "Help me write a compelling description for a new wireless headphone product." },
    { icon: MessageSquare, label: "Analyze Reviews", prompt: "Summarize the recent negative reviews for my store and suggest improvements." },
];

export default function AIAssistantPage() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", content: "Hello! I'm your Cindoor AI Assistant. I can help you with pricing strategies, market trends, and store optimization. How can I assist you today?", timestamp: "Now" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: messages.length + 1,
            role: "user",
            content: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            let responseText = "I can certainly help with that. Based on current market data...";
            if (text.includes("pricing")) responseText = "Based on competitor analysis, the optimal price range for 'Nike Air Jordan 1' is ₹11,500 - ₹13,000. Pricing at ₹12,499 keeps you competitive while maintaining detail margins.";
            if (text.includes("Trending")) responseText = "This week, 'Sustainable Activewear' and 'Retro Sneakers' are seeing a 40% surge in searches. Consider adding more inventory in these categories.";
            if (text.includes("Description")) responseText = "Here's a draft: 'Experience freedom with our new UltraBass Wireless Headphones. Featuring 30-hour battery life, active noise cancellation, and premium memory foam earcups for all-day comfort.'";

            const aiMessage: Message = {
                id: messages.length + 2,
                role: "assistant",
                content: responseText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="h-[calc(100vh-120px)] flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-3">
                <div className="p-2 bg-white rounded-full shadow-sm text-indigo-600">
                    <Bot size={24} />
                </div>
                <div>
                    <h1 className="text-lg font-bold text-gray-900">Seller AI Assistant</h1>
                    <p className="text-xs text-indigo-600 font-medium">Powered by Cindoor Intelligence</p>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50" ref={scrollRef}>
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                            "flex gap-3 max-w-[80%]",
                            msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                        )}
                    >
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm",
                            msg.role === "assistant" ? "bg-indigo-100 text-indigo-600" : "bg-orange-100 text-orange-600"
                        )}>
                            {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                        </div>
                        <div className={cn(
                            "p-3 rounded-2xl text-sm shadow-sm",
                            msg.role === "assistant"
                                ? "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                                : "bg-orange-600 text-white rounded-tr-none"
                        )}>
                            {msg.content}
                            <p className={cn("text-[10px] mt-1 text-right opacity-70", msg.role === "user" ? "text-orange-100" : "text-gray-400")}>{msg.timestamp}</p>
                        </div>
                    </motion.div>
                ))}
                {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Bot size={16} />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-1">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Quick Actions */}
            {messages.length < 3 && (
                <div className="px-4 py-2 flex gap-2 overflow-x-auto">
                    {QUICK_ACTIONS.map((action, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSend(action.prompt)}
                            className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-white border border-indigo-100 rounded-full text-xs font-medium text-indigo-700 hover:bg-indigo-50 transition-colors shadow-sm"
                        >
                            <action.icon size={14} />
                            {action.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                    className="flex gap-2"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me anything about your business..."
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors shadow-md hover:shadow-lg"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}
