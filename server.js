const mongoose = require("mongoose"); //require mongoose
const express = require("express");

const PORT = process.env.PORT || 3002;

//build model/connect model file
const Workout = require("./models/workoutModel.js"); //require file
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", { useNewUrlParser: true }); //UPDATE PATH


const data = {

};

Workout.create(data) //13: pass defined data from step #12 to Example model through a create method
  .then(dbWorkout => {
    console.log(dbWorkout); //console log what data is
  })
  .catch(({ message }) => {
    console.log(message);
  });

  require('./controllers/homeRoute')(app);


  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });