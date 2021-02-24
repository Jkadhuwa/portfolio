import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen text-2xl font-extralight ">
      <h1 className="text-4xl">404! Page Not Found</h1>
      <p className="text-xl">
        You just hit a route that doesn&#39;t exist... so sorry.
      </p>
    </div>
  );
}

export default NotFoundPage;
