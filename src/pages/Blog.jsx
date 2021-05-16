import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogByID } from '../redux/actions/blogActions.js';
import Spinner from '../components/Spinner';
import NotFound from '../pages/404';

function Blog() {
  const [loading, setState] = useState(true);
  const { id } = useParams();
  let blog;
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.Blogs);
  [blog] = blogs.filter((blog) => blog._id == id);

  useEffect(() => {
    setState(false);
  }, []);
  if (!blogs.length) {
    blog = useSelector((state) => state.Blog.blog);
  }
  useEffect(() => {
    dispatch(getBlogByID(id));
  }, [blogs]);

  if (loading) return <Spinner />;

  return (
    <section className="">
      <article>
        {blog == undefined ? (
          <NotFound />
        ) : (
          <div className="mt-28 flex flex-col h-full text-xl font-extralight px-12 lg:px-64">
            <span className="text-3xl font-normal flex-wrap mb-4">
              <h2>{blog.title}</h2>
            </span>
            <article className="mb-8">{blog.body}</article>
          </div>
        )}
      </article>
    </section>
  );
}

export default Blog;
