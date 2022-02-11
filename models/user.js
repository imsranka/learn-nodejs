const fs = require("fs");
const path = require("path");

module.exports = class User {
  constructor(name) {
    this.name = name;
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "users.json"
    );
    fs.readFile(p, (err, data) => {
      let users = [];

      if (!err) {
        users = JSON.parse(data);
        console.log(users);
      } else console.log(err);
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log(err, "ll");
      });
    });
  }

  static getAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "users.json"
    );
    fs.readFile(p, "utf8", (err, data) => {
      if (err) {
        console.log("here");
        cb([]);
      }
      console.log(data);
      //   return JSON.parse(data);

      cb(JSON.parse(data));
    }).then((e) => console.log(e, "h"));
  }
};
