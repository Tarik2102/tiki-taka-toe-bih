// backend/controllers/roomController.js
import Room from '../models/Room.js';
import { generateRoomCode } from '../utils/helpers.js';

export const createRoom = async (req, res) => {
  const { settings } = req.body;
  
  try {
    const newRoom = new Room({
      code: generateRoomCode(),
      settings,
      players: [],
    });
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRoom = async (req, res) => {
  try {
    const room = await Room.findOne({ code: req.params.code });
    if (!room) return res.status(404).json({ error: 'Room not found' });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};