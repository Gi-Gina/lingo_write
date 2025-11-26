"use client";

import React from "react";

// --- Custom Styles injected into <style> tag ---
const CustomStyles = () => (
  <style>
    {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        }

        .lesson-card {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            background-color: white;
        }

        .lesson-table th, .lesson-table td {
            padding: 14px 10px;
            text-align: left;
        }

        .lesson-table th {
            background-color: #f0f9ff;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.75rem;
            color: #0c4a6e;
            border-bottom: 2px solid #e0f2fe;
        }

        .section-card {
            border-radius: 1rem;
            transition: all 0.3s ease-in-out;
        }

        .section-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .preposition-highlight {
            font-weight: 700;
            color: #075985;
        }
    `}
  </style>
);

const PrepositionsLesson: React.FC = () => {
  return (
    <div className="p-4 sm:p-8">
      <CustomStyles />

      <div>
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
            Prepositions Mastery Class
          </h1>
          <p className="text-xl text-gray-500 font-light">
            Let’s explore how prepositions change meaning and context with
            vibrant examples.
          </p>
        </header>

        {/* CONTENT */}
        <div className="space-y-16">
          {/* 1. TIME */}
          <section className="section-card border-l-8 border-l-sky-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-sky-700">
              <span className="mr-3 text-3xl">⏳</span> 1. Prepositions of Time
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              These show{" "}
              <span className="font-extrabold text-sky-700">when</span>{" "}
              something happens.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Preposition</th>
                    <th>Usage</th>
                    <th>Example Sentence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">at</span>
                    </td>
                    <td>exact time/holiday</td>
                    <td>
                      We start class <span className="preposition-highlight">at</span> 9 a.m.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">on</span>
                    </td>
                    <td>specific day/date</td>
                    <td>
                      The meeting is <span className="preposition-highlight">on</span> Monday.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">in</span>
                    </td>
                    <td>months/years</td>
                    <td>
                      She was born <span className="preposition-highlight">in</span> 2001.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">during</span>
                    </td>
                    <td>within a period</td>
                    <td>
                      Don’t talk <span className="preposition-highlight">during</span> the show.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">by</span>
                    </td>
                    <td>deadline</td>
                    <td>
                      Submit it <span className="preposition-highlight">by</span> 11 p.m.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">for</span>
                    </td>
                    <td>duration</td>
                    <td>
                      I lived there <span className="preposition-highlight">for</span> two years.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">since</span>
                    </td>
                    <td>starting point</td>
                    <td>
                      He’s been here <span className="preposition-highlight">since</span> 2019.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-sky-600">until</span>
                    </td>
                    <td>up to a time</td>
                    <td>
                      Wait <span className="preposition-highlight">until</span> I call you.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. PLACE */}
          <section className="section-card border-l-8 border-l-emerald-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-emerald-700">
              <span className="mr-3 text-3xl">🗺️</span> 2. Prepositions of Place
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              These show{" "}
              <span className="font-extrabold text-emerald-700">where</span> something is.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Preposition</th>
                    <th>Usage</th>
                    <th>Example Sentence</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">at</span>
                    </td>
                    <td>specific point</td>
                    <td>
                      I’ll meet you <span className="preposition-highlight">at</span> the door.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">in</span>
                    </td>
                    <td>inside an area</td>
                    <td>
                      The keys are <span className="preposition-highlight">in</span> my bag.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">on</span>
                    </td>
                    <td>surface</td>
                    <td>
                      The cat is <span className="preposition-highlight">on</span> the table.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">between</span>
                    </td>
                    <td>two points</td>
                    <td>
                      She sat <span className="preposition-highlight">between</span> us.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">among</span>
                    </td>
                    <td>group of 3+</td>
                    <td>
                      He was <span className="preposition-highlight">among</span> friends.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">near</span>
                    </td>
                    <td>close to</td>
                    <td>
                      My house is <span className="preposition-highlight">near</span> the park.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">above</span>
                    </td>
                    <td>higher</td>
                    <td>
                      The light is <span className="preposition-highlight">above</span> the table.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-emerald-600">below</span>
                    </td>
                    <td>lower</td>
                    <td>
                      We live <span className="preposition-highlight">below</span> them.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. MOVEMENT */}
          <section className="section-card border-l-8 border-l-indigo-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-indigo-700">
              <span className="mr-3 text-3xl">➡️</span> 3. Prepositions of Movement
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              These show{" "}
              <span className="font-extrabold text-indigo-700">direction</span>.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Preposition</th>
                    <th>Usage</th>
                    <th>Example Sentence</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">to</span>
                    </td>
                    <td>towards</td>
                    <td>
                      She walked <span className="preposition-highlight">to</span> school.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">into</span>
                    </td>
                    <td>entering</td>
                    <td>
                      He went <span className="preposition-highlight">into</span> the room.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">onto</span>
                    </td>
                    <td>moving to a surface</td>
                    <td>
                      The dog jumped <span className="preposition-highlight">onto</span> the bed.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">from</span>
                    </td>
                    <td>starting point</td>
                    <td>
                      She came <span className="preposition-highlight">from</span> London.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">through</span>
                    </td>
                    <td>across a space</td>
                    <td>
                      We walked <span className="preposition-highlight">through</span> the forest.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">across</span>
                    </td>
                    <td>one side → other</td>
                    <td>
                      He ran <span className="preposition-highlight">across</span> the field.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">towards</span>
                    </td>
                    <td>in the direction of</td>
                    <td>
                      They moved <span className="preposition-highlight">towards</span> the exit.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-indigo-600">past</span>
                    </td>
                    <td>beyond</td>
                    <td>
                      We drove <span className="preposition-highlight">past</span> the museum.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. ABSTRACT */}
          <section className="section-card border-l-8 border-l-rose-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-rose-700">
              <span className="mr-3 text-3xl">💡</span> 4. Prepositions in Abstract
              Contexts
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              These describe{" "}
              <span className="font-extrabold text-rose-700">ideas,
              relationships, and states</span>.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Preposition</th>
                    <th>Meaning</th>
                    <th>Example Sentence</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">about</span>
                    </td>
                    <td>topic/subject</td>
                    <td>
                      We talked <span className="preposition-highlight">about</span> the plan.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">for</span>
                    </td>
                    <td>benefit/purpose</td>
                    <td>
                      This gift is <span className="preposition-highlight">for</span> you.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">with</span>
                    </td>
                    <td>agreement/association</td>
                    <td>
                      I agree <span className="preposition-highlight">with</span> you.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">of</span>
                    </td>
                    <td>belonging/relationship</td>
                    <td>
                      The roof <span className="preposition-highlight">of</span> the house.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">by</span>
                    </td>
                    <td>method/agent</td>
                    <td>
                      The book was written <span className="preposition-highlight">by</span> her.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">without</span>
                    </td>
                    <td>absence</td>
                    <td>
                      She left <span className="preposition-highlight">without</span> saying
                      goodbye.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">in</span>
                    </td>
                    <td>state/condition</td>
                    <td>
                      They are <span className="preposition-highlight">in</span> trouble.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">under</span>
                    </td>
                    <td>pressure/control</td>
                    <td>
                      He is <span className="preposition-highlight">under</span> stress.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">over</span>
                    </td>
                    <td>topic/disagreement</td>
                    <td>
                      They argued <span className="preposition-highlight">over</span> money.
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span className="font-semibold text-rose-600">against</span>
                    </td>
                    <td>opposition</td>
                    <td>
                      I’m <span className="preposition-highlight">against</span> the idea.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrepositionsLesson;
