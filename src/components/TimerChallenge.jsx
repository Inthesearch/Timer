import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, isTimeExpired] = useState(false);
  const [timeStarted, isTimeStarted] = useState(false);

  function handleClick() {
    setTimeout(() => {
      isTimeExpired(true);
    }, targetTime * 1000);
    isTimeStarted(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      {timeExpired && <p>You Lost!!!</p>}
      <p>
        <button onClick={handleClick}>
          {timeStarted ? "Stop Time" : "Start Time"}
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
