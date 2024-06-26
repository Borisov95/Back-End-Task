const express = require("express");
const db = require("../pkg/db/index");
const course = require("../services/post/course/handlers/courseHandler");
const academy = require("../services/post/academy/handlers/academyHandler");
const app = express();
db.init();

app.use(express.json());

/// COURSE ROUTES

app.get("/api/course", course.getAll);
app.get("/api/course/:id", course.getOne);
app.post("/api/course", course.create);
app.patch("/api/course/:id", course.update);
app.delete("api/course/:id", course.delete);

/// ACADEMY ROUTES

app.get("/api/academy", academy.getAll);
app.get("/api/academy/:id", academy.getOne);
app.post("/api/academy", academy.create);
app.patch("/api/academy/:id", academy.update);
app.delete("/api/academy/:id", academy.delete);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("Service not started");
  } else {
    console.log(`Service started successfully on port ${process.env.PORT}`);
  }
});
