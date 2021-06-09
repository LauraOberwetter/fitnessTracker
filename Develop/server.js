const mongoose = require("mongoose"); //require mongoose
const express = require("express");

//build model/connect model file
const Workout = require("./workoutModel.js"); //require file

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true }); //UPDATE PATH

