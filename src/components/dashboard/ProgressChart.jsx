function ProgressChart() {
  const stats = [
    { label: 'Course completion', value: '78%' },
    { label: 'Active streak', value: '14 days' },
    { label: 'Next milestone', value: 'Complete 2 lessons' },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl bg-[#10192B] p-6 text-[#F6F3EC]">
          <p className="font-label text-xs uppercase text-[#A9B2C3]">{stat.label}</p>
          <div className="mt-3 h-px w-8 bg-[#9C7A3C]" />
          <p className="font-display mt-4 text-3xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default ProgressChart