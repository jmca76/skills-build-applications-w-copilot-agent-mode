import { useEffect, useState } from 'react'
import { getCollection } from '../api/collections'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const workoutsEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(workoutsEndpoint)
        const payload = await response.json()
        setWorkouts(getCollection(payload, 'workouts'))
        setStatus('ready')
      } catch {
        setStatus('error')
      }
    }

    loadWorkouts()
  }, [])

  if (status === 'loading') {
    return <p className="text-muted">Loading workouts...</p>
  }

  if (status === 'error') {
    return <p className="text-danger">Unable to load workouts.</p>
  }

  return (
    <div className="content-grid">
      {workouts.map((workout) => (
        <article className="data-card" key={workout._id ?? workout.title}>
          <div>
            <p className="eyebrow">{workout.difficulty}</p>
            <h2>{workout.title}</h2>
          </div>
          <p>{workout.focusArea} - {workout.durationMinutes} min</p>
          <ul className="exercise-list">
            {(workout.exercises ?? []).map((exercise) => (
              <li key={exercise}>{exercise}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default Workouts
