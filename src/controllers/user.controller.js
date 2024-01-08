const User = require("../models/user.model");

async function getAllUsers(req, res) {
    try {
      const users = await User.find();
      console.log(users);
      if (!users) {
        return res.status(404).send("No users found");
      } else {
        return res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  

  async function createUser(req, res) {
    try {
      const user = await User.create(req.body);
      if (!user) {
        console.error("Error creating user: User is falsy");
        return res.status(500).send("Failed to create user");
      }
      res.status(201).json({ message: "User created", user: user });
    } catch (error) {
      console.error("Error creating user:", error.message);
      res.status(500).send("Failed to create user");
    }
  } 
  
  module.exports = {
    createUser,
    getAllUsers
  }