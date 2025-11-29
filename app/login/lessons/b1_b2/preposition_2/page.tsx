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
            Focus on advanced usage, fixed expressions, and formal collocations for fluent, academic language.
          </p>
        </header>

        {/* CONTENT */}
        <div className="space-y-16">
          {/* 1. TIME */}
          <section className="section-card border-l-8 border-l-sky-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-sky-700">
              <span className="mr-3 text-3xl">⏳</span> 1. Advanced Prepositional Phrases
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              These fixed phrases express complex relationships and are essential for academic and formal communication.
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Phrase</th>
                    <th>Meaning / Function </th>
                    <th>Example Sentence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-base text-gray-700">                 
                    <tr ><td><span className="font-semibold text-sky-600">in terms of</span></td><td>concerning / regarding</td><td><span className="preposition-highlight">In terms of</span> cost, this plan is better.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">in favor of</span></td><td>supporting</td><td>They voted <span className="preposition-highlight">in favor of</span> the new policy.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">in light of</span></td><td>considering / because of (formal)</td><td><span className="preposition-highlight">In light of</span> recent events, we changed our plan.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">by means of</span></td><td>using / through</td><td>Data was collected <span className="preposition-highlight">by means of</span> interviews.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">in accordance with</span></td><td>following / according to (formal)</td><td>Actions must be <span className="preposition-highlight">in accordance with</span> the law.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">on behalf of</span></td><td>representing someone</td><td>She spoke <span className="preposition-highlight">on behalf of</span> the committee.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">with regard to</span></td><td>concerning (formal)</td><td><span className="preposition-highlight">With regard to</span> your question, we’ll respond soon.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">in contrast to</span></td><td>showing difference</td><td><span className="preposition-highlight">In contrast to</span> her brother, she’s very quiet.</td></tr>
                    <tr ><td><span className="font-semibold text-sky-600">in addition to</span></td><td>plus / as well as</td><td><span className="preposition-highlight">In addition to</span> teaching, he writes books.</td></tr>                 
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. PLACE */}
          <section className="section-card border-l-8 border-l-emerald-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-emerald-700">
              <span className="mr-3 text-3xl">🗺️</span> 2. Prepositions in Academic Collocations
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              These verb/adjective + preposition pairings are common in reports, essays, and journal articles.
            </p>
                

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Collocation</th>
                    <th></th>Context
                    <th>Example Sentence</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                    <tr ><td><span className="font-semibold text-emerald-600">concerned with</span></td><td>topic focus</td><td>This paper is <span className="preposition-highlight">concerned with</span> climate change policy.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">reliant on</span></td><td>dependence</td><td>The system is <span className="preposition-highlight">reliant on</span> user input.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">associated with</span></td><td>connection / link</td><td>Stress is often <span className="preposition-highlight">associated with</span> lack of sleep.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">characterized by</span></td><td>defining feature</td><td>The process is <span className="preposition-highlight">characterized by</span> rapid growth.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">based on</span></td><td>foundation / source</td><td>The conclusion is <span className="preposition-highlight">based on</span> evidence.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">subject to</span></td><td>susceptible to change</td><td>Prices are <span className="preposition-highlight">subject to</span> change.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">regarded as</span></td><td>considered to be</td><td>He is <span className="preposition-highlight">regarded as</span> a pioneer in his field.</td></tr>
                    <tr ><td><span className="font-semibold text-emerald-600">responsible for</span></td><td>accountable for</td><td>She is <span className="preposition-highlight">responsible for</span> managing the project.</td></tr>
        
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. MOVEMENT */}
          <section className="section-card border-l-8 border-l-indigo-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-indigo-700">
              <span className="mr-3 text-3xl">➡️</span> 3. Subtle Distinction in Meaning
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              Differentiating pairs of prepositions is key to high-level accuracy and fluency.
            </p>
                

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Preposition</th>
                    <th>Difference</th>
                    <th>Example 1 (A)</th>\
                    <th>Example 2 (B)</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                   <tr className="hover:bg-blue-50">
                                <td><span className="font-semibold text-indigo-600">by vs until</span></td>
                                <td>"by" = before deadline, "until" = up to that time</td>
                                <td>Finish it <span className="preposition-highlight">by</span> Friday. (Action must be completed)</td>
                                <td>Wait <span className="preposition-highlight">until</span> Friday. (Action starts after this time)</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                                <td><span className="font-semibold text-indigo-600">in vs within</span></td>
                                <td>"in" = exact time of completion; "within" = before the period ends</td>
                                <td>You’ll get results <span className="preposition-highlight">in</span> 5 days. (Exactly 5 days from now)</td>
                                <td>We’ll reply <span className="preposition-highlight">within</span> 5 days. (At some point inside the 5-day window)</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                                <td><span className="font-semibold text-indigo-600">between vs among</span></td>
                                <td>"between" = two things; "among" = more than two</td>
                                <td>Decide <span className="preposition-highlight">between</span> two choices.</td>
                                <td>Discuss it <span className="preposition-highlight">among</span> friends.</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                                <td><span className="font-semibold text-indigo-600">on vs about</span></td>
                                <td>"on" = specific, formal topic; "about" = general, informal</td>
                                <td>A lecture <span className="preposition-highlight">on</span> climate policy.</td>
                                <td>We talked <span className="preposition-highlight">about</span> life.</td>
                            </tr>
                            <tr className="hover:bg-blue-50">
                                <td><span className="font-semibold text-indigo-600">over vs above</span></td>
                                <td>"over" = movement/covering; "above" = simply higher level</td>
                                <td>A bridge <span className="preposition-highlight">over</span> the river.</td>
                                <td>A plane <span className="preposition-highlight">above</span> the clouds.</td>
                            </tr>
             

       
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. ABSTRACT */}
          <section className="section-card border-l-8 border-l-rose-500 bg-white p-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center text-rose-700">
              <span className="mr-3 text-3xl">💡</span> 4. Prepositions After Adjectives
              Contexts
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              Accurate adjective + preposition collocations are a strong indicator of fluency.
            </p>


            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="lesson-table w-full border-collapse">
                <thead>
                  <tr>
                    <th>Adjective</th>
                    <th>Preposition</th>
                    <th>Example Sentence</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">capable</span></td><td><span className="font-semibold text-rose-600">of</span></td><td>She’s <span className="preposition-highlight">capable of</span> great achievements.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">critical</span></td><td><span className="font-semibold text-rose-600">of</span></td><td>He’s often <span className="preposition-highlight">critical of</span> the government.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">familiar</span></td><td><span className="font-semibold text-rose-600">with</span></td><td>I’m <span className="preposition-highlight">familiar with</span> that concept.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">essential</span></td><td><span className="font-semibold text-rose-600">to/for</span></td><td>Water is <span className="preposition-highlight">essential to</span> life.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">dependent</span></td><td><span className="font-semibold text-rose-600">on</span></td><td>The results are <span className="preposition-highlight">dependent on</span> temperature.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">opposed</span></td><td><span className="font-semibold text-rose-600">to</span></td><td>Many are <span className="preposition-highlight">opposed to</span> the new tax.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">similar</span></td><td><span className="font-semibold text-rose-600">to</span></td><td>This situation is <span className="preposition-highlight">similar to</span> last year’s case.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">involved</span></td><td><span className="font-semibold text-rose-600">in</span></td><td>He’s <span className="preposition-highlight">involved in</span> a research project.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">committed</span></td><td><span className="font-semibold text-rose-600">to</span></td><td>They’re <span className="preposition-highlight">committed to</span> reducing emissions.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="font-semibold text-rose-600">good/bad</span></td><td><span className="font-semibold text-rose-600">at</span></td><td>She’s <span className="preposition-highlight">good at</span> solving problems.</td></tr>
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
