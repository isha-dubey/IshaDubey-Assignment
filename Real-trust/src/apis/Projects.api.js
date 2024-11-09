import axios from 'axios';

const BASE_URL = 'https://flipr.misasoftware.com';

export const createProject = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/project`, formData, {
        headers: {
          'accept': '*/*',
          'Content-Type': 'multipart/form-data', // Ensure content type is set correctly
        },
      });
      
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error.response || error.message);
      throw error;
    }
  };
  
  export const getProjects = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/project`, {
          headers: {
            'accept': '*/*', // Accept all content types
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
    };