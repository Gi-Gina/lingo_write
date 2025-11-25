"use client";

import { useState } from "react";

// Import the actual page components
import A1Page from "../lessons/a1_a2/page"
import B1Page from "../lessons/b1_b2/page"
import C1Page from "../lessons/c1_c2/page"
import EssayPage from "../essay_w/page"
import LevelTestPage from "../level_test/page"
import ExercisesPage from "../exercises/page"

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("welcome");

  const renderSection = () => {
    switch (activeSection) {
      case "a1":
        return <A1Page />;
      case "b1":
        return <B1Page />;
      case "c1":
        return <C1Page />;
      case "exercises":
        return <ExercisesPage />;
      case "essay":
        return <EssayPage />;
      case "test":
        return <LevelTestPage />;
      default:
        return <p className="p-5 text-xl">Welcome to LingoWrite</p>;
    }
  };

  return (
    <div className="flex flex-row w-screen h-screen bg-blue-200">

      {/* LEFT MENU */}
      <div className="flex flex-col bg-blue-200 w-1/5">
        <div className="text-2xl font-bold p-3">
          <h2>Welcome to LingoWrite</h2>
        </div>

        <ul>
          <li className="p-5 hover:bg-blue-300 cursor-pointer"
              onClick={() => setActiveSection("a1")}>
            A1 - A2
          </li>

          <li className="p-5 hover:bg-blue-300 cursor-pointer"
              onClick={() => setActiveSection("b1")}>
            B1 - B2
          </li>

          <li className="p-5 hover:bg-blue-300 cursor-pointer"
              onClick={() => setActiveSection("c1")}>
            C1 - C2
          </li>

          <li className="p-5 hover:bg-blue-300 cursor-pointer"
              onClick={() => setActiveSection("exercises")}>
            Exercises
          </li>

          <li className="p-5 hover:bg-blue-300 cursor-pointer"
              onClick={() => setActiveSection("essay")}>
            Practise Essay Writing
          </li>

          <li className="p-5 hover:bg-blue-300 cursor-pointer"
              onClick={() => setActiveSection("test")}>
            Take a Level Test
          </li>
        </ul>
      </div>

      {/* RIGHT DISPLAY PANEL */}
      <div className="flex bg-blue-300 w-4/5 border-l-4 border-blue-300 rounded-l-4xl">
        <div className="w-full p-5 overflow-scroll">
          {renderSection()}
        </div>
      </div>

    </div>
  );
}
