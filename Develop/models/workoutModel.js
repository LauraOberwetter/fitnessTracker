const mongoose = require("mongoose"); //require mongoose
const Schema = mongoose.Schema; //bring in schema class, capture in Schema variable

const WorkoutSchema = new Schema({   //invoke schema, capture within WorkoutSchema variable

  //define fields
  day: {
    type: Date,
    default: Date.now(),
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },

      duration: {
        type: Number,
        trim: true,
        required: true,
      },

      weight: {
        type: Number,
        trim: true,
        required: true,
      },

      reps: {
        type: Number,
        trim: true,
        required: true,
      },

      sets: {
        type: Number,
        trim: true,
        required: true,
      },

      distance: {
        type: Number,
        trim: true,
        required: true,
      },
    },
  ],
});

//function

const Workout = mongoose.model("Workout", WorkoutSchema); // pass WorkoutSchema to model method within Mongoose. This creates a model (Workout) to export

module.exports = Workout; //export model.  imported into server.js
