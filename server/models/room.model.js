const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: String,
  type: String,
  fees: Number,
  isAlloted: Boolean,
  allotedTo: Array
}, {
  timestamps: true
})

module.exports = mongoose.model('Room', RoomSchema);
