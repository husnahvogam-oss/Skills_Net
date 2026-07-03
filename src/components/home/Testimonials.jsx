function Testimonials() {
  const testimonials = [
    { name: 'Mia Carter', quote: 'Skill Nest helped me launch my first freelance career in just a few months.' },
    { name: 'Lucas Chen', quote: 'The courses are practical, easy to follow, and the projects are very relevant.' },
  ]

  return (
    <section className="rounded-2xl border border-[#E4DECF] bg-white p-10 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div>
        <p className="font-label text-xs uppercase text-[#9C7A3C]">Testimonials</p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-[#10192B]">What learners say</h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="rounded-xl border border-[#E4DECF] bg-[#F6F3EC] p-6">
            <p className="font-display text-lg leading-relaxed text-[#10192B]">“{item.quote}”</p>
            <footer className="mt-4 flex items-center gap-3 text-sm text-[#5B6472]">
              <span className="h-px w-6 bg-[#9C7A3C]" />
              {item.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Testimonials