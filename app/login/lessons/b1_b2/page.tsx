"use client";

import React, { useState, Suspense } from "react";

// --- LAZY IMPORTS (MUST IMPORT CLIENT COMPONENTS ONLY) ---
const QuantifierReferenceGuide = React.lazy(() =>
  import("./quantifier/page").then((mod) => ({
    default: mod.default,
  }))
);
const QualifierReferenceGuide = React.lazy(() =>
  import("./qualifier/page").then((mod) => ({
    default: mod.default,
  }))
);
const ConjunctionLessonPage = React.lazy(() =>
  import("./conjunction_2/page").then((mod) => ({
    default: mod.default,
  }))
);
export default function A1A2Lessons() {
  const [showQuanti, setShowQuanti] = useState(false);
  const [showQuali, setShowQuali] = useState(false);
  const [showConj, setShowConj] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">A1 - A2 Lessons</h1>
      <p className="text-lg">
        Welcome to the A1 - A2 English lessons. Here you will find beginner-level materials to help you build a strong foundation in English grammar, vocabulary, and writing skills.
      </p>

      {/* ================= PARTS OF SPEECH ================= */}
      <div>
        {!showQuanti ? (
        <button
          onClick={() => setShowQuanti(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Quantifier
        </button>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setShowQuanti(false)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Lessons
          </button>

          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Parts of Speech…</div>}>
              <QuantifierReferenceGuide />
            </Suspense>
          </div>
        </div>
      )}
      </div>
       {/* ================= Qualifier ================= */}
      <div>
        {!showQuali ? (
        <button 
          onClick={() => setShowQuali(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >   
          View: Qualifier
        </button>
      ) : (
        <div className="mt-6">

          <button
            onClick={() => setShowQuali(false)}
            className="mb-4 text-sm text-gray-600 hover:underline"
          >
            ← Back to Lessons
          </button>
          <div className="bg-white rounded-lg shadow p-4">
            <Suspense fallback={<div>Loading Qualifier…</div>}>
              <QualifierReferenceGuide />
            </Suspense>
          </div>
        </div>
      )}
      </div>
       {/* ================= Conjunction ================= */}
      <div>
        {!showConj ? (
        <button
          onClick={() => setShowConj(true)}
          className="mt-4 ml-6 text-blue-600 hover:underline"
        >
          View: Conjunction
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
            <Suspense fallback={<div>Loading Conjunction…</div>}>
              <ConjunctionLessonPage />
            </Suspense>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}