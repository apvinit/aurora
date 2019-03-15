const express = require('express');
const router = express.Router();

const rooms = require('../../controllers/room.controller');

// Create a room
router.post('/', rooms.create);

// Retrieve all rooms
router.get('/', rooms.findAll);

// Retrieve a single Room with roomId
router.get('/:roomId', rooms.findOne);

// Update a Room with noteId
router.put('/:roomId', rooms.update);

// Delete a Room with roomId
router.delete('/:roomId', rooms.delete);

module.exports = router;
