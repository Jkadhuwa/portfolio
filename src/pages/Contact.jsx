import React, { useState } from 'react';
import ContactImg from '../assets/images/contactImg.png';

const Contact = () => {
  const initialstate = {
    name: '',
    email: '',
    message: '',
  };
  const [state, setState] = useState(initialstate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState(initialstate);
  };

  return (
    <section>
      <article className="min-h-screen grid sm:grid-cols-2 items-center justify-center px-48">
        <div className="invisible sm:visible flex flex-col items-center justify-center">
          <img src={ContactImg} alt="" />
        </div>
        <div className="-mt-96 flex flex-col sm:mt-16 grid space-y-5 ">
          <h2 className="text-center font-light text-2xl sm:font-extralight">
            Get in touch
          </h2>

          <form
            className="flex flex-col items-center justify-center space-y-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="w-80 focus:outline-none border focus:border-yellow-600 sm:w-96 h-8 rounded-md p-4"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required={true}
              value={state.name}
            />
            <input
              className="w-80 focus:outline-none border focus:border-yellow-600 sm:w-96 h-8 rounded-md p-4"
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required={true}
            />
            <textarea
              className="w-80 border focus:outline-none focus:border-yellow-600 sm:w-96 focus:outline-none rounded-md p-4"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              onChange={handleChange}
              value={state.message}
              required={true}
            />
            <button
              className="w-80 rounded-md bg-green-200 focus:outline-none sm:w-96 hover:bg-green-500 h-8 "
              type="submit"
              value="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;
