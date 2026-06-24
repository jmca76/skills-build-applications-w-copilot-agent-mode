import { useEffect, useState } from 'react'
import { getCollection } from '../api/collections'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const teamsEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

function Teams() {
  const [teams, setTeams] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const response = await fetch(teamsEndpoint)
        const payload = await response.json()
        setTeams(getCollection(payload, 'teams'))
        setStatus('ready')
      } catch {
        setStatus('error')
      }
    }

    loadTeams()
  }, [])

  if (status === 'loading') {
    return <p className="text-muted">Loading teams...</p>
  }

  if (status === 'error') {
    return <p className="text-danger">Unable to load teams.</p>
  }

  return (
    <div className="content-grid">
      {teams.map((team) => (
        <article className="data-card" key={team._id ?? team.name}>
          <div>
            <p className="eyebrow">{team.city}</p>
            <h2>{team.name}</h2>
          </div>
          <dl>
            <div>
              <dt>Mascot</dt>
              <dd>{team.mascot}</dd>
            </div>
            <div>
              <dt>Members</dt>
              <dd>{team.memberCount}</dd>
            </div>
            <div>
              <dt>Weekly goal</dt>
              <dd>{team.weeklyGoalMinutes} min</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  )
}

export default Teams
