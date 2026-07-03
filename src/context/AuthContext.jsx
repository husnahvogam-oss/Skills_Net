import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
} from 'firebase/auth'
import { auth } from '../lib/firebase'

export const AuthContext = createContext(null)

function shapeUser(firebaseUser) {
  if (!firebaseUser) return null
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    joined: firebaseUser.metadata?.creationTime
      ? new Date(firebaseUser.metadata.creationTime).toLocaleDateString()
      : null,
  }
}

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [checkingSession, setCheckingSession] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(shapeUser(firebaseUser))
      setCheckingSession(false)
    })
    return unsubscribe
  }, [])

  async function login({ email, password }) {
    setError(null)
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success('Signed in successfully')
      navigate('/dashboard')
    } catch (err) {
      const msg = friendlyMessage(err.code)
      setError(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  async function signup({ name, email, password }) {
    setError(null)
    setLoading(true)
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password)
      if (name) {
        await updateProfile(credential.user, { displayName: name })
        setUser(shapeUser({ ...credential.user, displayName: name }))
      }
      toast.success('Account created')
      navigate('/dashboard')
    } catch (err) {
      const msg = friendlyMessage(err.code)
      setError(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  async function loginWithGoogle() {
    setError(null)
    setLoading(true)
    try {
      await signInWithPopup(auth, new GoogleAuthProvider())
      toast.success('Signed in')
      navigate('/dashboard')
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        const msg = friendlyMessage(err.code)
        setError(msg)
        toast.error(msg)
      }
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, loginWithGoogle, logout, error, loading, checkingSession }}>
      {children}
    </AuthContext.Provider>
  )
}

function friendlyMessage(code) {
  switch (code) {
    case 'auth/invalid-email':
      return 'That email address looks invalid.'
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Incorrect email or password.'
    case 'auth/email-already-in-use':
      return 'An account with that email already exists.'
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.'
    default:
      return 'Something went wrong. Please try again.'
  }
}