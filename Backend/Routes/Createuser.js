const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
//Securing th pass3
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")
const jwtSecret="munameisaashishthakurheolloworldhpwmnd"
//Sending the data
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password", "Password Should be atleast five characters").isLength({
      min: 5,
    }),
    body("name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(8);
    let securePass = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: securePass,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
//For checking Login credentials
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Password Should be atleast five characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      console.log(userData);

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      const pwdComp = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdComp) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      //JWT signatire
      const data  ={
        user:{
          id:userData.id
        }
      }
      const authToken=jwt.sign(data,jwtSecret)
     
      return res.json({ success: true ,authToken:authToken});
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
