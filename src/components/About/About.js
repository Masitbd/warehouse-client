import React from 'react';
import User from '../../images/murad.png'

const About = () => {
    return (
        <div className="my-5 mx-auto px-4 sm:px-6 lg:px-8 mt-5  container">
        <div className="flex flex-wrap justify-center">
          <img src={User} alt="" />
        </div>
        <div className="mx-5">
          <h1 className="text-3xl text-center mb-3 text-green-800 font-bold">
            My Current Status And Future Plans{" "}
          </h1>
          <p className='text-xl'>
            On a personal level, I am highly-motivated, result oriented,
            self-driven, hard-working, fast learner and constantly seeking to
            improve my skills and am fully aware of the latest Front-end
            Development Tools.
          </p>
          <p className='text-xl my-2'>
            In addition to this, I have the ability to adapt to any type of team
            environment, I am team oriented and get along with others when working
            in a group setting. I also have the ability to work independently
            while staying on schedule and meeting those tight deadlines.
          </p>
          <p className='text-xl'>
            Currently I am learnig react and type script and doing several project
            based of my learnig and previous experience. I am also doing problem
            solving in various platfoem when I am geting time. Web development is
            my passion and my favorite language is ruby on rails
          </p>
        </div>
      </div>
    );
};

export default About;<h2>This is about page</h2>