import { useMemo, useState } from 'react'
import CourseCard from '../components/courses/CourseCard'
import CategoryFilter from '../components/courses/CategoryFilter'
import Pagination from '../components/courses/Pagination'
import coursesData from '../data/courses'

const ITEMS_PER_PAGE = 6

function Courses() {
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)

  const categories = useMemo(
    () => ['All', ...new Set(coursesData.map((course) => course.category))],
    [],
  )

  const filteredCourses = useMemo(
    () =>
      category === 'All'
        ? coursesData
        : coursesData.filter((course) => course.category === category),
    [category],
  )

  const pagedCourses = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredCourses, page])

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-xl border border-[#E4DECF] bg-white p-6 shadow-[0_1px_2px_rgba(16,25,43,0.04)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-label text-xs uppercase text-[#9C7A3C]">Catalog</p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-[#10192B]">Browse courses</h1>
          <p className="mt-2 text-sm text-[#5B6472]">Choose a course that matches your goals.</p>
        </div>
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {pagedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalItems={filteredCourses.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setPage}
      />
    </div>
  )
}

export default Courses