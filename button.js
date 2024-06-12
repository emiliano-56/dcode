document.getElementById('publishButton').addEventListener('click', function() {
    const netlifyToken = 'YOUR_NETLIFY_PERSONAL_ACCESS_TOKEN';
    const siteId = 'YOUR_NETLIFY_SITE_ID';
  
    const headers = new Headers({
      'Authorization': `Bearer ${netlifyToken}`,
      'Content-Type': 'application/json'
    });
  
    const files = {
      'index.html': {
        content: document.documentElement.outerHTML,
        encoding: 'utf-8'
      }
      // Add other files as needed
    };
  
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/deploys`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        files: files
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.state === 'processing') {
        alert('Website successfully deployed to Netlify!');
      } else {
        alert('Error deploying the website to Netlify.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error deploying the website to Netlify.');
    });
  });
  