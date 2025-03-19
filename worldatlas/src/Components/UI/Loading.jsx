// LoadingPage.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Spinner Container */}
      <div className="relative">
        {/* Outer spinning circle */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        {/* Inner pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
        <p className="mt-2 text-gray-600">Please wait a moment</p>
      </div>

      {/* Progress bar */}
      <div className="w-64 mt-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;