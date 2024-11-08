import axios from 'axios';

const BASE_URL = 'https://flipr.misasoftware.com';

export const createClient = async (clientData) => {
  try {
    const formData = new FormData();

    // Append client data fields to FormData
    formData.append('name', clientData.name);
    formData.append('description', clientData.description);
    formData.append('designation', clientData.designation);

    // Check if the image file exists and append it
    if (clientData.image) {
      formData.append('image', clientData.image, clientData.image.name);
    }

    const response = await axios.post(`${BASE_URL}/client`, formData, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

export const getClients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/client`, {
      headers: {
        'accept': '*/*',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
};
