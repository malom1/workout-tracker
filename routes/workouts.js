const express = require('express')

const router = express.Router()

//GET ALL WORKOUTS
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
})

//GET A SINGLE WORKOUT
router.get('/:id', (req, res) => {
    res.json({ msg: "GET a single workout"})
})

//POST A WORKOUT
router.post('/', (req, res) => {
    res.json({ msg: "POST a new workout"})
})

//DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({ msg: "DELETE a workout"})
})

//UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
    res.json({ msg: "UPDATE a workout"})
})

module.exports = router