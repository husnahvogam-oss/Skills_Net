import type { PropsWithChildren } from 'react'
import Sidebar from './Sidebar'

function DashboardLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout