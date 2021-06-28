const router = require("express").Router();
const User = require("../models/User");

//! Register
router.post("/register", async (req, res) => {
  try {
    const user = await new User({
      username: "John",
      email: "julianoper@gmail.com",
      password: "123456",
    });

    await user.save();
    res.send("Ok");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
