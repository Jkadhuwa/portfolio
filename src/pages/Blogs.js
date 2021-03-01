import React, { useState, useEffect } from 'react';
import blocksApi from '../apis/blogsApi';

const initialState = [];
const Blogs = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const data = blocksApi.getBlogs();
    if (data) {
      setState(data);
    }
  }, []);

  return (
    <section>
      <article>
        {state.length ? (
          state.map((blog, i) => (
            <div className="" key={i}>
              <h2> {blog.title}</h2>
              <p>{blog.body}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-wrap items-center justify-center h-screen text-2xl font-extralight text-center mx-4 ">
            No Blogs found at the moment, something good is cooking. Please come back
            later!!!
          </div>
        )}
      </article>
    </section>
  );
};

export default Blogs;
