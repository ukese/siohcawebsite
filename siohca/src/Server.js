// server.js

const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving markdown files
app.get('/posts/:title', (req, res) => {
  // Extract the title parameter from the URL
  const title = req.params.title;
  
  // Use a markdown-to-html converter to convert the markdown file to HTML
  // Replace the path with the actual path to your markdown files directory
  // and the appropriate markdown-to-html converter library
  const markdownFilePath = path.join(__dirname, 'posts', `${title}.md`);
  // Replace this line with your markdown-to-html conversion logic
  // Example: const html = convertMarkdownToHtml(markdownFilePath);
  const html = `<h1>${title}</h1><p>This is the content of the ${title} post</p>`;

  // Send the converted HTML as the response
  res.send(html);
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
