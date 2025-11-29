"use client";

import React from "react";
// Removed the erroneous import "next/dist/shared/lib/head" and unused "import React from "react";"

const CustomStyles = () => (
    <style>
    {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
     
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
        }
        .lesson-card {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            background-color: white;
            border: 1px solid #e5e7eb;
        }
        .lesson-table th, .lesson-table td {
            padding: 14px 10px;
            text-align: left;
        }
        .lesson-table th {
            background-color: #f3f4f6;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.75rem;
            color: #1f2937;
            border-bottom: 2px solid #e5e7eb;
        }
        .section-card {
            border-left: 6px solid;
            border-radius: 8px;
            transition: all 0.3s ease-in-out;
            background-color: #ffffff;
        }
        .conjunction-highlight {
            font-weight: 700;
            color: #4f46e5; /* Indigo color for highlighting */
        }
        .academic-term {
            font-weight: 700;
            color: #059669; /* Green color for the conjunction/phrase itself */
        }
        .pro-tip-box {
            background-color: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 1rem;
            border-radius: 6px;
        }
    `}
    </style>
);

const ConjunctionLessonPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8">
            <CustomStyles />
           
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-indigo-900 mb-3 tracking-tight">
                        Conjunctions Mastery Class
                    </h1>
                    <p className="text-xl text-gray-500 font-light">
                        Master the formal linking expressions that ensure coherence, clarity, and precision in essays and reports.
                    </p>
                </header>

                {/* Lesson Content */}
                <div className="space-y-16">

                    {/* 1. What Are Academic Conjunctions? */}
                    <section className="section-card border-l-gray-500 p-6">
                        <h2 className="text-2xl font-bold  mb-6 flex items-center text-gray-700">
                            <span className="mr-3 text-2xl">🧩</span> 1. What Are Academic Conjunctions?
                        </h2>
                        <p className="text-gray-600 mb-4 text-lg">
                            <span className="academic-term">Academic conjunctions</span> (also called <strong>linking words, connectors</strong>, or <strong>transitions</strong>) are used to connect ideas logically in essays, reports, and research writing.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>They make writing <span className="academic-term">formal and cohesive</span>.</li>
                            <li>They help clearly show cause, contrast, sequence, and results.</li>
                            <li>They replace casual words like <span className="text-red-600 font-bold">and, but, so</span> with formal alternatives.</li>
                        </ul>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-sm font-semibold text-gray-700">Example Transformation:</p>
                            <p className="text-sm text-gray-500">Informal: I was tired, <span className="text-red-600 font-bold">so</span> I went to bed.</p>
                            <p className="text-sm text-gray-700">Academic: I was exhausted; <span className="conjunction-highlight">therefore</span>, I decided to rest.</p>
                        </div>
                    </section>

                    {/* 2. Types of Academic Conjunctions */}
                    <section className="section-card border-l-indigo-500 p-6">
                        <h2 className="text-2xl font-bold  mb-6 flex items-center text-indigo-700">
                            <span className="mr-3 text-2xl">🪴</span> 2. Types of Academic Conjunctions
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg"> 
                            The connectors below are categorized by the logical function they perform in a formal text.
                        </p>

                        {/* 2A. Addition */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">🅐 Addition (Adding Ideas or Evidence)</h3>
                        <p className="text-gray-600 mb-3">Use when adding or supporting information to strengthen your argument.</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">moreover, furthermore</span></td><td>The theory was well supported; <span className="conjunction-highlight">moreover</span>, the data was consistent.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">in addition, additionally</span></td><td><span className="conjunction-highlight">In addition</span>, previous research supports these findings.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">besides, what is more</span></td><td><span className="conjunction-highlight">Besides</span>, this method is cost-effective in the long run.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">not only … but also</span></td><td>The results were <span className="conjunction-highlight">not only</span> accurate <span className="conjunction-highlight">but also</span> reliable.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pro-tip-box">
                            <span className="academic-term font-extrabold text-blue-700">✅ Pro Tip:</span> <span className="text-red-600 font-bold">Also</span> and <span className="text-red-600 font-bold">besides</span> are often too casual; prefer <span className='academic-term'> moreover</span> and <span className='academic-term'>in addition </span> in formal academic writing.
                        </div>

                        {/* 2B. Contrast */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅑 Contrast (Opposite or Different Ideas)</h3>
                        <p className="text-gray-600 mb-3">Use when introducing a contradiction, a counter-argument, or a surprising difference.</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">however, nevertheless, nonetheless, yet</span></td><td>The data supports the claim; <span className="conjunction-highlight">however</span>, the sample size was small.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">although, even though</span></td><td><span className="conjunction-highlight">Although</span> the study was small, its results were significant.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">whereas, while</span></td><td>Urban areas expanded, <span className="conjunction-highlight">whereas</span> rural areas declined.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">on the other hand</span></td><td>Online learning is flexible. <span className="conjunction-highlight">On the other hand</span>, it reduces interaction.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">in contrast, conversely</span></td><td><span className="conjunction-highlight">In contrast</span>, male participants showed higher engagement.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pro-tip-box">
                            <span className="academic-term font-extrabold text-blue-700">✅ Note:</span> <span className="academic-term">However, whereas, although,</span> and <span className="academic-term">in contrast</span> are powerful tools to replace the common, simple <span className="text-red-600 font-bold">but</span>.
                        </div>

                        {/* 2C. Cause and Effect */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅒 Cause and Effect (Reason and Result)</h3>
                        <p className="text-gray-600 mb-3">Use to establish a logical relationship between an action (cause) and its outcome (effect).</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">therefore, thus, consequently, as a result</span></td><td>The policy failed; <span className="conjunction-highlight">therefore</span>, it was revised.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">hence, accordingly</span></td><td>Demand increased significantly; <span className="conjunction-highlight">hence</span>, prices rose across the board.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">because, since, as</span></td><td>The model failed <span className="conjunction-highlight">because</span> of poor data quality.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">due to, owing to</span></td><td>The project was delayed <span className="conjunction-highlight">due to</span> technical issues.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pro-tip-box">
                            <span className="academic-term font-extrabold text-blue-700">✅ Grammar Note:</span> <span className="text-red-600 font-bold">Due to</span> and <span className="text-red-600 font-bold">owing to</span> are typically used with a noun or noun phrase. <span className="text-red-600 font-bold">Because</span> and <span className="text-red-600 font-bold">since</span> link clauses (subject + verb).
                        </div>

                        {/* 2D. Comparison */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅓 Comparison (Similar Ideas or Parallels)</h3>
                        <p className="text-gray-600 mb-3">Use when showing that one idea is similar to or operates in the same way as another.</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">similarly, likewise</span></td><td><span className="conjunction-highlight">Similarly</span>, the second study found a positive correlation.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">in the same way</span></td><td><span className="conjunction-highlight">In the same way</span>, education affects income levels.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">just as</span></td><td><span className="conjunction-highlight">Just as</span> education improves opportunity, so does professional training.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 2E. Condition */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅔 Condition (If / Provided That)</h3>
                        <p className="text-gray-600 mb-3">Use to state the requirements or premises under which a conclusion is true.</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">provided that, on condition that</span></td><td>Access is granted <span className="conjunction-highlight">on condition that</span> users register.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">if, as long as</span></td><td>The results are valid <span className="conjunction-highlight">if</span> the data is accurate.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">in case</span></td><td>Keep the original receipts <span className="conjunction-highlight">in case</span> a refund is needed.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 2F. Purpose */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅕 Purpose (Why Something Happens)</h3>
                        <p className="text-gray-600 mb-3">Use to explain the intention or aim of an action.</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">in order to, for the purpose of</span></td><td>The design was improved <span className="conjunction-highlight">in order to</span> enhance efficiency.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">so that</span></td><td>The test was repeated <span className="conjunction-highlight">so that</span> results could be verified.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 2G. Time / Sequence */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅖 Time / Sequence (Ordering Ideas)</h3>
                        <p className="text-gray-600 mb-3">Use in reports or methodology sections to structure the steps taken in a clear order.</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">firstly, secondly, finally</span></td><td><span className="conjunction-highlight">Firstly</span>, the data was analyzed; <span className="conjunction-highlight">secondly</span>, it was compared.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">subsequently, afterwards</span></td><td>The experiment ended; <span className="conjunction-highlight">subsequently</span>, results were recorded.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">after, before</span></td><td><span className="conjunction-highlight">After</span> collecting data, researchers began the analysis.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 2H. Concession */}
                        <h3 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">🅗 Concession (Unexpected Contrast)</h3>
                        <p className="text-gray-600 mb-3">Use to acknowledge a limitation while still asserting your main point (a common academic technique).</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                            <table className="lesson-table w-full border-collapse">
                                <thead><tr><th>Conjunction / Phrase</th><th>Example</th></tr></thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">despite, in spite of</span></td><td><span className="conjunction-highlight">Despite</span> limited funding, the project succeeded.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">nevertheless, nonetheless</span></td><td>The theory lacks evidence; <span className="conjunction-highlight">nevertheless</span>, it remains influential.</td></tr>
                                    <tr className="hover:bg-indigo-50"><td><span className="academic-term">while, whereas</span></td><td><span className="conjunction-highlight">While</span> most studies support this view, others disagree.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pro-tip-box">
                            <span className="academic-term font-extrabold text-blue-700">✅ Key Distinction:</span> <span className="academic-term">Despite / In spite of</span> requires a noun phrase. <span className="academic-term">Although / Even though</span> requires a full clause (subject + verb).
                        </div>
                    </section>

                    {/* 3. Using Conjunctions Correctly */}
                    <section className="section-card border-l-green-500 p-6">
                        <h2 className="text-2xl font-bold  mb-6 flex items-center text-green-700">
                            <span className="mr-3 text-2xl">🧠</span> 3. Using Conjunctions Correctly
                        </h2>
                        <div className="space-y-6">
                            
                            <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-300">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">✅ a) Punctuation Rules (The Semicolon)</h3>
                                <p className="text-gray-700">
                                    Use a semicolon (;) to connect two complete sentences when using conjunctive adverbs (<span className="academic-term">however, therefore, moreover</span>).
                                </p>
                                <p className="text-sm italic text-gray-500 mt-2">
                                    Example: The sample was small<span className="font-extrabold text-red-600">;</span> <span className="conjunction-highlight">however,</span> the results were valid.
                                </p>
                            </div>

                            <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-300">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">✅ b) Avoid Overuse</h3>
                                <p className="text-gray-700">
                                    Do not start every sentence with <span className="academic-term">However</span> or <span className="academic-term">Therefore</span>. Use a variety of structures to maintain flow and sophistication, mixing these with subordinators like <span className="academic-term">Although, Since,</span> and <span className="academic-term">Whereas</span>.
                                </p>
                            </div>

                            <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-300">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">✅ c) Position Variety</h3>
                                <p className="text-gray-700">
                                    Many academic connectors can be moved within the clause (especially <span className="academic-term">however</span> and <span className="academic-term">therefore</span>), provided you use the correct commas.
                                </p>
                                <p className="text-sm italic text-gray-500 mt-2">
                                    Initial: <span className="conjunction-highlight">However,</span> this was not the case.<br/>
                                    Medial: This was not the case<span className="font-extrabold text-red-600">,</span> <span className="conjunction-highlight">however,</span> for the control group.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Common Mistakes */}
                    <section className="section-card border-l-red-500 p-6">
                        <h2 className="text-2xl font-bold  mb-6 flex items-center text-red-700">
                            <span className="mr-3 text-2xl">❌</span> 4. Common Mistakes
                        </h2>
                        <p className="text-gray-600 mb-6 text-lg">Avoid these errors that reduce the sophistication and accuracy of your formal writing.</p>

                        <div className="overflow-x-auto rounded-xl border border-gray-100">
                            <table className="lesson-table w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="w-1/3">Mistake</th>
                                        <th className="w-1/3">Correction</th>
                                        <th className="w-1/3">Explanation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                                    <tr className="hover:bg-red-50">
                                        <td><span className="academic-term text-red-700 font-extrabold">Although</span> it rained <span className="academic-term text-red-700 font-extrabold">but</span> we went out.</td>
                                        <td><span className="conjunction-highlight">Although</span> it rained, we went out.</td>
                                        <td>Do not use <span className="academic-term">Although</span> and <span className="academic-term">but</span> together. Choose one or the other.</td>
                                    </tr>
                                    <tr className="hover:bg-red-50">
                                        <td><span className="academic-term text-red-700 font-extrabold">Because of he was late,</span> we missed the bus.</td>
                                        <td><span className="conjunction-highlight">Because he was late</span>… / <span className="conjunction-highlight">Due to his lateness</span>…</td>
                                        <td><span className="academic-term">Because of</span> needs a noun or noun phrase, not a clause (subject + verb).</td>
                                    </tr>
                                    <tr className="hover:bg-red-50">
                                        <td>It was raining<span className="font-extrabold text-red-700">. However</span> I forgot my umbrella.</td>
                                        <td>It was raining<span className="font-extrabold text-red-600">; however,</span> I forgot my umbrella.</td>
                                        <td><span className="academic-term">However</span> is a conjunctive adverb. It needs a semicolon or a period before it, and a comma after it.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
           
        </div>
    );
}
export default ConjunctionLessonPage;