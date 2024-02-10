const express = require('express')
const app = express()
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose')
const workoutRoutes = require('./api/workout')


mongoose.connect('mongodb://127.0.0.1:27017/WorkoutBuddy')
   .then(()=>{
    console.log("DB connected")
   })
   .catch((err)=>{
    console.log(err)
   })



app.use(express.json())
app.use(cors())


app.use('/' , workoutRoutes)






app.listen(PORT , ()=>{
    console.log("App is listening on port 4000")
})