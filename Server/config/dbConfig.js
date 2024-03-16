const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb+srv://hemanathan2k01:u7X8DwfzcHiZuJCx@cluster0.bxnyy7y.mongodb.net/TMS-APP`
);

try {
  console.log(`Database Connected!`);
} catch (error) {
  console.log(error);
}

module.exports = connection;
