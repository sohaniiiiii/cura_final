// src/types/api.ts

export interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface ChatRequest {
  message: string;
  language?: string;
  memory?: boolean;
}

export interface ChatResponse {
  reply: string;
  confidence?: number;
}

export interface Language {
  code: string;
  name: string;
}

export interface ChatHistoryItem {
  id: number;
  title: string;
  time: string;
}
