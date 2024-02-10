const mongoose = require('mongoose');

// Define the schema for the workout
const workoutSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  description: String,
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    sets: {
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    weight: {
      type: Number
    }
  }]
});

// Create a model from the schema
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
