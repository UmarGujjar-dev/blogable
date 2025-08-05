// routes/test.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

export default router;
