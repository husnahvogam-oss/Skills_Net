import { useParams, Link } from 'react-router-dom'
import coursesData from '../data/courses'

function CourseDetails() {
  const { id } = useParams()
  const course = coursesData.find((item) => item.id === id)

  if (!course) {
    return (
      <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
        <h1 className="font-display text-2xl font-semibold text-[#10192B]">Course not found</h1>
        <p className="mt-3 text-[#5B6472]">The course you were looking for could not be located.</p>
        <Link to="/courses" className="btn btn-primary mt-6 inline-flex">
          Back to courses
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="font-label inline-flex rounded-md bg-[#F6F3EC] px-3 py-1 text-xs uppercase text-[#1F4B3F]">
              {course.category}
            </span>
            <h1 className="font-display mt-5 text-3xl font-semibold text-[#10192B]">{course.title}</h1>
            <p className="mt-4 max-w-2xl text-[#5B6472]">{course.description}</p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-[#E4DECF] bg-[#F6F3EC] px-4 py-3 text-sm text-[#10192B]">
              <span>{course.duration} hours</span>
              <span className="text-[#9C7A3C]">•</span>
              <span>{course.level}</span>
            </div>
          </div>
          <div className="rounded-xl bg-[#10192B] px-6 py-8 text-[#F6F3EC] shadow-lg">
            <p className="font-label text-xs uppercase text-[#A9B2C3]">Price</p>
            <p className="font-display mt-4 text-4xl font-semibold">{course.price}</p>
            <Link to="/signup" className="btn btn-primary mt-6 w-full justify-center bg-[#9C7A3C] border-[#9C7A3C] hover:bg-[#B08D4F]">
              Enroll now
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
          <h2 className="font-display text-2xl font-semibold text-[#10192B]">What you'll learn</h2>
          <ul className="mt-6 space-y-3 text-[#5B6472]">
            {course.lessons.map((lesson) => (
              <li key={lesson} className="rounded-lg border border-[#E4DECF] bg-[#F6F3EC] p-4 text-sm">
                {lesson}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-[#E4DECF] bg-white p-8 shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
          <h2 className="font-display text-2xl font-semibold text-[#10192B]">Course highlights</h2>
          <div className="mt-6 space-y-4 text-[#5B6472]">
            <p>{course.details}</p>
            <div className="rounded-lg border border-[#E4DECF] bg-[#F6F3EC] p-4 text-sm text-[#10192B]">
              <p>Instructor: {course.instructor}</p>
              <p>Students: {course.students}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails