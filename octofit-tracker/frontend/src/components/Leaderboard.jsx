import { useEffect, useState } from 'react'
import { getCollection } from '../api/collections'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const leaderboardEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const response = await fetch(leaderboardEndpoint)
        const payload = await response.json()
        setLeaderboard(getCollection(payload, 'leaderboard'))
        setStatus('ready')
      } catch {
        setStatus('error')
      }
    }

    loadLeaderboard()
  }, [])

  if (status === 'loading') {
    return <p className="text-muted">Loading leaderboard...</p>
  }

  if (status === 'error') {
    return <p className="text-danger">Unable to load leaderboard.</p>
  }

  return (
    <div className="leaderboard-list">
      {leaderboard.map((entry) => (
        <article className="leaderboard-row" key={entry._id ?? entry.userEmail}>
          <strong>#{entry.rank}</strong>
          <div>
            <h2>{entry.userName}</h2>
            <p>{entry.teamName}</p>
          </div>
          <span>{entry.points} pts</span>
        </article>
      ))}
    </div>
  )
}

export default Leaderboard
