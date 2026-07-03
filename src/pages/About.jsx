function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-[#E4DECF] bg-white p-10 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
        <p className="font-label text-xs uppercase text-[#9C7A3C]">About</p>
        <h1 className="font-display mt-3 text-3xl font-semibold text-[#10192B]">About Skill Nest</h1>
        <p className="mt-4 max-w-2xl text-[#5B6472]">
          Skill Nest is a modern learning platform with courses designed to help you grow your career. We focus on real-world skills, practical curriculum, and community support.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
          <h2 className="font-display text-2xl font-semibold text-[#10192B]">Our mission</h2>
          <p className="mt-4 text-[#5B6472]">Provide accessible, meaningful education that helps learners build confidence and skills for the next step in their career.</p>
        </div>
        <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
          <h2 className="font-display text-2xl font-semibold text-[#10192B]">Why choose us</h2>
          <p className="mt-4 text-[#5B6472]">We combine expert-led courses, hands-on projects, and supportive guidance to help learners succeed.</p>
        </div>
      </section>
    </div>
  )
}

export default About