export async function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error('Email and password are required'))
        return
      }

      resolve({
        user: {
          name: 'Skill Learner',
          email,
          joined: '2026-01-01',
        },
      })
    }, 400)
  })
}

export async function registerUser({ name, email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || !email || !password) {
        reject(new Error('Name, email, and password are required'))
        return
      }

      resolve({
        user: {
          name,
          email,
          joined: new Date().toLocaleDateString(),
        },
      })
    }, 400)
  })
}
