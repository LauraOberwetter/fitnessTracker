const mongoose = require("mongoose"); //require mongoose
const Schema = mongoose.Schema; //bring in schema class, capture in Schema variable

const WorkoutSchema = new Schema ({ //invoke schema, capture within WorkoutSchema variable
    //define fields
    type: {

    },

    name: {
        type: String,
        trim: true,
    },

    duration: {
        type: Number,
        required: true
    },

    weight: {
        type: Number,

    },

    reps: {
        type: Number,

    },

    sets: {
        type: Number,

    },

    distance: {
        type: Number,

    }

});

const Workout = mongoose.model("Workout", WorkoutSchema); // pass WorkoutSchema to model method within Mongoose. This creates a model (Workout) to export

module.exports = Workout; //export model.  imported into server.js 