// Import modules and routes
const express = require('express');
const routes = require('./routes');

// Initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to pars json and encode
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Start server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});