// import React from 'react'
// import { NavLink, useRouteError } from 'react-router-dom'

// function Errorpage() {
//     const error = useRouteError();
//   return (
//     <div>
//       <h1>Oops!an error occur</h1>
//       {error && <p>{error.data}</p>}
//       <NavLink to="/">Go Back</NavLink>
//     </div>
//   )
// }

// export default Errorpage
// ErrorPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router

const Errorpage = ({ errorCode = '404', errorMessage = 'Page Not Found' }) => {
  const navigate = useNavigate(); // For navigation

  const handleGoHome = () => {
    navigate('/'); // Adjust the route as needed
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Code */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">{errorCode}</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl font-bold text-red-500">{errorCode}</h1>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="mt-6 text-3xl font-semibold text-gray-800">
          {errorMessage}
        </h2>
        <p className="mt-4 text-gray-600">
          Oops! It seems something went wrong. The page you're looking for might
          have been moved or doesn't exist.
        </p>

        {/* Illustration Effect */}
        <div className="mt-8 flex justify-center">
          <svg
            className="w-32 h-32 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={handleGoHome}
          className="mt-8 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
