import { useForm } from 'react-hook-form'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const { register, handleSubmit } = useForm()
  const { login, loginWithGoogle, error, loading } = useAuth()

  const onSubmit = (values) => login(values)

  return (
    <div className="mx-auto max-w-md space-y-6 rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div>
        <p className="font-label text-xs uppercase text-[#9C7A3C]">Account</p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-[#10192B]">Welcome back</h1>
        <p className="mt-2 text-[#5B6472]">Log in to resume your learning journey.</p>
      </div>

      <button
        type="button"
        onClick={loginWithGoogle}
        disabled={loading}
        className="btn btn-muted w-full"
      >
        Continue with Google
      </button>

      <div className="flex items-center gap-3 text-xs uppercase text-[#5B6472]">
        <span className="h-px flex-1 bg-[#E4DECF]" />
        or
        <span className="h-px flex-1 bg-[#E4DECF]" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-[#10192B]">Email</span>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-2 w-full rounded-md border border-[#E4DECF] bg-[#F6F3EC] px-4 py-3 text-[#10192B] outline-none focus:border-[#9C7A3C]"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-[#10192B]">Password</span>
          <input
            type="password"
            {...register('password', { required: true })}
            className="mt-2 w-full rounded-md border border-[#E4DECF] bg-[#F6F3EC] px-4 py-3 text-[#10192B] outline-none focus:border-[#9C7A3C]"
          />
        </label>

        {error && <p className="text-sm text-red-700">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}

export default Login