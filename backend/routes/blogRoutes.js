const express = require('express');
const {
  createBlog,
  getBlogsDetail,
  getBlogs,
  updateBlogs,
  deleteBlogs,
  updateStatus,
  removeImageFromBlogs
} = require('../controller/blogController');

const blogsRouter = express.Router();

// blogsRouter.route('/').get(getBlogs);
// blogsRouter.route('/create').post(handleMulterError(upload.single("featuredimage")), createBlog);
blogsRouter.route('/create').post(createBlog);
// blogsRouter.route('/details/:id').get(getBlogsDetail);
// blogsRouter.route('/update/:id').post(handleMulterError(upload.single("featuredimage")), updateBlogs);
// blogsRouter.route('/delete/:id').get(deleteBlogs);
// blogsRouter.route('/status/:id').post(updateStatus);
// blogsRouter.route('/remove-image/:id').get(removeImageFromBlogs);

module.exports = blogsRouter;
