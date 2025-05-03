const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


const customerRoutes = require('./routes/customerRoutes');

app.use(express.json());
app.use(cors());
// Routes
app.use('/api', customerRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});