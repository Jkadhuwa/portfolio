import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllBlogs } from '../redux/actions/blogActions';
import DevImg from '../assets/images/dev_img.jpeg';
import Spinner from '../components/Spinner';

const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  const { loading, blogs } = useSelector((state) => state.Blogs);

  if (loading) return <Spinner />;
  if (!blogs.length)
    return (
      <div className="-mt-36 flex flex-wrap items-center justify-center text-2xl h-screen text-center mx-4 ">
        No Blogs found at the moment. Please come back later!!!
      </div>
    );
  return (
    <section className="mt-36 min-h-screen text-xl font-extralight ">
      <article className="flex flex-col items-center mb-20">
        {blogs.map((blog, i) => (
          <div
            className="flex h-48 p-2 w-80 sm:flex flex-row border rounded mt-2 sm:w-3/4 sm:h-1/3 sm:p-8 hover:shadow-md "
            key={i}
          >
            <span className="flex sm:w-1/5 mr-8 sm:visible">
              <img src={DevImg} />
            </span>

            <span className="sm:w-4/5">
              <div>
                <NavLink to={`/blogs/${blog._id}`}>
                  <h2 className="text-xl font-normal"> {blog.title}</h2>
                  <p className="h-14 overflow-hidden overflow-ellipsis">{`${blog.body}`}</p>
                </NavLink>
              </div>

              <div className="flex mt-3 text-base font-thin">
                <span className="mr-8">{blog.createdAt}</span>
                <span className="mr-8">3 min Read</span>
                <NavLink to={`/blogs/${blog._id}`}>
                  <button className="font-thin">Read more...</button>
                </NavLink>
              </div>
            </span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Blogs;
