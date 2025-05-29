const User = require("../models/User");

// Register the user
const signUp = async (req, res) => {
  const { name, email, password, goal } = req.body;
  try {
    const newUser = await User.create({ name, email, password, goal });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signUp };
