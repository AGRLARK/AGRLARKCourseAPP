import api from '../config/api';

// Admin API calls
export const adminService = {
  // Get all users (Admin only)
  getAllUsers: async () => {
    const response = await api.get('/user/admin/users');
    return response.data;
  },

  // Update user role (Admin only)
  updateUserRole: async (userId, role) => {
    const response = await api.put(`/user/admin/user/${userId}`, { role });
    return response.data;
  },

  // Delete user (Admin only)
  deleteUser: async (userId) => {
    const response = await api.delete(`/user/admin/user/${userId}`);
    return response.data;
  },
};
