import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const muscleGroups = [
  "abdominals", "biceps", "chest", "glutes", "hamstrings", "lats", "quadriceps", "triceps", "calves", "shoulders", "traps", "forearms"
]


const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const [muscle, setMuscle] = useState('')
    const [exercises, setExercises] = useState([])
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        if (muscle) {
            fetch(`/api/exercises?muscle=${muscle}`)
                .then(res => res.json())
                .then(data => setExercises([data]))
                .catch(() => setExercises([]))
        } else {
            setExercises([])
        }
    }, [muscle])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch ('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            console.log("Error: ", error)
        }

        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log("Workout added", json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Muscle Group: </label>
            <select value={muscle} onChange={e => setMuscle(e.target.value)}>
                <option value="">Select muscle</option>
                {muscleGroups.map(m => (
                    <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>
                ))}
            </select>

            <label>Exercise: </label>
            <select value={title} onChange={e => setTitle(e.target.value)} disabled={!exercises.length}>
                <option value="">Select exercise</option>
                {exercises.map(ex => (
                    <option key={ex.name} value={ex.name}>{ex.name}</option>
                ))}
            </select>

            <label>Load (lbs): </label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps: </label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm