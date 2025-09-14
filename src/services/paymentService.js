import api from '../config/api';

// Payment API calls
export const paymentService = {
  // Buy subscription
  buySubscription: async () => {
    const response = await api.get('/payment/subscribe');
    return response.data;
  },

  // Verify payment
  paymentVerification: async (paymentData) => {
    const response = await api.post('/payment/paymentverification', paymentData);
    return response.data;
  },

  // Get Razorpay key
  getRazorPayKey: async () => {
    const response = await api.get('/payment/razorpaykey');
    return response.data;
  },

  // Cancel subscription
  cancelSubscription: async () => {
    const response = await api.delete('/payment/subscribe/cancel');
    return response.data;
  },
};
