const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const getUsersFromFile = (cb) => {
  fs.readFile(p, "utf8", (err, data) => {
    if (err) {
      cb([]);
    } else {
      // if (data) {
      cb(JSON.parse(data));
      // } else cb([]); //handle empty file
    }
  });
  // .then((e) => console.log(e, "error"));
};
module.exports = class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  save() {
    getUsersFromFile((users) => {
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log(err, "error");
      });
    });
  }

  static getAll(cb) {
    getUsersFromFile(cb);
  }
};
