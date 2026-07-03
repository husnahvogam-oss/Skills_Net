import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import DashboardLayout from '../components/layout/DashboardLayout'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import CourseDetails from '../pages/CourseDetails'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import ProtectedRoute from './ProtectedRoute'
import { useAuth } from '../hooks/useAuth'
import DashboardHeader from '../components/layout/DashboardHeader'

function AppRoutes() {
  const location = useLocation()
  const hideHeaderFooter = location.pathname === '/dashboard' || location.pathname === '/profile'

  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#10192B]">
      {!hideHeaderFooter && <Navbar />}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardHeader />
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <DashboardHeader />
                  <Profile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default AppRoutes