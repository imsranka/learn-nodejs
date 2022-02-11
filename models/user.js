const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "users.json");

const getUsersFromFile = (cb) => {
  fs.readFile(p, "utf8", (err, data) => {
    if (err) {
      console.log("here");
      return cb([]);
    } else {
      cb(JSON.parse(data));
    }
  }).then((e) => console.log(e, "error"));
};
module.exports = class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    getUsersFromFile((users) => {
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log(err, "ll");
      });
    });
  }

  static getAll(cb) {
    getUsersFromFile(cb);
  }
};
