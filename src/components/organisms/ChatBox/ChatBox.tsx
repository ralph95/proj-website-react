"use client";

import { Button } from "@/components/ui/button";
import { Mic, Send } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

type ChatBoxProps = {
  className?: string;
};

type Message = {
  user: string;
  text: string;
};

export default function ChatBox({ className }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const socketRef = useRef<Socket | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const socket = io("http://localhost:5000", { auth: { token } });
    socketRef.current = socket;

    socket.on("receive_message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || !socketRef.current) return;
    socketRef.current.emit("send_message", input);
    setInput("");
  };

  return (
    <div
      className={`border border-border rounded-lg p-4 bg-card text-card-foreground shadow-md ${className}`}
    >
      <h2 className="font-bold mb-2 text-card-foreground dark:text-white">
        Live Chat
      </h2>

      <div
        ref={chatContainerRef}
        className="h-[341px] overflow-y-auto border border-border p-2 mb-2 bg-muted text-card-foreground rounded"
      >
        {messages.length === 0 && (
          <p className="text-muted-foreground text-sm">No messages yet.</p>
        )}
        {messages.map((m, i) => (
          <div key={i} className="mb-1">
            <span className="font-semibold">{m.user}: </span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border border-border rounded px-2 py-1 text-sm bg-card text-card-foreground placeholder:text-muted-foreground"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        {/* <button
          onClick={sendMessage}
          className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90"
        >
          Send
        </button> */}
        <Button
          type="submit"
          size="icon"
          className="bg-primary hover:bg-primary/90"
          onClick={sendMessage}
        >
          <Send className="h-4 w-4 text-white" />
        </Button>
        <Button type="button" size="icon" variant="outline">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
