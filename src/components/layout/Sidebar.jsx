function Sidebar({ children }) {
  return (
    <aside className="rounded-xl border border-[#E4DECF] bg-white p-6 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      {children}
    </aside>
  )
}

export default Sidebar