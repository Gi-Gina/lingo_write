"use client";
import { useState } from "react";

import PartsOfSpeech from "./part_of_speech/page";
import PunctuationMasteryGuide from "./punctuation/page";

export default function A1A2Lessons() {
  const [showParts, setShowParts] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">A1 - A2 Lessons</h1>
      <p className="text-lg">
        Welcome to the A1 - A2 English lessons. Here you will find beginner-level materials to help you build a strong foundation in English grammar, vocabulary, and writing skills.
      </p>

      {!showParts ? (
        <button
          onClick={() => setShowParts(true)}
          className="mt-4 text-blue-600 hover:underline"
        >
          View: Parts of Speech
        </button>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowParts(false)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Lessons
          </button>

          <div className="bg-white rounded-lg shadow p-4">
            <PartsOfSpeech />
          </div>
        </div>
      )}

      {!showParts ? (
        <button
          onClick={() => setShowParts(true)}
          className="mt-4 text-blue-600 hover:underline"
        >
          View: Punctation
        </button>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowParts(false)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Lessons
          </button>

          <div className="bg-white rounded-lg shadow p-4">
            <PunctuationMasteryGuide />
          </div>
        </div>
      )}
      
    </div>
  );
}