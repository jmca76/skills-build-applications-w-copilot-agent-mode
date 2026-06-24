import { useEffect, useState } from 'react'
import { getCollection } from '../api/collections'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const activitiesEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  const [activities, setActivities] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(activitiesEndpoint)
        const payload = await response.json()
        setActivities(getCollection(payload, 'activities'))
        setStatus('ready')
      } catch {
        setStatus('error')
      }
    }

    loadActivities()
  }, [])

  if (status === 'loading') {
    return <p className="text-muted">Loading activities...</p>
  }

  if (status === 'error') {
    return <p className="text-danger">Unable to load activities.</p>
  }

  return (
    <div className="table-responsive surface">
      <table className="table align-middle mb-0">
        <thead>
          <tr>
            <th>Activity</th>
            <th>User</th>
            <th>Minutes</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity._id ?? `${activity.userEmail}-${activity.completedAt}`}>
              <td>{activity.activityType}</td>
              <td>{activity.userEmail}</td>
              <td>{activity.durationMinutes}</td>
              <td>{activity.caloriesBurned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Activities
