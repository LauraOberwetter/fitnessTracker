const mongoose = require("mongoose"); //require mongoose
const express = require("express");

//build model/connect model file
const Workout = require("./workoutModel.js"); //require file

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