import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center h-screen font-extralight ">
      <h1 className="text-3xl md:text-4xl">404 | Not Found</h1>
      <p className="text-xl ml-4 text-center md:ml-0 text-2xl">
        Resource doesn&#39;t exist... so sorry.
      </p>
    </div>
  );
}

export default NotFoundPage;
