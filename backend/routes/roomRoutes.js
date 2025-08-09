// backend/routes/roomRoutes.js
import express from 'express';
import { createRoom, getRoom } from '../controllers/roomController.js';

const router = express.Router();

router.post('/', createRoom);    // Create new room
router.get('/:code', getRoom);  // Fetch room by code

export default router;