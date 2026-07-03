import { useLocation } from 'react-router-dom'

function DashboardHeader() {
  const { pathname } = useLocation()
  const title = pathname === '/profile' ? 'Your Profile' : 'Dashboard Overview'
  const description =
    pathname === '/profile'
      ? 'Manage your account details and preferences.'
      : 'Track your learning progress, recent activity, and milestones.'

  return (
    <div className="mb-6 rounded-3xl border border-[#E4DECF] bg-white p-6 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9C7A3C]">Dashboard</p>
        <h1 className="text-3xl font-semibold text-[#10192B]">{title}</h1>
        <p className="max-w-2xl text-sm leading-6 text-[#5B6472]">{description}</p>
      </div>
    </div>
  )
}

export default DashboardHeader
