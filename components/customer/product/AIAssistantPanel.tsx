"use client";

import { Bot, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AIAssistantPanel() {
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Hi! I can help you decide if this headphone is right for you. Ask me anything!' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');
        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'ai', text: "That's a great question! Based on user reviews and specs, these headphones have excellent noise cancellation perfect for commuting." }]);
        }, 1000);
    };

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100 p-6 h-fit sticky top-24">
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-600 text-white rounded-lg shadow-sm">
                    <Bot size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-indigo-900">AI Shopping Assistant</h3>
                    <p className="text-xs text-indigo-600">Ask about features, comparisons & more</p>
                </div>
            </div>

            <div className="h-64 overflow-y-auto space-y-3 mb-4 pr-2 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <div key={idx} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                        <div className={cn(
                            "max-w-[85%] p-3 text-sm rounded-2xl",
                            msg.role === 'user'
                                ? "bg-indigo-600 text-white rounded-tr-none"
                                : "bg-white border border-indigo-100 text-gray-700 rounded-tl-none shadow-sm"
                        )}>
                            {msg.role === 'ai' && <Sparkles size={12} className="inline mr-1 text-indigo-400" />}
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Is this good for gym?"
                    className="w-full pl-4 pr-10 py-3 bg-white border border-indigo-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm"
                />
                <button
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                    <Send size={18} />
                </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {["Compare with Bose", "Battery life?", "Warranty?"].map(q => (
                    <button key={q} onClick={() => setInput(q)} className="text-xs px-3 py-1 bg-white border border-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
                        {q}
                    </button>
                ))}
            </div>
        </div>
    );
}
