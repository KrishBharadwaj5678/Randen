import { useEffect, useState } from "react";
import CountUp from "../components/ui/CountUp";
import { SmoothCursor } from "../components/ui/SmoothCursor";
import { AnimatedThemeToggler } from "../components/ui/AnimatedThemeToggler";
import generateNumSound from "../assets/sounds/generateNum.mp3";
import { type Range } from "../types/Range";
import {
  GENERATE_BUTTON_CLASS,
  GENERATE_BUTTON_CONTENT_CLASS,
  GENERATE_BUTTON_SPIN_CLASS,
  INPUT_CLASS,
} from "../constants/style";

const Home = () => {
  // Holds the minimum and maximum values for the random number range
  let [num, setNum] = useState<Range>({
    min: 0,
    max: 100,
  });

  // Stores the currently displayed random number
  let [random, setRandom] = useState<number>(100);

  // Preloads the sound effect used when generating a number
  let generateNum = new Audio(generateNumSound);

  // Generates a random number within the selected range and plays the sound
  let handleGenerate = () => {
    setRandom(Math.floor(Math.random() * (num.max - num.min + 1)) + num.min);
    generateNum.play();
  };

  // Generate an initial number when the page first loads.
  useEffect(() => {
    handleGenerate();
  }, []);
  return (
    <>
      {/* Theme: Light & Dark Mode */}
      <div className="flex justify-end p-6">
        <AnimatedThemeToggler />
      </div>

      {/* Custom Cursor  */}
      <SmoothCursor />

      <div className="flex items-center justify-center space-y-20 flex-col min-h-[calc(100vh-5rem)]">
        {/* Random Number Counter */}
        <CountUp
          from={0}
          to={random}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
          delay={0}
        />

        {/* Input Fields */}
        <div className="flex space-x-6">
          <input
            type="number"
            placeholder="Minimum Value"
            className={INPUT_CLASS}
            onChange={(e) =>
              setNum({
                ...num,
                min: Number(e.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="Maximum Value"
            className={INPUT_CLASS}
            onChange={(e) =>
              setNum({
                ...num,
                max: Number(e.target.value),
              })
            }
          />
        </div>

        {/* Generate Number */}
        <button className={GENERATE_BUTTON_CLASS} onClick={handleGenerate}>
          <span className={GENERATE_BUTTON_SPIN_CLASS} />
          <span className={GENERATE_BUTTON_CONTENT_CLASS}>Generate Number</span>
        </button>
      </div>
    </>
  );
};

export default Home;
