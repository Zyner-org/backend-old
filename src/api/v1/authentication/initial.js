const db = require("../../../db/models");
const Role = db.role;

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });

      new Role({
        name: "school",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'school' to roles collection");
      });

      new Role({
        name: "teacher",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'teacher' to roles collection");
      });
    }
  });
}
module.exports = initial;
