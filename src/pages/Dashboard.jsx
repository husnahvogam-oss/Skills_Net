import StatsCard from '../components/dashboard/StatsCard'
import ProgressChart from '../components/dashboard/ProgressChart'

function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        <StatsCard title="Completed" value="8" description="Courses finished this month" />
        <StatsCard title="In progress" value="3" description="Courses you are currently taking" />
        <StatsCard title="Score" value="92%" description="Average learning progress" />
      </div>

      <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
        <p className="font-label text-xs uppercase text-[#9C7A3C]">Overview</p>
        <h1 className="font-display mt-2 text-2xl font-semibold text-[#10192B]">Learning progress</h1>
        <p className="mt-3 text-[#5B6472]">Track your milestones and review the next steps in your learning journey.</p>
        <div className="mt-8">
          <ProgressChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard