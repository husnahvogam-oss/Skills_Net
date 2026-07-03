function Footer() {
  return (
    <footer className="border-t border-[#E4DECF] bg-[#F6F3EC] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-[#5B6472] sm:flex-row sm:px-6 lg:px-8">
        <p className="font-display text-base text-[#10192B]">Skill Nest</p>
        <p>© {new Date().getFullYear()} Skill Nest. Built for learning and growth.</p>
      </div>
    </footer>
  )
}

export default Footer