const Room = require('../models/room.model');

// Create and save a new Room
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Room content can not be empty'
    });
  }

  // Create a room
  const room = new Room({
    name: req.body.name,
    type: req.body.type,
    fees: req.body.fees,
    isAlloted: req.body.isAlloted,
    allotedTo: req.body.allotedTo
  });

  // Save the note in the database
  room
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured'
      });
    });
};

// Retrieve and return all rooms from the database.
exports.findAll = (req, res) => {
  Room.find()
    .then(rooms => {
      res.send(rooms);
    })
    .catch(err =>
      res.status(500).send({
        message: err.message || 'Some unknown error'
      })
    );
};

// Find a single room with a roomId
exports.findOne = (req, res) => {
  Room.findById(req.params.roomId)
    .then(room => {
      if (!room) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.roomId
        });
      }
      res.send(room);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Room not found with id ' + req.params.roomId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving room with id' + req.params.roomId
      });
    });
};

// Update a note identified by the roomId in the request
exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Note cannot be empty'
    });
  }

  // Find room and update it with the request body
  Room.findOneAndUpdate(
    req.params.roomId,
    {
      name: req.body.name,
      type: req.body.type,
      fees: req.body.fees,
      isAlloted: req.body.isAlloted
    },
    { new: true }
  )
    .then(room => {
      if (!room) {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.noteId
        });
      }
      res.send(room);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(500).send({
          message: 'Error updating note with id' + req.params.noteId
        });
      }
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Room.findByIdAndRemove(req.params.roomId)
    .then(room => {
      if (!room) {
        return res.status(404).send({
          message: 'Room not found with id ' + req.params.roomId
        });
      }
      res.send({
        message: 'Room deleted successfully!'
      });
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Note not found with id ' + req.params.roomId
        });
      }
      return res.status(500).send({
        message: 'Could not delete room with id' + req.params.roomId
      });
    });
};
