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
//updating by id
//line 17 in api.js ://api/workouts/id
router.put("/:id", (req, res, next) => {
  dbWorkout.collection("type").update({_id: id}, {$set:{'exercise': req.body.exercise}}, (err, result) => {
    if(err) {
      throw err;
    }
    res.send('exercise updated sucessfully');
  });
});


//POST submitted workout in the workoutdb, to be pulled later
//line 29 in api.js: api/workouts
router.post("/", (req, res) => {
  db.Workout.create(body)
    .then(({ body }) =>
      db.Workout.findOneAndUpdate({}, { $push: { exercises: body } })
    )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
