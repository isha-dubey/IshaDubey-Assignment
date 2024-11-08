import axios from 'axios';

const BASE_URL = 'https://flipr.misasoftware.com';

export const createProject = async (formData) => {
    try {
      // Send a POST request with the form data to create the project
      const response = await axios.post(`${BASE_URL}/project`, formData, {
        headers: {
          'accept': '*/*',
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      });
  
      // Return the response data
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
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