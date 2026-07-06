function Hero() {
  return (
    <section className="rounded-2xl border border-[#E4DECF] bg-white p-10 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="font-label inline-flex items-center gap-3 text-xs uppercase text-[#9C7A3C]">
            <span className="h-px w-8 bg-[#9C7A3C]" />
            Learn smarter
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[#10192B]">
            Build the skills that move your career forward.
          </h1>
          <p className="max-w-xl text-[#5B6472]">
            Discover curated courses, expert instructors, and practical projects designed to help you grow faster.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/courses" className="btn btn-primary bg-[#9C7A3C] border-[#9C7A3C] hover:bg-[#B08D4F]">
              Browse courses
            </a>
            <a href="/about" className="btn btn-secondary border-[#9C7A3C] text-[#9C7A3C] hover:bg-[#B08D4F] hover:text-white">
              Learn more
            </a>
          </div>
        </div>
        <div className="rounded-xl bg-[#10192B] p-10 text-[#F6F3EC] shadow-lg">
          <p className="font-label text-xs uppercase text-[#A9B2C3]">Popular now</p>
          <div className="mt-4 h-px w-10 bg-[#9C7A3C]" />
          <h2 className="font-display mt-5 text-3xl font-semibold">Become a full-stack developer</h2>
          <p className="mt-4 text-[#A9B2C3]">A fast-track program with practical weekly assignments and mentorship.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero