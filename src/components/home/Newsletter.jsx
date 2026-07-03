function Newsletter() {
  return (
    <section className="rounded-2xl border border-[#29344A] bg-[#10192B] p-10 text-[#F6F3EC] shadow-lg">
      <div className="max-w-2xl space-y-5">
        <p className="font-label text-xs uppercase text-[#9C7A3C]">Stay in the loop</p>
        <h2 className="font-display text-3xl font-semibold">Join our newsletter for course updates.</h2>
        <p className="text-[#A9B2C3]">Get fresh learning resources, new course launches, and career tips delivered weekly.</p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-[#29344A] bg-[#16223A] px-4 py-3 text-[#F6F3EC] placeholder:text-[#5B6472] outline-none focus:border-[#9C7A3C]"
          />
          <button className="btn btn-primary bg-[#9C7A3C] border-[#9C7A3C] hover:bg-[#B08D4F]">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter