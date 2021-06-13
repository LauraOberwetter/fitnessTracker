const router = require("express").Router();
const Workout = require("../../models/workoutModel.js"); //require file


// GET workout
router.get("/", (req, res) => { // for home
  Workout.find({}) //find workout db within workout model
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//create workout
//ref from miniproj #26 (transaction)
router.post("/", ({ body }, res) => { //pulling from workoutmodel? or should this be connected to workoutModel.js?
  Workoutdb.create(body)
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



module.exports = router;
