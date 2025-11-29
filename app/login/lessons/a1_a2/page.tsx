"use client";

import React, { useState, Suspense } from "react";

// --- LAZY IMPORTS (MUST IMPORT CLIENT COMPONENTS ONLY) ---
const PartsOfSpeech = React.lazy(() =>
  import("./part_of_speech/page").then((mod) => ({
    default: mod.default,
  }))
);

const PunctuationMasteryGuide = React.lazy(() =>
  import("./punctuation/page").then((mod) => ({
    default: mod.default,
  }))
);

const PrepositionsLesson = React.lazy(() =>
  import("./preposition_1/page").then((mod) => ({
    default: mod.default,
  }))
);

const FormalAdjectiveGuide = React.lazy(() =>
  import("./adjective/page").then((mod) => ({
    default: mod.default,
  }))
);

const FormalAdverbGuide = React.lazy(() =>
  import("./adverb/page").then((mod) => ({
    default: mod.default,
  }))
);

const ConjunctionLesson = React.lazy(() =>
  import("./conjunction_1/page").then((mod) => ({
    default: mod.default,
  }))
);

export default function A1A2Lessons() {
  const [showParts, setShowParts] = useState(false);
  const [showPunct, setShowPunct] = useState(false);
  const [showPreps, setShowPreps] = useState(false);
  const [showAdj, setShowAdj] = useState(false);
  const [showAdv, setShowAdv] = useState(false);
  const [showConj, setShowConj] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">A1 - A2 Lessons</h1>
      <p className="text-lg">
        Welcome to the A1 - A2 English lessons. Here you will find beginner-level materials to help you build a strong foundation in English grammar, vocabulary, and writing skills.
      </p>

      {/* ================= PARTS OF SPEECH ================= */}
      <div>
        {!showParts ? (
        <button
          onClick={() => setShowParts(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
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
            <Suspense fallback={<div>Loading Parts of Speech…</div>}>
              <PartsOfSpeech />
            </Suspense>
          </div>
        </div>
      )}
      </div>

      {/* ================= PUNCTUATION ================= */}
      <div>
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
            <Suspense fallback={<div>Loading Punctuation…</div>}>
              <PunctuationMasteryGuide />
            </Suspense>
          </div>
        </div>
      )}
      </div>
      {/* ================= PREPOSITIONS ================= */}
      <div>
      {!showPreps ? (
        <button
          onClick={() => setShowPreps(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Prepositions
        </button>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowPreps(false)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Lessons
          </button>

          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Prepositions…</div>}>
              <PrepositionsLesson />
            </Suspense>
          </div>
        </div>
      )}
      </div>
      {/* ================= ADJECTIVES ================= */}
      <div>
      {!showAdj ? (
        <button
          onClick={() => setShowAdj(true)}  
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Adjectives
        </button>  
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowAdj(false)}  
            className="mb-4 text-sm text-gray-600 hover:underline"
          > 
            ← Back to Lessons
          </button>   
          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Adjectives…</div>}>
              <FormalAdjectiveGuide />
            </Suspense>
          </div>
        </div>
      )}
      </div>
      {/* ================= ADVERBS ================= */}
       <div>
      {!showAdv ? (
        <button
          onClick={() => setShowAdv(true)}  
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Adverbs
        </button>  
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowAdv(false)}  
            className="mb-4 text-sm text-gray-600 hover:underline"
          > 
            ← Back to Lessons
          </button>   
          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Adverbs…</div>}>
              <FormalAdverbGuide />
            </Suspense>
          </div>
        </div>
      )}
      </div>
      {/* ================= CONJUNCTIONS ================= */}
      <div>
      {!showConj ? (
        <button
          onClick={() => setShowConj(true)}  
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Conjunctions
        </button>  
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowConj(false)}  
            className="mb-4 text-sm text-gray-600 hover:underline"
          > 
            ← Back to Lessons
          </button>   
          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Conjunctions…</div>}>
              <ConjunctionLesson />
            </Suspense>
          </div>  
        </div>
      )}
      </div>
    </div>
  );
}
