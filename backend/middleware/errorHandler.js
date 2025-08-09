// backend/middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'ValidationError',
      details: err.message 
    });
  }

  res.status(500).json({ error: 'Internal Server Error' });
};