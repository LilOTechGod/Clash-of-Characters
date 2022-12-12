

const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('');  
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate(''); 
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    // WHAT 
    updateUser: async (parent, { user_id, new_username, new_email, new_password }) => {
      // Retrieve the user's account information from the database
      const user = await User.findById(user_id);

      // Update the user's information with the new values
      user.username = new_username;
      user.email = new_email;
      user.password = new_password;

      // Save the updated user information to the database
      await user.save();

      return user;
    }
  },
};

module.exports = resolvers;
