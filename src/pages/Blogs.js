import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import blogsApi from '../apis/blogsApi';
import DevImg from '../assets/images/dev_img.jpeg';
import Spinner from '../assets/images/spinner.gif';

const initialState = {
  data: [],
  loading: true,
};
const Blogs = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    (async () => {
      const { data } = await blogsApi.getBlogs();
      setState({ data: data.blogs, loading: false });
    })();
  }, []);
  return (
    <section className="mt-36 h-screen text-xl font-extralight ">
      {state.loading ? (
        <div className="flex items-center justify-center h-screen bg-white -mt-16">
          <img src={Spinner} />
        </div>
      ) : (
        <article className="flex flex-col items-center mb-20">
          {!state.data.length ? (
            <div className="-mt-36 flex flex-wrap items-center justify-center text-2xl h-screen text-center mx-4 ">
              No Blogs found at the moment, something good is cooking. Please come
              back later!!!
            </div>
          ) : (
            state.data.map((blog, i) => (
              <div
                className="flex h-48 p-2 w-80 sm:flex flex-row border rounded mt-2 sm:w-3/4 sm:h-1/3 sm:p-8 hover:shadow-md "
                key={i}
              >
                <span className="flex sm:w-1/5 mr-8 sm:visible">
                  <img src={DevImg} />
                </span>

                <span className="sm:w-4/5">
                  <div>
                    <NavLink to="/blogs">
                      <h2 className="text-xl font-light"> {blog.title}</h2>
                      <p className="h-14 overflow-hidden overflow-ellipsis">{`${blog.body}`}</p>
                    </NavLink>
                  </div>

                  <div className="flex mt-3 text-base font-thin">
                    <span className="mr-8">{blog.createdAt}</span>
                    <span className="mr-8">3 min Read</span>
                    <NavLink to="/blogs">
                      <button className="font-thin">Read more...</button>
                    </NavLink>
                  </div>
                </span>
              </div>
            ))
          )}
        </article>
      )}
    </section>
  );
};

export default Blogs;
