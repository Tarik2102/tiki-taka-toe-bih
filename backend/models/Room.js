// backend/models/Room.js
import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  settings: {
    gameMode: { type: String, enum: ['bestOf3', 'bestOf5', 'bestOf7', 'unlimited'], default: 'bestOf3' },
    turnTime: { type: Number, enum: [15, 40, 60, -1], default: 40 }, // -1 = unlimited
    categories: {
      countries: { type: Boolean, default: true },
      trophies: { type: Boolean, default: false },
      managers: { type: Boolean, default: false },
    },
  },
  players: [{ type: String }], // Will store player/session IDs
  createdAt: { type: Date, default: Date.now, expires: 86400 }, // Auto-delete in 24h
});

export default mongoose.model('Room', RoomSchema);