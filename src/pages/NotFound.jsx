import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-[#E4DECF] bg-white p-10 text-center shadow-[0_1px_2px_rgba(16,25,43,0.04)]">
      <p className="font-label text-xs uppercase text-[#9C7A3C]">404</p>
      <h1 className="font-display mt-4 text-4xl font-semibold text-[#10192B]">Page not found</h1>
      <p className="mt-4 text-[#5B6472]">The page you were looking for doesn't exist or may have been moved.</p>
      <Link to="/" className="btn btn-primary mt-8 inline-flex">
        Back to home
      </Link>
    </div>
  )
}

export default NotFound