import api from '../config/api';

// Auth API calls
export const authService = {
  // Register user
  register: async (userData) => {
    const response = await api.post('/user/register', userData);
    return response.data;
  },

  // Login user
  login: async (email, password) => {
    const response = await api.post('/user/login', { email, password });
    return response.data;
  },

  // Logout user
  logout: async () => {
    const response = await api.get('/user/logout');
    return response.data;
  },

  // Get user profile
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },

  // Update profile
  updateProfile: async (userData) => {
    const response = await api.put('/user/updateprofile', userData);
    return response.data;
  },

  // Update profile picture
  updateProfilePicture: async (formData) => {
    const response = await api.put('/user/updateprofilepicture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Change password
  changePassword: async (oldPassword, newPassword) => {
    const response = await api.put('/user/changepassword', {
      oldPassword,
      newPassword,
    });
    return response.data;
  },

  // Forget password
  forgetPassword: async (email) => {
    const response = await api.post('/user/forgetpassword', { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (token, password) => {
    const response = await api.put(`/user/resetpassword/${token}`, { password });
    return response.data;
  },

  // Delete profile
  deleteProfile: async () => {
    const response = await api.delete('/user/profile');
    return response.data;
  },

  // Add to playlist
  addToPlaylist: async (courseId) => {
    const response = await api.post('/user/addtoplaylist', { courseId });
    return response.data;
  },

  // Remove from playlist
  removeFromPlaylist: async (courseId) => {
    const response = await api.delete('/user/removefromplaylist', { 
      data: { courseId } 
    });
    return response.data;
  },
};
