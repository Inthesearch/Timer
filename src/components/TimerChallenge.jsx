import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, isTimeExpired] = useState(false);
  const [timeStarted, isTimeStarted] = useState(false);

  const timer = useRef();

  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      isTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    isTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal title={targetTime} result="lost" ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? "Stop Time" : "Start Time"}
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
