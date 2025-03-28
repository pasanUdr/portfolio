import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 max-md:place-items-center md:gap-3">
        <div className="mb-4 md:mb-0 max-md:place-items-center">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            Pasan
          </span>
          <p className="text-[16px] my-4">
          A passionate IT Undergraduate. <br />
          Exploring the Boundless world of Technology!
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 ">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Developement</li>
            <li className="my-2">Mobile Developement</li>
            <li className="my-2">MERN</li>
            <li className="my-2">Java</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 ">
            Contact
          </h2>
          <p className="text-[16px] my-4">pasanudias@gmail.com</p>
          <p className="text-[16px] my-4">+94 779651010</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2">
            Follow Me
          </h2>
          <div className="flex space-x-3">
            <a
              href="https://github.com/pasanUdr"
              className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out"
            >
              <AiFillGithub className="text-[28px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/pasan-udara-dias-48322b2a2/"
              className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out"
            >
              <FaLinkedinIn className="text-[28px]" />
            </a>
            <a
              href=""
              className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out"
            >
              <FaFacebookSquare className="text-[28px]" />
            </a>
            <a
              href=""
              className="text-white hover:text-fuchsia-500 transition-all duration-150 ease-in-out"
            >
              <FaInstagram className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xs md:text-sm p-2 border-t-2 border-slate-600 mt-2">© 2024 Deveoped by Pasan Udara.</div>
    </footer>
  );
}

export default Footer;
