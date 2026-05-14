const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

// Helper function to make API requests
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    console.log('Making API request to:', url, 'with config:', config);
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      console.error('API request failed:', response.status, data);
      throw new Error(data.message || 'API request failed');
    }

    console.log('API request successful:', data);
    return data;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// User API functions
export const userAPI = {
  // Register a new user
  register: async (userData: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    return apiRequest('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login user
  login: async (credentials: { email: string; password: string }) => {
    const response = await apiRequest('/users/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Store token in localStorage
    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  },

  // Get user profile
  getProfile: async () => {
    return apiRequest('/users/profile');
  },

  // Update user profile
  updateProfile: async (profileData: {
    firstName: string;
    lastName: string;
    username: string;
  }) => {
    return apiRequest('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('authToken');
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!getAuthToken();
  },
};

// Chat API functions
export const chatAPI = {
  // Create a new chat session
  createChat: async (title?: string) => {
    return apiRequest('/chats/create', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
  },

  // Get all chats for the user
  getChats: async () => {
    return apiRequest('/chats');
  },

  // Get specific chat with messages
  getChat: async (sessionId: string) => {
    return apiRequest(`/chats/${sessionId}`);
  },

  // Add message to chat
  addMessage: async (sessionId: string, message: {
    role: 'user' | 'assistant' | 'system';
    content: string;
  }) => {
    return apiRequest(`/chats/${sessionId}/messages`, {
      method: 'POST',
      body: JSON.stringify(message),
    });
  },

  // Update chat title
  updateChatTitle: async (sessionId: string, title: string) => {
    return apiRequest(`/chats/${sessionId}/title`, {
      method: 'PUT',
      body: JSON.stringify({ title }),
    });
  },

  // Delete chat
  deleteChat: async (sessionId: string) => {
    return apiRequest(`/chats/${sessionId}`, {
      method: 'DELETE',
    });
  },
};

// Export default API object
export default {
  user: userAPI,
  chat: chatAPI,
};
