const express = require("express");
const app = express();
const PORT = 3000;
// HTTP Methods
// CRUD, create, read, update, destroy
// Typically our routes need a http method so that it only triggers when you use that method.

// A route is a path on your server to something
app.get("/hello", (req, res) => {
  res.send("Hello DC Students");
});

app.get("/get_username", (req, res) => {
  res.send("joecodesstuff");
});

app.get("/get_students", (req, res) => {
  const students = [
    {
      name: "daniel",
    },
    {
      name: "kim",
    },
    {
      name: "ashley",
    },
  ];
  res.json(students);
});

app.post("/postman", (req, res) => {
  res.send("you did a post request");
});

// write a route that returns an array of objects containing the names of your family members
// this is a GET route
app.get("/family", (req, res) => {
  res.json([{ name: "joe" }, { name: "nathan" }]);
});
app.put("/put_request", (req, res) => {
  res.send("put");
});

app.get("/sum", (req, res) => {
  const sum = 2 + 2;
  res.json(sum);
});

// app.get("/one_response", (req, res) => {
//   console.log(req);
//   const salary = 99;
//   if (salary > 100) {
//     res.send("you have over $100");
//   } else {
//     res.send(401).send("you are too poor ");
//   }
// });
app.listen(PORT, console.log(`listening on port ${PORT}`));
