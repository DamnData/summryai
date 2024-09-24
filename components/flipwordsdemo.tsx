import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Grow.", "Build Products.", "Learn.", "Get Placed."];

  return (
    <div className="pb-10 flex justify-center items-center px-4">
      <div className="text-6xl mx-auto  text-neutral-400 dark:text-neutral-400">
      Commit yourself to<br />
        <FlipWords words={words} /> 
      </div>
    </div>
  );
}
