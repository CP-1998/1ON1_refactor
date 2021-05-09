const db = require("../models");
const User = db.userDetails;

User.create((req, res) => {
  if (!req.body.email || !req.body.passhash || !req.body.username) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User({
    email: req.body.email,
    passhash: req.body.passhash,
    username: req.body.username,
    messagekey: req.body.messagekey,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Something went wrong, oops! Try again or reach out to support.",
      });
    });
});

User.delete((req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            "User cannot be found, please try again or reach out to support.",
        });
      } else
        res.send({
          message: "User successfully deleted! Bye!",
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error in deleting user, please try again or reach out to support.",
      });
    });
});

User.findOne((req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "User not found, try again or reach out to support.",
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "User not found, try again or reach out to support.",
      });
    });
});

User.update((req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message:
        "Update data cannot be empty you dummy! Please fill out all fields before trying again.",
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            "Cannot find user data, please try again or reach out to support",
        });
      } else
        res.send({
          message: "User updated succesfully",
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "User cannot be updated, please try again or reach out to support",
      });
    });
});
