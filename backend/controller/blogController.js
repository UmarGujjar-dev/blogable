const Blog = require('../models/blog');

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const blog = new Blog({ title, content, author });
    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: 'Error creating blog' });
  }
};

module.exports = {
  createBlog,
};
