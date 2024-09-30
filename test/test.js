fetch('http://localhost:3001/trades', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2hpbHJhaUBnbWFpbC5jb20iLCJpZCI6IjY2YWE4YjY1M2FkYWZkODkwNDkxZTE2NSIsImlhdCI6MTcyNzU0MjkzMCwiZXhwIjoxNzI3NTQ2NTMwfQ.lRb__jidyv_stcBp-0LidcFMfwPZ-Fx3rfuUP6LsOmQ` // Include the Bearer token here
  },
  body: JSON.stringify({
    ticker: 'b',
    type: 'b',
    description: 'b',
    price: 'b',
    tp: 'b',
    sl: 'b',
    strategy: 'b'
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));