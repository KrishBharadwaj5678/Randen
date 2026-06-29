import { useEffect, useState } from "react";
import CountUp from "../components/ui/CountUp";
import { SmoothCursor } from "../components/ui/SmoothCursor";
import { AnimatedThemeToggler } from "../components/ui/AnimatedThemeToggler";
import generateNumSound from "../assets/sounds/generateNum.mp3";
import { type Range } from "../types/Range";

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
            className="rounded-md border-2 border-(--input-border) bg-(--input-bg) px-5 py-3 text-(--text-color) outline-none transition duration-200 focus:ring-(--input-focus) focus:ring-2"
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
            className="rounded-md border-2 border-(--input-border) bg-(--input-bg) px-5 py-3 text-(--text-color) outline-none transition duration-200 focus:ring-(--input-focus) focus:ring-2"
            onChange={(e) =>
              setNum({
                ...num,
                max: Number(e.target.value),
              })
            }
          />
        </div>

        {/* Generate Number */}
        <button
          className="relative inline-flex h-14 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-[0.5px] focus:ring-slate-400 focus:ring-offset-[0.5px] focus:ring-offset-slate-50"
          onClick={handleGenerate}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-(--button-bg) px-12 py-2 text-md font-medium text-(--text-color) backdrop-blur-3xl">
            Generate Number
          </span>
        </button>
      </div>
    </>
  );
};

export default Home;
