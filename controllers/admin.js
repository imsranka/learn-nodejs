const User = require("../models/user");

exports.getInfo = (req, res) => {
  User.getAll((user) => console.log(user));

  res.send("Fetching info");
};

exports.addInfo = (req, res) => {
  console.log("first");
  console.log(req.body, "kkk");
  const user = new User(req.body.name);
  user.save();
  res.send("Added the data");
};
