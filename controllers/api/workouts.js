const router = require("express").Router();
const Workout = require("../../models/workoutModel.js"); //require file


// GET and display workout
//line 5 in api.js: api/workouts
router.get("/",  (req, res) => { // for "/"home
  Workout.find({}) //find workout db within workout model
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//PUT exercise in workoutdb
//line 17 in api.js ://api/workouts/id
router.put("/:id", async ({ body, params }, res) => { //api/workouts/id
  try {
    

  } catch(err) {
    res.status(400).json(err);
  }

});


//POST submitted workout in the workoutdb, to be pulled later
//line 29 in api.js: api/workouts
router.post("/", async (req, res) => { 
  try {

  } catch(err) {
    res.status(400).json(err);
  }

});


// //create workout
// //ref from miniproj #26 (transaction)
// router.post("/", ({ body }, res) => { //pulling from workoutmodel? or should this be connected to workoutModel.js?
//   Workout.create(body)
//     .then(dbWorkout => { // does db workout need to be declared first or is this already created with mongoose?
//       res.json(dbWorkout);
//     })
//     .catch(err => { // error return
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });



module.exports = router;
