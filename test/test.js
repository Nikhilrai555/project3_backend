
    fetch('http://localhost:3001/trades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticker: 'a',
          type: 'a',
          description: 'a',
          price: 'a',
          tp: 'a',
          sl: 'a',
          strategy: 'a'
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));