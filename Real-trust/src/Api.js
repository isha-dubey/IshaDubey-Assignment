

import axios from 'axios';


const BASE_URL = 'http://13.233.120.113:5000';



export const createContact = async (contactData) => {

  try {
    const response = await axios.post(`${BASE_URL}/contact`, contactData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return { success: true, data: response?.data };
  } catch (error) {
    console.error(error.response?.data || error.message);
    return { success: false, message: error.message }; // Return consistent object
  }
};


