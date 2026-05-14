import express from 'express';
import Chat from '../models/Chat.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Create a new chat session
router.post('/create', authenticateToken, async (req, res) => {
  try {
    const { title } = req.body;
    const sessionId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const chat = new Chat({
      userId: req.userId,
      sessionId,
      title: title || 'New Chat',
      messages: []
    });

    await chat.save();

    res.status(201).json({
      message: 'Chat session created successfully',
      chat: {
        id: chat._id,
        sessionId: chat.sessionId,
        title: chat.title,
        createdAt: chat.createdAt
      }
    });
  } catch (error) {
    console.error('Chat creation error:', error);
    res.status(500).json({ message: 'Server error during chat creation' });
  }
});

// Get all chats for a user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.userId, isActive: true })
      .sort({ updatedAt: -1 })
      .select('sessionId title createdAt updatedAt');

    res.json({ chats });
  } catch (error) {
    console.error('Chat fetch error:', error);
    res.status(500).json({ message: 'Server error during chat fetch' });
  }
});

// Get specific chat with messages
router.get('/:sessionId', authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const chat = await Chat.findOne({
      sessionId,
      userId: req.userId,
      isActive: true
    });

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json({ chat });
  } catch (error) {
    console.error('Chat fetch error:', error);
    res.status(500).json({ message: 'Server error during chat fetch' });
  }
});

// Add message to chat
router.post('/:sessionId/messages', authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { role, content } = req.body;

    if (!role || !content) {
      return res.status(400).json({ message: 'Role and content are required' });
    }

    const chat = await Chat.findOne({
      sessionId,
      userId: req.userId,
      isActive: true
    });

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    const newMessage = {
      role,
      content,
      timestamp: new Date()
    };

    chat.messages.push(newMessage);
    await chat.save();

    res.json({
      message: 'Message added successfully',
      newMessage
    });
  } catch (error) {
    console.error('Message add error:', error);
    res.status(500).json({ message: 'Server error during message addition' });
  }
});

// Update chat title
router.put('/:sessionId/title', authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { title } = req.body;

    const chat = await Chat.findOneAndUpdate(
      { sessionId, userId: req.userId, isActive: true },
      { title },
      { new: true }
    );

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json({ message: 'Chat title updated successfully', chat });
  } catch (error) {
    console.error('Chat title update error:', error);
    res.status(500).json({ message: 'Server error during title update' });
  }
});

// Delete chat
router.delete('/:sessionId', authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params;

    const chat = await Chat.findOneAndUpdate(
      { sessionId, userId: req.userId },
      { isActive: false },
      { new: true }
    );

    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    res.json({ message: 'Chat deleted successfully' });
  } catch (error) {
    console.error('Chat deletion error:', error);
    res.status(500).json({ message: 'Server error during chat deletion' });
  }
});

export default router;
