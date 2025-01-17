import { useState, useEffect } from "react";

const Countdown = () => {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = new Date("2025-01-31T23:59:59").getTime();
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  

  return (
    <>
      <div className="flex flex-row justify-around mt-10 px-10">
        <div className="flex flex-col justify-around items-center bg-white w-36 h-36 rounded-2xl">
          <p>{timeLeft.days}</p>
          <p className="text-lg">Days</p>
        </div>
        <div className="flex flex-col justify-around items-center bg-white w-36 h-36 rounded-2xl">
        <p>{timeLeft.hours}</p>
          <p className="text-lg">Hours</p>
        </div>
        <div className="flex flex-col justify-around items-center bg-white w-36 h-36 rounded-2xl">
        <p>{timeLeft.minutes}</p>
          <p className="text-lg">Mins</p>
        </div>
        <div className="flex flex-col justify-around items-center bg-white w-36 h-36 rounded-2xl">
        <p>{timeLeft.seconds}</p>
          <p className="text-lg">Sec</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
