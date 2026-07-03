import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const links = [
  { to: '/dashboard', label: 'Overview' },
  { to: '/profile', label: 'Profile' },
  { to: '/courses', label: 'Browse courses' },
]

function Sidebar() {
  const { user, logout } = useAuth()

  const linkClass = ({ isActive }) =>
    `block rounded-md px-4 py-2.5 text-sm transition-colors ${
      isActive
        ? 'bg-[#10192B] text-[#F6F3EC]'
        : 'text-[#5B6472] hover:bg-[#F6F3EC] hover:text-[#10192B]'
    }`

  return (
    <aside className="rounded-xl border border-[#E4DECF] bg-white p-6 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div className="border-b border-[#E4DECF] pb-5">
        <p className="font-label text-xs uppercase text-[#9C7A3C]">Signed in as</p>
        <p className="font-display mt-2 truncate text-lg font-semibold text-[#10192B]">
          {user?.name || 'Learner'}
        </p>
        <p className="truncate text-sm text-[#5B6472]">{user?.email}</p>
      </div>

      <nav className="mt-5 space-y-1">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={logout}
        className="mt-5 w-full rounded-md border border-[#E4DECF] px-4 py-2.5 text-left text-sm text-[#5B6472] transition-colors hover:border-[#9C7A3C] hover:text-[#9C7A3C]"
      >
        Log out
      </button>
    </aside>
  )
}

export default Sidebar