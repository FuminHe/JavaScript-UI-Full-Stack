const express = require("express");
const User = require("../models/userSchema");

const userRoute = express.Router();

// find all
userRoute.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// find one by name or id
userRoute.get("/:name", (req, res) => {
  User.findOne({ userName: req.params.name })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
});

// add one record
userRoute.post("/", (req, res) => {
  console.log("------add a new record");
  let user = new User();
  user.userName = req.body.userName;
  user.gender = req.body.gender;
  user.age = req.body.age;

  user.save((err, insertedUser) => {
    if (err) console.log(err);
    else {
      console.log(insertedUser);
      res.json(insertedUser);
    }
  });
});

// update one record
userRoute.post("/:id", (req, res) => {
  const userId = req.params.id;

  User.findByIdAndUpdate(
    userId,
    {
      $set: {
        userName: req.body.userName,
        gender: req.body.gender,
        age: req.body.age,
      },
    },
    {
      new: true, // if it is true, then updatedUser is the updated record; if it is false, then updatedVideo will retrun the record befor update.
    },
    (err, updatedUser) => {
      if (err) console.log(err);
      else {
        res.json(updatedUser);
      }
    }
  );
});

//delete a record
userRoute.delete("/:id", function (req, res) {
  console.log("Deleting a user");

  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    if (err) {
      res.send("Error deleting a user");
    } else {
      res.json(deletedUser);
    }
  });
});

module.exports = userRoute;
