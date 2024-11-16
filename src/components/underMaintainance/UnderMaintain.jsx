import Countdown from "./Countdown";

const UnderMaintain = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 bg-slate-300 p-6 ps-10 place-content-around">
          <h1 className="text-center text-2xl italic">
            Sorry for the Inconvenience!
          </h1>
          <img
            className="place-self-center w-auto h-1/2"
            src="src\assets\dev.png"
            alt="coding pic"
          />
          <h1 className="text-left text-blue-600 text-5xl font-bold ">
            Web Page <br /> Under Maintanance
          </h1>
          <p>
            This website is currently undergoing scheduled maintenance. We
            Should be back shortly. Thank you for your patience. <br />
            Please feel free to go through following social media links.
          </p>

          <div className="flex flex-row p-10 h-30 gap-10 justify-center">
            <p className="font-bold place-content-center">Get in touch:</p>
            <a
              href="https://www.linkedin.com/in/pasan-dias-48322b2a2/"
              target="_blank"
            >
              <img
                className="w-20 h-20"
                src="src\assets\linkedin_1384014.png"
                alt="linkedInLogo"
              />
            </a>
            <a href="https://github.com/pasanUdr" target="_blank">
              <img
                className="w-20 h-20"
                src="src\assets\github.png"
                alt="githublogo"
              />
            </a>
          </div>
        </div>

        <div className="flex-1 text-center text-5xl bg-blue-300">
          <div className="flex w-auto h-1/2 m-10 justify-center">
            <img
              className="justify-center"
              src="src\assets\my.svg"
              alt="devImage"
            />
          </div>

          <div>
            <p className="text-2xl italic">Available in:</p>
          </div>
          <div>
              <Countdown />
            </div>
        </div>
      </div>
    </>
  );
};

export default UnderMaintain;
