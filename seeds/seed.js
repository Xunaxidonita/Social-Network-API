const { isValidObjectId } = require("mongoose");
const seeder = require("mongoose-seed");
const db = "mongodb://localhost/pizza-hunt";

seeder.connect(db, function () {
  seeder.loadModels(["./models/user.js"]);
  seeder.clearModels(["User", "Thought"], function (err) {
    if (err) {
      console.error("clear err", err);
    }

    seeder.populateModels(data, function (err) {
      if (err) {
        console.error("seed err", err);
      }

      seeder.disconnect();
    });
  });
});

const data = [
  {
    model: "User",
    documents: [
      { username: "ana", email: "ana@place.com" },
      { username: "elsa", email: "elsa@place.com" },
      { username: "hans", email: "hans@place.com" },
      { username: "olaf", email: "olaf@place.com" },
      { username: "kristof", email: "kristof@place.com" },
      { username: "luis", email: "luis@place.com" },
    ],
  },
];
