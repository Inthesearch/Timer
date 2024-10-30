import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { reset, title, result },
  ref
) {
  const dialog = useRef();
  const userLost = result <= 0;
  const forwardRemainingTime = (result / 1000).toFixed(2);
  const score = Math.round((1 - forwardRemainingTime / title) * 100);
  console.log(forwardRemainingTime, title);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={reset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The target time was{" "}
        <strong>
          {title} second{title > 1 ? "s" : ""}.
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>{forwardRemainingTime} left.</strong>
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
