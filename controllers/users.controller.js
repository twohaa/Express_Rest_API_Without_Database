let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

//get
const getAllusers = (req, res) => {
  res.status(200).json({ users });
};

//post-->create
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

//put-->update
const updateUser = (req, res) => {
  const UserId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === UserId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(200).json(users);
};

//delete
const deleteUser = (req, res) => {
  const UserId = req.params.id;
  users = users.filter((user) => user.id === UserId);
  res.status(200).json(users);
};

module.exports = { getAllusers, createUser, updateUser, deleteUser };
