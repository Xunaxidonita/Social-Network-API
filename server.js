const mongoose = require("mongoose");
const express = require("express");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizza-hunt", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const PORT = process.env.PORT || 3001;

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./controllers/routes"));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
