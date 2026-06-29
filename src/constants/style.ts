const INPUT_CLASS =
  "rounded-md border-2 border-(--input-border) bg-(--input-bg) px-5 py-3 text-(--text-color) outline-none transition duration-200 focus:ring-(--input-focus) focus:ring-2";

const GENERATE_BUTTON_CLASS =
  "relative inline-flex h-14 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-[0.5px] focus:ring-slate-400 focus:ring-offset-[0.5px] focus:ring-offset-slate-50";

const GENERATE_BUTTON_SPIN_CLASS =
  "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]";

const GENERATE_BUTTON_CONTENT_CLASS =
  "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-(--button-bg) px-12 py-2 text-md font-medium text-(--text-color) backdrop-blur-3xl";

export {
  INPUT_CLASS,
  GENERATE_BUTTON_CLASS,
  GENERATE_BUTTON_SPIN_CLASS,
  GENERATE_BUTTON_CONTENT_CLASS,
};
