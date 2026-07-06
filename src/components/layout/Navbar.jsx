import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-[#F6F3EC]"
        : "text-[#A9B2C3] hover:text-[#F6F3EC]"
    }`;

  return (
    <header className="border-b border-[#29344A] bg-[#10192B]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold text-[#F6F3EC]">
            Skill Nest
          </span>
          <span className="font-label hidden text-[10px] uppercase text-[#9C7A3C] sm:inline">
            Est. Learning
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>

          {user ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              <NavLink to="/profile" className={linkClass}>Profile</NavLink>

              <button
                onClick={logout}
                className="rounded-md border border-[#29344A] px-4 py-2 text-sm text-[#A9B2C3] transition-colors hover:border-[#9C7A3C] hover:text-[#F6F3EC]"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>
                Log in
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-md bg-[#9C7A3C] px-4 py-2 text-sm font-medium text-[#10192B] transition-colors hover:bg-[#B08D4F]"
              >
                Sign up
              </NavLink>
            </>
          )}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#F6F3EC] md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-[#29344A] bg-[#10192B] px-6 py-5">
          <div className="flex flex-col gap-5 text-sm font-medium">

            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </NavLink>

            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/profile"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </NavLink>

                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="rounded-md border border-[#29344A] px-4 py-2 text-left text-[#A9B2C3] hover:border-[#9C7A3C] hover:text-[#F6F3EC]"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={linkClass}
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </NavLink>

                <NavLink
                  to="/signup"
                  className="rounded-md bg-[#9C7A3C] px-4 py-2 text-center font-medium text-[#10192B] hover:bg-[#B08D4F]"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </NavLink>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;