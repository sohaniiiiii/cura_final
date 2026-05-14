import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Cura API Server is running!' });
});

// Test user routes without MongoDB
app.post('/api/users/register', (req, res) => {
  console.log('Register request received:', req.body);
  res.json({
    message: 'User created successfully (test mode)',
    token: 'test-token-123',
    user: {
      id: 'test-id',
      username: req.body.username,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  });
});

app.post('/api/users/login', (req, res) => {
  console.log('Login request received:', req.body);
  res.json({
    message: 'Login successful (test mode)',
    token: 'test-token-123',
    user: {
      id: 'test-id',
      username: 'testuser',
      email: req.body.email,
      firstName: 'Test',
      lastName: 'User'
    }
  });
});

app.get('/api/users/profile', (req, res) => {
  console.log('Profile request received');
  res.json({
    user: {
      id: 'test-id',
      username: 'testuser',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Test server is running on port ${PORT}`);
  console.log('This is a test server without MongoDB for debugging forms');
});
