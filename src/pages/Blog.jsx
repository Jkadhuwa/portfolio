import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogsApi from '../apis/blogsApi';
import Spinner from '../components/Spinner';
import NotFound from '../pages/404';

function Blog() {
  const initialState = {
    blog: {},
    loading: true,
  };

  const [state, setState] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const {
        data: { blog },
      } = await blogsApi.getBlogById(id);
      setState({ blog, loading: false });
    })();
  }, []);
  return (
    <section className="">
      {state.loading ? (
        <Spinner />
      ) : (
        <article>
          {!state.blog ? (
            <NotFound />
          ) : (
            <div className="mt-28 flex flex-col h-full text-xl font-extralight px-12 lg:px-64">
              <span className="text-3xl font-normal flex-wrap mb-4">
                <h2>{state.blog.title}</h2>
              </span>
              <article className="mb-8">{state.blog.body}</article>
            </div>
          )}
        </article>
      )}
    </section>
  );
}

export default Blog;
