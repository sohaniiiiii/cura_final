import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';  // ← ADD THIS

dotenv.config();

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT || '5000', 10);

// ← ADD THIS: Python inference server URL
const INFERENCE_SERVER_URL = 'http://localhost:8000';

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cura-app');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Cura API Server is running!' });
});

// Health check for inference server
app.get('/api/inference/health', async (req, res) => {
  try {
    const response = await axios.get(`${INFERENCE_SERVER_URL}/health`, {
      timeout: 5000
    });
    res.json(response.data);
  } catch (error) {
    res.status(503).json({ 
      status: 'unhealthy', 
      message: 'Inference server is not available',
      error: error.message 
    });
  }
});

// Chat endpoint - proxies to Python inference server
app.post('/api/chat', async (req, res) => {
  try {
    const { message, language = 'EN', memory = true } = req.body;
    
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log(`📤 Forwarding to Python: ${message.substring(0, 50)}...`);

    // ← FIXED: Call Python inference server on /chat endpoint
    const response = await axios.post(
      `${INFERENCE_SERVER_URL}/chat`,  // ← FIXED PATH
      { message, language, memory },
      { 
        timeout: 90000, // ← 90 seconds for slow CPU inference
        headers: { 'Content-Type': 'application/json' }
      }
    );

    console.log('✅ Got response from Python inference server');
    res.json(response.data);

  } catch (error) {
    console.error('❌ Chat API error:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      return res.status(503).json({ 
        error: 'AI service unavailable. Make sure Python inference server is running on port 8000.' 
      });
    }

    if (error.code === 'ETIMEDOUT' || error.code === 'ECONNABORTED') {
      return res.status(504).json({ 
        error: 'Request timeout. CPU inference is slow, please wait longer.' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to process message',
      details: error.response?.data || error.message 
    });
  }
});

// Import and use routes
import userRoutes from './routes/users.js';
import chatRoutes from './routes/chats.js';

app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`🚀 Node backend running on http://localhost:${port}`);
    console.log(`📡 Proxying AI chat to: ${INFERENCE_SERVER_URL}`);
  });

  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      console.warn(`Port ${port} is in use. Retrying on port ${nextPort}...`);
      startServer(nextPort);
    } else {
      throw err;
    }
  });
};

startServer(DEFAULT_PORT);
