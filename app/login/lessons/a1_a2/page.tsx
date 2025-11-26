"use client";
import { useState } from "react";
import dynamic from 'next/dynamic';

// Lazy-load sub-sections so their code is only fetched/executed when requested
const PartsOfSpeech = dynamic(() => import('./part_of_speech/page'));
const PunctuationMasteryGuide = dynamic(() => import('./punctuation/page'));

export default function A1A2Lessons() {
  const [showParts, setShowParts] = useState(false);
  const [showPunct, setShowPunct] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">A1 - A2 Lessons</h1>
      <p className="text-lg">
        Welcome to the A1 - A2 English lessons. Here you will find beginner-level materials to help you build a strong foundation in English grammar, vocabulary, and writing skills.
      </p>

      {/* Parts of Speech toggle */}
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

      {/* Punctuation toggle (lazy-loaded separately) */}
      {!showPunct ? (
        <button
          onClick={() => setShowPunct(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Punctuation
        </button>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowPunct(false)}
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