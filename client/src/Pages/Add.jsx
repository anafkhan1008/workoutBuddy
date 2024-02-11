import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [workoutData, setWorkoutData] = useState({
    name: '',
    description: '',
    duration: '',
    exercises: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({ ...workoutData, [name]: value });
  };

  const handleExerciseChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExercises = [...workoutData.exercises];
    updatedExercises[index][name] = value;
    setWorkoutData({ ...workoutData, exercises: updatedExercises });
  };

  const addExercise = () => {
    setWorkoutData({
      ...workoutData,
      exercises: [...workoutData.exercises, { name: '', sets: '', reps: '', weight: '' }]
    });
    handleSubmit();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/add', workoutData);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={workoutData.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={workoutData.description} onChange={handleChange} />
      </label>
      <label>
        Duration (minutes):
        <input type="number" name="duration" value={workoutData.duration} onChange={handleChange} />
      </label>
      <button type="button" onClick={addExercise}>Add Exercise</button>
      {workoutData.exercises.map((exercise, index) => (
        <div key={index}>
          <label>
            Exercise Name:
            <input type="text" name="name" value={exercise.name} onChange={(e) => handleExerciseChange(index, e)} />
          </label>
          <label>
            Sets:
            <input type="number" name="sets" value={exercise.sets} onChange={(e) => handleExerciseChange(index, e)} />
          </label>
          <label>
            Reps:
            <input type="number" name="reps" value={exercise.reps} onChange={(e) => handleExerciseChange(index, e)} />
          </label>
          <label>
            Weight (optional):
            <input type="number" name="weight" value={exercise.weight} onChange={(e) => handleExerciseChange(index, e)} />
          </label>
        </div>
      ))}
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default Add;
