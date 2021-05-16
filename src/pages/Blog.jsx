import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogByID } from '../redux/actions/blogActions.js';
import Spinner from '../components/Spinner';
import NotFound from '../pages/404';

function Blog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogByID(id));
  }, []);
  const { loading, blog, message } = useSelector((state) => state.Blog);
  console.log(loading);
  if (loading) return <Spinner />;

  return (
    <section>
      <article>
        {blog == undefined ? (
          <NotFound message={message} />
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
