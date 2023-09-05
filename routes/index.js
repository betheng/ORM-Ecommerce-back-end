// Import modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Tells to use API routes when the path starts '/api'
router.use('/api', apiRoutes);

// Response for 404
router.use((req, res) => {
  res.send("This is the wrong route!")
});

module.exports = router;