const About = () => {

  const resumePath =  'assets/Resume_Pasan_Udara.pdf';

  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src="assets/myPic.jpg"
        width={300}
        height={300}
        className="border-4 p-1 border-fuchsia-500 img_glow"
        alt="my"
      />
      <div className="h-full lg:py-40 flex flex-col items-center lg:items-start text-white ">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal uppercase text-fuchsia-500"
        >
          About Me
        </h1>
        <p data-aos="fade-left" className=" text-center lg:text-start">
          A solid foundation in full-stack software development practices, eager
          to apply technical skills in challenging environments. Recognized for
          a proactive approach to continuous learning and effective
          contributions, with a strong interest in engaging with dynamic,
          forward-thinking projects. Ready to embrace new challenges and grow
          professionally, with a keen attention to detail.
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href={resumePath} target="_blank" rel="noopener noreferrer">
                <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
