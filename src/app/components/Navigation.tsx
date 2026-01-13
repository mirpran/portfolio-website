import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            Portfolio
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home & About
            </Link>
            <Link
              to="/work"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/work'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Work Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
