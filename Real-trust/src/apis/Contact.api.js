import axios from 'axios';

const BASE_URL = 'https://flipr.misasoftware.com';

// Function to fetch all contacts (GET request)
export const getContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contact`, {
      headers: {
        'accept': '*/*',
      },
    });
    return { success: true, data: response?.data };
  } catch (error) {
    console.error(error.response?.data || error.message);
    return { success: false, message: error.message };
  }
};

// Function to create a new contact (POST request)
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
    return { success: false, message: error.message };
  }
};
