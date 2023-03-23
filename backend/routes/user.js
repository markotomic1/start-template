const router = require("express").Router();
const User = require("../models/User");
const auth = require("../middlewares/auth");
//register user

router.post("/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = user.generateAuthToken();
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(201)
      .send(user);
  } catch (error) {
    res.status(400).send("Please send correct data");
  }
});

//login user

router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = user.generateAuthToken();

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 })
      .send(user);
  } catch (error) {
    res.status(400).send("Please send correct data");
  }
});

//logout user

router.delete("/logout", auth, async (req, res) => {
  res
    .clearCookie("access_token", { secure: true, sameSite: "none" })
    .send("User has been logged out");
});

module.exports = router;
