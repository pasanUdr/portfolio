import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-5xl font-semibold mb-8 leading-normal"
        >
          Hello I am <span className="text-fuchsia-500">Pasan Udara Dias</span>
        </h1>
        <p data-aos="fade-left" className="text-lg">
          An Enthusiastic IT Undergraduate at Rajarata University of Sri Lanka. <br />
          Passionate in Full Stack Software Development and Developer Operations. <br />
          Exploring the Boundless world of Technology 
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/pasanUdr"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/pasan-udara-dias-48322b2a2/"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaFacebookSquare className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        data-aos="fade-up"
        src="assets/my.jpeg"
        width={300}
        height={300}
        className="rounded-full border-4 p-1 border-fuchsia-500 img_glow"
        alt="my"
      />
    </div>
  );
};

export default Banner;
