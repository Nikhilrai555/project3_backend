const axios = require('axios');

const testGetUserProfile = async () => {
  try {
    const userId = '<USER_ID>'; // Replace with actual user ID
    const token = '<YOUR_JWT_TOKEN>'; // Replace with valid JWT token

    const response = await axios.get(`http://localhost:3001/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

testGetUserProfile();
