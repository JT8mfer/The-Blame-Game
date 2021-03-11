// const express = require("express");
// const User = require("../models/user");
// const router = express.Router();
// router.get("/:name", (req, res) => {
//   User.find({ name: req.params.name }, (err, obj) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({ msg: err });
//     } else {
//       res.status(200).json(obj);
//     }
//   });
// });
// router.post("/", (req, res) => {
//   const data = {
//     userName: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   };
//   new User(data).save((err, obj) => {
//     if (err) {
//       res.status(500).json({ msg: err });
//     } else {
//       res.status(200).json(obj);
//     }
//   });
// });
// router.delete("/:name", (req, res) => {
//   User.deleteOne({ name: req.params.name }, (err, obj) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({ msg: err });
//     } else {
//       res.status(200).json(obj);
//     }
//   });
// });
// module.exports = router;

const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const saltRounds = 10;
const bcrypt = require("bcrypt");

router.get("/:userName", (req, res) => {
  User.find({ userName: req.params.userName }, (err, obj) => {
    if (err) {
      console.log(err);
      res.status(500).json({ msg: err });
    } else if (obj) {
      res.status(200).json(obj);
    } else {
      res.status(404).json({ msg: "Not found" });
    }
  });
});

router.post("/signup", async (req, res) => {
  console.log(req.body)
  if (req.body.password === req.body.verifyPassword) {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      const data = {
        userName: req.body.userName,
        email: req.body.email,
        password: hash
      };
      console.log(data)
      new User(data).save((err, obj) => {
        if (err) {
          res.status(500).json({ msg: err });
        } else {
          res.status(200).json(obj);
        }
      });
    })
  } else {
    res.status(401).json({ msg: "Passwords dont match" })
  }
});

// router.delete("/:userName", async (req, res) => {
//   User.deleteOne({ email }, (err, user) => {
//     if (err) {
//       console.log(err);
//       res.status(200).json({ msg: err });
//     } else {
//       res.status(200).json(obj);
//     }
//   });
// });

module.exports = router;
