import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is João Lucas, I am a FullSatck programmer (MERN) I develop
          safe projects and systems with excellent design. I have several
          projects on my GitHub and I'm always up to date with what's new best
          on the market. I do freelance work at the moment, but I'm looking for
          an opportunity as a software developer.
        </p>

        <br />

        <p className="text-xl">
          I have a degree in Mining and Environmental Engineering, in addition I
          am finishing my second degree in Computer Science. I have experience
          in the mining industry and also in the Bioinformatics where I was able
          to put my skills into practice Python and data analysis for 2 years.
        </p>
        <br />

        <p className="text-xl">
          Thanks for getting this far, Hope we can work together. If you want to
          know more about me just take a look at my links or my projects that
          are also here.
        </p>
      </div>
    </div>
  );
};

export default About;
