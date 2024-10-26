import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [name, settingName] = useState(null);

  function handleClick() {
    settingName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "undefined identity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
