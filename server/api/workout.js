const express = require('express')
const router = express.Router()
const Workout = require('../models/Workout')



//add workout

router.get('/all', async (req , res)=>{
    const workouts = await Workout.find();
    res.json(workouts)
})


router.post('/add' , async (req , res)=>{
    console.log("server hit")
    const workout = new Workout(req.body)
    console.log(workout)


    await workout.save()

})


module.exports = router