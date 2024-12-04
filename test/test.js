const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2hpbHJhaUBnbWFpbC5jb20iLCJpZCI6IjY2YWE4YjY1M2FkYWZkODkwNDkxZTE2NSIsImlhdCI6MTczMzMwNTg1MywiZXhwIjoxNzMzMzA5NDUzfQ.hNzisn53_j9ExVT53ET4M7U-u0jw2BaQl0OIqi83uLg'; // Replace with a valid token

fetch('http://localhost:3001/user/me', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });

