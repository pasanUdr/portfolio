import img1 from "../../public/assets/dev.png";

function Projects() {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center ">
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 max-md:text-3xl"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <img
          data-aos="fade-up"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800 b_glow"
          src={img1}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800 b_glow"
          src={img1}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800 b_glow"
          src={img1}
          alt="project"
        />
        <img
          data-aos="fade-down"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-2 border-2 border-fuchsia-800 b_glow"
          src={img1}
          alt=""
        />
      </div>
    </div>
  );
}

export default Projects;
