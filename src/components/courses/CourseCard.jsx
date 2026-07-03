import { Link } from 'react-router-dom'

function CourseCard({ course }) {
  return (
    <article className="group rounded-xl border border-[#E4DECF] bg-white p-6 shadow-[0_1px_2px_rgba(16,25,43,0.04)] transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-center justify-between gap-3 text-xs">
        <span className="font-label uppercase text-[#1F4B3F]">{course.category}</span>
        <span className="font-label uppercase text-[#5B6472]">{course.level}</span>
      </div>
      <h2 className="font-display mt-4 text-xl font-semibold text-[#10192B]">{course.title}</h2>
      <p className="mt-3 text-sm text-[#5B6472]">{course.description}</p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E4DECF] pt-4 text-sm text-[#10192B]">
        <span>{course.duration}h</span>
        <span className="font-medium">{course.price}</span>
      </div>
      <Link to={`/courses/${course.id}`} className="btn btn-primary mt-6 w-full">
        View details
      </Link>
    </article>
  )
}

export default CourseCard