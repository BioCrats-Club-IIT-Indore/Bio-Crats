// API Service for making HTTP requests
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get auth token from localStorage
  getAuthToken() {
    return localStorage.getItem('authToken');
  }

  // Get headers with auth token
  getHeaders(includeAuth = false) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Handle API response
  async handleResponse(response) {
    const data = await response.json();

    if (!response.ok) {
      // Handle specific error codes
      if (response.status === 401) {
        // Unauthorized - clear token and redirect to login
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        // window.location.href = '/login';
      }

      throw new Error(data.message || 'An error occurred');
    }

    return data;
  }

  // POST request
  async post(endpoint, body, includeAuth = false) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: this.getHeaders(includeAuth),
        body: JSON.stringify(body),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`API Error (POST ${endpoint}):`, error);
      throw error;
    }
  }

  // GET request
  async get(endpoint, includeAuth = false) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'GET',
        headers: this.getHeaders(includeAuth),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`API Error (GET ${endpoint}):`, error);
      throw error;
    }
  }

  // PUT request
  async put(endpoint, body, includeAuth = false) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: this.getHeaders(includeAuth),
        body: JSON.stringify(body),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`API Error (PUT ${endpoint}):`, error);
      throw error;
    }
  }

  // DELETE request
  async delete(endpoint, includeAuth = false) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'DELETE',
        headers: this.getHeaders(includeAuth),
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`API Error (DELETE ${endpoint}):`, error);
      throw error;
    }
  }

  // Auth specific methods
  async signup(userData) {
    return this.post('/auth/signup', userData);
  }

  async login(credentials) {
    return this.post('/auth/login', credentials);
  }

  async getProfile() {
    return this.get('/auth/profile', true);
  }

  async updateProfile(userData) {
    return this.put('/auth/profile', userData, true);
  }

  async checkHealth() {
    return this.get('/health');
  }
}

export default new ApiService();