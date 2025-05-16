const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()

//GET ALL WORKOUTS
router.get('/', getWorkouts)

//GET A SINGLE WORKOUT
router.get('/:id', getWorkout)

//POST A WORKOUT
router.post('/', createWorkout)

//DELETE A WORKOUT
router.delete('/:id', deleteWorkout)

//UPDATE A WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router