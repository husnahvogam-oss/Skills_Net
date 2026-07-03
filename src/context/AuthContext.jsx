import { createContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser } from '../services/authService'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (credentials) => {
    setLoading(true)
    setError(null)

    try {
      const data = await loginUser(credentials)
      setUser(data.user)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Failed to log in')
    } finally {
      setLoading(false)
    }
  }

  const signup = async (values) => {
    setLoading(true)
    setError(null)

    try {
      const data = await registerUser(values)
      setUser(data.user)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Failed to sign up')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  const value = useMemo(
    () => ({ user, loading, error, login, signup, logout }),
    [user, loading, error],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
