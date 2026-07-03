import React from 'react'

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-white" />
        <p className="text-sm text-white">Loading…</p>
      </div>
    </div>
  )
}

export default Loader
