import { useEffect, useState } from 'react'
import { getCollection } from '../api/collections'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const usersEndpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch(usersEndpoint)
        const payload = await response.json()
        setUsers(getCollection(payload, 'users'))
        setStatus('ready')
      } catch {
        setStatus('error')
      }
    }

    loadUsers()
  }, [])

  if (status === 'loading') {
    return <p className="text-muted">Loading users...</p>
  }

  if (status === 'error') {
    return <p className="text-danger">Unable to load users.</p>
  }

  return (
    <div className="content-grid">
      {users.map((user) => (
        <article className="data-card" key={user._id ?? user.email}>
          <div>
            <p className="eyebrow">{user.role}</p>
            <h2>{user.name}</h2>
          </div>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{user.teamName}</dd>
            </div>
            <div>
              <dt>Goal</dt>
              <dd>{user.fitnessGoal}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  )
}

export default Users
