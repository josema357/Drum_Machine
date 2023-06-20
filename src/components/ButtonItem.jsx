import React from "react";

function ButtonItem({text1, text2, stateSound, handleClickSound, soundId, sound1, sound2}) {
  return (
    <div
      className="drum-pad"
      id={stateSound == false ? text1 : text2}
      onClick={handleClickSound}
    >
      <audio
        className="clip"
        id={soundId}
        src={!stateSound ? sound1 : sound2}
      ></audio>
      {soundId}
    </div>
  );
}

export default ButtonItem;
