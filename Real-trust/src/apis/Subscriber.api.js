// Subscriber.api.js
import axios from 'axios';

const BASE_URL = 'https://flipr.misasoftware.com/newsletter';

// Function to subscribe a user via email
export const subscribeUser = (email) => {
  return axios.post(`${BASE_URL}/subscribe`, { email }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};


export const getAllSubscribers = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          'Accept': '*/*',
        },
      });
      return response.data; // Assuming the response contains the list of subscribers
    } catch (error) {
      console.error('Error fetching subscribers:', error);
      throw error;
    }
  };