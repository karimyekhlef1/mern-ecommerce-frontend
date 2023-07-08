import React from 'react';

const Error = ({ msg }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md px-6 py-4 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-red-600">Error</h2>
        <p className="text-red-600">{msg}</p>
      </div>
    </div>
  );
};

export default Error;
