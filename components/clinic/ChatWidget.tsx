"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

type Role = "user" | "assistant";
interface Message {
  role: Role;
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm the Smile Dental Arts Centre assistant. How can I help you today — booking, services, hours, or something else?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...next, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Server error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: accumulated };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, I couldn't connect. Please call us at +1 (905) 604-7330.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "var(--clinic-gold)", color: "#fff" }}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex w-[340px] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-2xl shadow-2xl"
          style={{
            background: "#fff",
            border: "1px solid var(--clinic-border)",
            height: "480px",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: "var(--clinic-navy)" }}
          >
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              style={{ background: "var(--clinic-gold)", color: "#fff" }}
            >
              S
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                Smile Dental Arts Centre
              </p>
              <p className="text-xs" style={{ color: "var(--clinic-gold)" }}>
                Virtual Assistant
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap"
                  style={
                    msg.role === "user"
                      ? {
                          background: "var(--clinic-gold)",
                          color: "#fff",
                          borderBottomRightRadius: "4px",
                        }
                      : {
                          background: "#f1f5f9",
                          color: "var(--clinic-text)",
                          borderBottomLeftRadius: "4px",
                        }
                  }
                >
                  {msg.content || (loading && i === messages.length - 1 ? "" : " ")}
                  {loading && i === messages.length - 1 && msg.role === "assistant" && (
                    <span className="inline-flex items-center gap-1 ml-1">
                      <span className="animate-bounce delay-0 inline-block w-1 h-1 rounded-full bg-slate-400" style={{ animationDelay: "0ms" }} />
                      <span className="animate-bounce inline-block w-1 h-1 rounded-full bg-slate-400" style={{ animationDelay: "150ms" }} />
                      <span className="animate-bounce inline-block w-1 h-1 rounded-full bg-slate-400" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-end gap-2 border-t px-3 py-3"
            style={{ borderColor: "var(--clinic-border)" }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type a message…"
              rows={1}
              disabled={loading}
              className="flex-1 resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 disabled:opacity-50"
              style={{
                borderColor: "var(--clinic-border)",
                color: "var(--clinic-text)",
                maxHeight: "96px",
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onInput={(e: any) => {
                e.target.style.height = "auto";
                e.target.style.height = `${Math.min(e.target.scrollHeight, 96)}px`;
              }}
            />
            <button
              onClick={() => void send()}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              className="flex size-9 shrink-0 items-center justify-center rounded-xl transition-opacity disabled:opacity-40"
              style={{ background: "var(--clinic-gold)", color: "#fff" }}
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
