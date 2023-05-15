# First steps in creating a node server

1. You have to run the command `npm init`
   This stands for node package manager
   `npm install` or `npm i`, is a command that will go on the internet, find the tool you specify, and install all of the files that are required to run that tool.
   f

2. We will use `npm i express` to get the server up and running. Express is a tool used with node to make servers.

3. We want to write these lines of code

```
const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, console.log(`listening on port ${PORT}`));

```

4. Start your server using the key word `node index.js` or whatever the name of the js file is.

5. Your server will say it is listening at whatever port you gave it. In this case it's port 3000.

## Routes

- A server is made up of many routes. A route is a path for your server to do a specified action. Generally a route has a HTTP Method that is required to access it.

- A route consist of the keyword `app` that we get from express and then an HTTP Method. The common ones are get,post,put,delete,etc. Below is an example of a get route that has a name of "/get_student"

```
app.get("/get_student", (req, res) => {
  res.send("Hello DC Students");
});
```

- Routes must have the following structure
  `app` this comes from express so we have to have this
  `.get()` or whatever HTTP method we want to track
  `("/name_of_route")` this can be whatever name you want but generally follow good naming convention and make this a good name relevant to the information you are getting.
  `app.get("/username", (req,res) => {})` the `req and res` stand for Request and response. A route receives a request, and sends back a response. They are always in that order.

- Inside the `{}` you can write any javascript you need to do the logic you need to do.
