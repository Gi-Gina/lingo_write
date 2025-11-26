"use client";

import QualifierReferenceGuide from "./qualifier/page";
import QuantifierReferenceGuide from "./quantifier/page";

export default function B1B2Lessons() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">C1 - C2 Lessons</h1>
      <p className="text-lg">
        Welcome to the C1 - C2 English lessons. Here you will find advanced-level materials to help you refine your English grammar, vocabulary, and writing skills to a proficient level.
      </p>
      <QualifierReferenceGuide />
      <QuantifierReferenceGuide />
    </div>
  );
}