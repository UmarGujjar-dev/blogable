const express = require('express');
const connectDB = require('./settings/config/db');
const blogRoutes = require('./routes/blogRoutes');



const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Blog routes
app.use('/api/blogs', blogRoutes);

// Optional: Remove this line (causes error)
// app.use("/api/v1/blog", blogsRouter); ❌

app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
