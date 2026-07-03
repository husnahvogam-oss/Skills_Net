import { Link } from 'react-router-dom'
import coursesData from '../../data/courses'

function FeaturedCourses() {
  const featured = coursesData.slice(0, 3)

  return (
    <section className="space-y-8 rounded-2xl border border-[#E4DECF] bg-white p-10 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-label text-xs uppercase text-[#9C7A3C]">Featured</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-[#10192B]">Courses worth your time</h2>
          <p className="mt-2 text-[#5B6472]">Top-rated classes for current in-demand skills.</p>
        </div>
        <Link to="/courses" className="btn btn-secondary text-sm">
          View all courses
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((course) => (
          <article key={course.id} className="rounded-xl border border-[#E4DECF] bg-[#F6F3EC] p-6">
            <p className="font-label text-xs uppercase text-[#1F4B3F]">{course.category}</p>
            <h3 className="font-display mt-4 text-xl font-semibold text-[#10192B]">{course.title}</h3>
            <p className="mt-3 text-sm text-[#5B6472]">{course.description}</p>
            <div className="mt-6 flex items-center justify-between border-t border-[#E4DECF] pt-4 text-sm text-[#10192B]">
              <span>{course.duration}h</span>
              <span className="font-medium">{course.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCourses