import { useAuth } from '../hooks/useAuth'

function Profile() {
  const { user } = useAuth()

  return (
    <div className="space-y-8 rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div>
        <p className="font-label text-xs uppercase text-[#9C7A3C]">Account</p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-[#10192B]">Your profile</h1>
      </div>
      {user ? (
        <div className="divide-y divide-[#E4DECF] text-[#10192B]">
          <div className="flex justify-between py-3 text-sm">
            <span className="text-[#5B6472]">Name</span>
            <span className="font-medium">{user.name || 'Learner'}</span>
          </div>
          <div className="flex justify-between py-3 text-sm">
            <span className="text-[#5B6472]">Email</span>
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex justify-between py-3 text-sm">
            <span className="text-[#5B6472]">Member since</span>
            <span className="font-medium">{user.joined || 'Today'}</span>
          </div>
        </div>
      ) : (
        <p className="text-[#5B6472]">No profile found. Please log in to see your details.</p>
      )}
    </div>
  )
}

export default Profile