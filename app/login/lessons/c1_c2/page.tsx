"use client";
import React, { Suspense, useState } from "react";

// --- LAZY IMPORTS (MUST IMPORT CLIENT COMPONENTS ONLY) ---
const EssayGuide = React.lazy(() =>
  import("./organizing_essay/page").then((mod) => ({
    default: mod.default,
  }))
);

export default function C1C2Lessons() {
  const [showEssay, setShowEssay] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">A1 - A2 Lessons</h1>
      <p className="text-lg">
        Welcome to the A1 - A2 English lessons. Here you will find beginner-level materials to help you build a strong foundation in English grammar, vocabulary, and writing skills.
      </p>

      {/* ================= PARTS OF SPEECH ================= */}
      <div>
        {!showEssay ? (
        <button
          onClick={() => setShowEssay(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Organizing Essay
        </button>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowEssay(false)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Lessons
          </button>

          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Parts of Speech…</div>}>
              <EssayGuide />
            </Suspense>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}