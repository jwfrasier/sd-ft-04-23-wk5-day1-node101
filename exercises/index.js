const express = require("express");
const cowsay = require("cowsay");
const app = express();
const PORT = 3001;

app.get("/cowsay", (req, res) => {
  res.send(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    })
  );
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
