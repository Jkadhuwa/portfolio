import React from 'react';
import SpinnerGiff from '../assets/images/spinner.gif';

const Spinner = () => {
  return (
    <section>
      <div className="flex items-center justify-center h-screen bg-white -mt-16">
        <img src={SpinnerGiff} />
      </div>
    </section>
  );
};

export default Spinner;
