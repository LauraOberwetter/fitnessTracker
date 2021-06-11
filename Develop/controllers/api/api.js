const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

//create workout
//ref from miniproj #26 (transaction)
router.post("/workout", ({ body }, res) => { //pulling from workoutmodel? or should this be connected to workoutModel.js?
  Workout.create(body)
    .then(dbWorkout => { // does db workout need to be declared first or is this already created with mongoose?
      res.json(dbWorkout);
    })
    .catch(err => { // error return
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//GET /stats
//GET /exercise
router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
