const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// THIS IS WHAT I ADDED TO UPDATE A USER.....

// Add a new method for updating a user's account information
userSchema.methods.updateAccount = async function (new_username, new_email, new_password) {
  // Update the user's information with the new values
  this.username = new_username;
  this.email = new_email;
  this.password = new_password;

  // Save the updated user information to the database
  await this.save();
};

const User = model('User', userSchema);

module.exports = User;
