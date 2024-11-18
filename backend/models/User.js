const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
  user_id: { type: Number, unique: true }, // Auto-incremented ID
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date_of_joining: { type: Date, default: Date.now },
});

// Add auto-increment plugin for user_id
userSchema.plugin(AutoIncrement, { inc_field: 'user_id' });

const User = mongoose.model('User', userSchema);
module.exports = User;