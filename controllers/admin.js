const User = require("../models/user");

exports.getInfo = (req, res) => {
  User.getAll((user) => console.log(user));

  res.send("Fetching info");
};

exports.addInfo = (req, res) => {
  // console.log("first");
  // console.log(req.body, "kkk");
  const user = new User(req.body.name, req.body.id);
  user.save();
  res.send("Added the data");
};

exports.getSingleUser = (req, res) => {
  console.log(this);
  // console.log(req.params, req.query);
  const { id } = req.params;
  User.getUserInfo(id, (u) => {
    if (u) {
      res.send(
        `<html><head><title>User Info</title></head><body><p>${u.name}</p></body></html>`
      );
    } else res.status(404);
  });
};
