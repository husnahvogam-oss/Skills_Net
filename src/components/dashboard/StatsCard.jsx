function StatsCard({ title, value, description }) {
  return (
    <div className="rounded-xl border border-[#E4DECF] bg-white p-6 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <p className="font-label text-xs uppercase text-[#9C7A3C]">{title}</p>
      <p className="font-display mt-4 text-4xl font-semibold text-[#10192B]">{value}</p>
      <p className="mt-3 text-sm text-[#5B6472]">{description}</p>
    </div>
  )
}

export default StatsCard