import React, { useEffect } from "react";
import "../styles/ButtonsBox.scss";
import { textDisplay } from "../reducers/displaySlice";
import Heater1 from "../assets/audios/HeaterKit/Heater-1.mp3";
import Chord1 from "../assets/audios/SmoothPianoKit/Chord_1.mp3";
import Heater2 from "../assets/audios/HeaterKit/Heater-2.mp3";
import Chord2 from "../assets/audios/SmoothPianoKit/Chord_2.mp3";
import Heater3 from "../assets/audios/HeaterKit/Heater-3.mp3";
import Chord3 from "../assets/audios/SmoothPianoKit/Chord_3.mp3";
import Heater4 from "../assets/audios/HeaterKit/Heater-4_1.mp3";
import Shaker from "../assets/audios/SmoothPianoKit/Give_us_a_light.mp3";
import Clap from "../assets/audios/HeaterKit/Clap.mp3";
import OpenHH from "../assets/audios/SmoothPianoKit/Dry_Ohh.mp3";
import Open from "../assets/audios/HeaterKit/Open-HH.mp3";
import CloseHH from "../assets/audios/SmoothPianoKit/Bld_H1.mp3";
import Kick_Hat from "../assets/audios/HeaterKit/Kick_n_Hat.mp3";
import Punchy_Kick from "../assets/audios/SmoothPianoKit/punchy_kick_1.mp3";
import Kick from "../assets/audios/HeaterKit/Kick_1.mp3";
import Side_Stick from "../assets/audios/SmoothPianoKit/side_stick_1.mp3";
import ClosedHH from "../assets/audios/HeaterKit/Closed-HH.mp3";
import Snare from "../assets/audios/SmoothPianoKit/Brk_Snr.mp3";
import { useSelector } from "react-redux";
import ButtonItem from "./ButtonItem";

const ButtonsBox = ({ dispatch, statePower, stateSound }) => {
  const volume = useSelector((state) => state.volume);

  const playAudio = (audioId) => {
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement.play();
    }
  };

  const handleClickSound = (event) => {
    const audioElement = event.currentTarget.querySelector("audio");
    if (statePower) {
      const audioId = audioElement.id;
      playAudio(audioId);
      dispatch(textDisplay(event.target.id));
    }
  };

  const handleKeyDown = (event) => {
    if (statePower) {
      const key = event.key.toUpperCase();
      const audioId = document.querySelector(`audio[id="${key}"]`)?.id;
      const parentDiv=document.getElementById(audioId).parentNode.id;
      console.log(parentDiv)
      if (audioId) {
        playAudio(audioId);
      }
      dispatch(textDisplay(parentDiv));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div className="buttons-box">
      <ButtonItem
        text1="Heater-1"
        text2="Chord-1"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="Q"
        sound1={Heater1}
        sound2={Chord1}
      />
      <ButtonItem
        text1="Heater-2"
        text2="Chord-2"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="W"
        sound1={Heater2}
        sound2={Chord2}
      />
      <ButtonItem
        text1="Heater-3"
        text2="Chord-3"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="E"
        sound1={Heater3}
        sound2={Chord3}
      />
      <ButtonItem
        text1="Heater-4"
        text2="Shaker"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="A"
        sound1={Heater4}
        sound2={Shaker}
      />
      <ButtonItem
        text1="Clap"
        text2="Open-HH"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="S"
        sound1={Clap}
        sound2={OpenHH}
      />
      <ButtonItem
        text1="Open-HH"
        text2="Closed-HH"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="D"
        sound1={Open}
        sound2={CloseHH}
      />
      <ButtonItem
        text1="Kick-n'-Hat"
        text2="Punchy-Kick"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="Z"
        sound1={Kick_Hat}
        sound2={Punchy_Kick}
      />
      <ButtonItem
        text1="Kick"
        text2="Side-Stick"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="X"
        sound1={Kick}
        sound2={Side_Stick}
      />
      <ButtonItem
        text1="Closed-HH"
        text2="Snare"
        stateSound={stateSound}
        handleClickSound={handleClickSound}
        soundId="C"
        sound1={ClosedHH}
        sound2={Snare}
      />
    </div>
  );
};

export default ButtonsBox;
