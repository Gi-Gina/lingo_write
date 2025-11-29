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

        .fade-in {
        animation: fadeIn 0.5s ease-out;
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
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
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

const ConjunctionLesson: React.FC = () => {
  return (
    <div className="p-4 sm:p-8">
      <CustomStyles />

      <div>
        {/* HEADER */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                Conjunctions Mastery Class
            </h1>
            <p className="text-xl text-gray-500 font-light">
                Learn the building blocks of sentence structure: Coordinating, Subordinating, and Correlative Conjunctions.
            </p>
        </header>

        {/* CONTENT */}
        <div className="space-y-16">

            {/*-- 1. What Are Conjunctions? -->*/}
            <section className="section-card border bg-white p-6 rounded-xl  border-stone-200 fade-in">
                <h2 className="text-2xl font-bold  mb-6 flex items-center text-gray-700">
                    <span className="mr-3 text-2xl">🧩</span> 1. What Are Conjunctions?
                </h2>
                <p className="text-gray-600 mb-4 text-lg">
                    A <span className="conjunction-term">conjunction</span> is a word used to connect words, phrases, or clauses. Think of them as the <span className="conjunction-term">“glue”</span> that holds sentences and ideas together.
                </p>
                {/* classNameName corrected to className */}
                <p className="text-gray-600 text-lg">
                    <span className="conjunction-term text-gray-800 font-extrabold">Examples:</span> and, but, or, because, so, although, while, since, etc.
                </p>
            </section>

            {/* 2. Types of Conjunctions */}
            {/* class corrected to className */}
            <section className="section-card border bg-white p-6 rounded-xl  border-stone-200 fade-in">
                <h2 className="text-2xl font-bold  mb-6 flex items-center text-blue-700">
                    {/* class corrected to className */}
                    <span className="mr-3 text-2xl">🪴</span> 2. Types of Conjunctions
                </h2>
                
                {/* 2A. Coordinating Conjunctions */}
                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">🅐 Coordinating Conjunctions (FANBOYS)</h3>
                <p className="text-gray-600 mb-4">
                    These join words, phrases, or independent clauses (complete ideas) of equal importance. The acronym <span className="conjunction-term font-extrabold">FANBOYS</span> is your key: <span className="conjunction-term font-extrabold">F</span>or, <span className="conjunction-term font-extrabold">A</span>nd, <span className="conjunction-term font-extrabold">N</span>or, <span className="conjunction-term font-extrabold">B</span>ut, <span className="conjunction-term font-extrabold">O</span>r, <span className="conjunction-term font-extrabold">Y</span>et, <span className="conjunction-term font-extrabold">S</span>o.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                    <table className="lesson-table w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="w-1/5">Conjunction</th>
                                <th className="w-2/5">Function</th>
                                <th className="w-2/5">Example Sentence</th>
                            </tr>
                        </thead>
                        {/* class corrected to className */}
                        <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                            {/* class corrected to className */}
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">for</span></td><td>gives reason (formal)</td><td>She stayed home, <span className="conjunction-highlight">for</span> she was tired.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">and</span></td><td>adds information</td><td>I bought apples <span className="conjunction-highlight">and</span> oranges.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">nor</span></td><td>negative addition</td><td>He didn’t call, <span className="conjunction-highlight">nor</span> did he text.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">but</span></td><td>contrasts ideas</td><td>I like tea, <span className="conjunction-highlight">but</span> not coffee.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">or</span></td><td>offers a choice</td><td>Would you like tea <span className="conjunction-highlight">or</span> coffee?</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">yet</span></td><td>contrast (surprising)</td><td>It’s cold, <span className="conjunction-highlight">yet</span> she’s not wearing a coat.</td></tr>
                            {/* classNameName corrected to className */}
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">so</span></td><td>shows result</td><td>It was raining, <span className="conjunction-highlight">so</span> we stayed inside.</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="tip-box">
                    <span className="conjunction-term font-extrabold text-green-700">✅ Tip:</span> Use a comma before the conjunction if it joins two complete sentences (Independent Clauses). <br/> Example: I was tired, <span className="conjunction-highlight">so</span> I went to bed early.
                </div>

                {/* 2B. Subordinating Conjunctions */}
                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">🅑 Subordinating Conjunctions</h3>
                <p className="text-gray-600 mb-4">
                    These join an independent clause (main idea) and a dependent clause (supporting idea). They show the relationship between the two clauses (time, reason, condition, etc.).
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                    <table className="lesson-table w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="w-1/5">Conjunction</th>
                                <th className="w-2/5">Meaning</th>
                                <th className="w-2/5">Example Sentence</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">because</span></td><td>reason</td><td>I went home <span className="conjunction-highlight">because</span> I was sick.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">although</span></td><td>contrast</td><td><span className="conjunction-highlight">Although</span> it rained, we went out.</td></tr>
                            {/* class corrected to className */}
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">since</span></td><td>time or reason</td><td><span className="conjunction-highlight">Since</span> you’re here, let’s start.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">while</span></td><td>time or contrast</td><td><span className="conjunction-highlight">While</span> I was cooking, he cleaned.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">if / unless</span></td><td>condition</td><td>I’ll go <span className="conjunction-highlight">if</span> it’s sunny. / I won’t go <span className="conjunction-highlight">unless</span> it’s sunny.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">after / before</span></td><td>time sequence</td><td>We’ll eat <span className="conjunction-highlight">after</span> he arrives.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">even though</span></td><td>strong contrast</td><td><span className="conjunction-highlight">Even though</span> he’s rich, he’s not happy.</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="tip-box">
                    <span className="conjunction-term font-extrabold text-green-700">✅ Structure Tip:</span> If the subordinate clause comes first, use a comma. If the main clause comes first, no comma is needed.<br/> 
                    Example (Comma): <span className="conjunction-highlight">Although</span> it was late, they kept talking.<br/>
                    Example (No Comma): They kept talking <span className="conjunction-highlight">although</span> it was late.
                </div>
                
                {/* 2C. Correlative Conjunctions */}
                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">🅒 Correlative Conjunctions</h3>
                <p className="text-gray-600 mb-4">
                    These work in <span className="conjunction-term">pairs</span> to connect two equal ideas.
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                    {/* class corrected to className */}
                    <table className="lesson-table w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="w-1/5">Pair</th>
                                <th className="w-4/5">Example Sentence</th>
                            </tr>
                        </thead>
                        {/* classNameName corrected to className */}
                        <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">both … and</span></td><td><span className="conjunction-highlight">Both</span> my sister <span className="conjunction-highlight">and</span> I love swimming.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">either … or</span></td><td>You can have <span className="conjunction-highlight">either</span> tea <span className="conjunction-highlight">or</span> coffee.</td></tr>
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">neither … nor</span></td><td><span className="conjunction-highlight">Neither</span> my dad <span className="conjunction-highlight">nor</span> my mom drives.</td></tr>
                            {/* classNameNameName corrected to className */}
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">not only … but also</span></td><td>She’s <span className="conjunction-highlight">not only</span> smart <span className="conjunction-highlight">but also</span> kind.</td></tr>
                            {/* class corrected to className */}
                            <tr className="hover:bg-blue-50"><td><span className="conjunction-term">whether … or</span></td><td>I don’t know <span className="conjunction-highlight">whether</span> he’s coming <span className="conjunction-highlight">or</span> not.</td></tr>
                        </tbody>
                    </table>
                </div>
                {/* classNameNameNameName corrected to className */}
                <div className="tip-box">
                    <span className="conjunction-term font-extrabold text-green-700">✅ Tip (Verb Agreement):</span> With neither...nor and either...or, the verb must agree with the second subject.<br/> 
                    Example: <span className="conjunction-highlight">Neither</span> she <span className="conjunction-highlight">nor</span> her friends <strong className="text-green-800">are</strong> coming.
                </div>
            </section>

            {/* 3. Conjunctions by Function (UPDATED WITH ALL EXAMPLES) */}
            <section className="section-card border bg-white p-6 rounded-xl  border-stone-200 fade-in">
                <h2 className="text-2xl font-bold  mb-6 flex items-center text-purple-700">
                    <span className="mr-3 text-2xl">🎓</span> 3. Conjunctions by Function
                </h2>
                <p className="text-gray-600 mb-6 text-lg">Categorizing conjunctions helps you choose the right one to express a specific logical relationship.</p>
                
                <ul className="space-y-6 text-gray-700">
                    {/* classNameName corrected to className */}
                    <li className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-300">
                        <span className="conjunction-term text-purple-700 text-xl font-extrabold block mb-2">🪶 (a) Addition</span>
                        <ul className="space-y-2 ml-4 list-disc text-base">
                            <li><span className="conjunction-term font-extrabold">and</span>: I play guitar, <span className="conjunction-highlight">and</span> I sing too.</li>
                            <li><span className="conjunction-term font-extrabold">also</span>: She is studying physics; <span className="conjunction-highlight">also</span>, she volunteers at a hospital.</li>
                            <li><span className="conjunction-term font-extrabold">moreover</span> (B2): The forecast predicts heavy rain; <span className="conjunction-highlight">moreover</span>, there are strong winds expected.</li>
                            <li><span className="conjunction-term font-extrabold">besides</span>: Do you have any other questions <span className="conjunction-highlight">besides</span> the ones you wrote down?</li>
                            <li><span className="conjunction-term font-extrabold">in addition</span>: <span className="conjunction-highlight">In addition</span> to teaching, he writes books.</li>
                        </ul>
                    </li>
                    {/* classNameNameName corrected to className */}
                    <li className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-300">
                        {/* classNameName corrected to className */}
                        <span className="conjunction-term text-purple-700 text-xl font-extrabold block mb-2">⚡(b) Contrast</span>
                        {/* classNameName corrected to className */}
                        <ul className="space-y-2 ml-4 list-disc text-base">
                            <li><span className="conjunction-term font-extrabold">but</span>: I like dogs, <span className="conjunction-highlight">but</span> I’m allergic to them.</li>
                            <li><span className="conjunction-term font-extrabold">yet</span>: It was raining heavily, <span className="conjunction-highlight">yet</span> we still enjoyed the hike.</li>
                            <li><span className="conjunction-term font-extrabold">although</span>: <span className="conjunction-highlight">Although</span> it was late, they kept talking.</li>
                            <li><span className="conjunction-term font-extrabold">even though</span>: <span className="conjunction-highlight">Even though</span> he practiced for months, he was still nervous.</li>
                            <li><span className="conjunction-term font-extrabold">while</span>: <span className="conjunction-highlight">While</span> he prefers city life, his wife loves the countryside.</li>
                            <li><span className="conjunction-term font-extrabold">whereas</span>: The old model was cheap, <span className="conjunction-highlight">whereas</span> the new one is very expensive.</li>
                        </ul>
                    </li>
                    <li className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-300">
                        <span className="conjunction-term text-purple-700 text-xl font-extrabold block mb-2">💬 (c) Reason and Result</span>
                        <ul className="space-y-2 ml-4 list-disc text-base">
                            <li><span className="conjunction-term font-extrabold">because</span>: I was hungry <span className="conjunction-highlight">because</span> I skipped breakfast.</li>
                            <li><span className="conjunction-term font-extrabold">since</span>: <span className="conjunction-highlight">Since</span> you already know the answer, you can explain it.</li>
                            {/* class corrected to className */}
                            <li><span className="conjunction-term font-extrabold">so</span>: I was hungry, <span className="conjunction-highlight">so</span> I ate lunch.</li>
                            <li><span className="conjunction-term font-extrabold">therefore</span> (B2): The data was inconclusive; <span className="conjunction-highlight">therefore</span>, the experiment must be repeated.</li>
                        </ul>
                    </li>
                    <li className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-300">
                        <span className="conjunction-term text-purple-700 text-xl font-extrabold block mb-2">🕓 (d) Time</span>
                        {/* classNameName corrected to className */}
                        <ul className="space-y-2 ml-4 list-disc text-base">
                            <li><span className="conjunction-term font-extrabold">before</span>: Always check your work <span className="conjunction-highlight">before</span> you submit it.</li>
                            <li><span className="conjunction-term font-extrabold">after</span>: <span className="conjunction-highlight">After</span> I finish work, I’ll watch TV.</li>
                            <li><span className="conjunction-term font-extrabold">while</span>: I listened to music <span className="conjunction-highlight">while</span> I was cleaning.</li>
                            <li><span className="conjunction-term font-extrabold">as soon as</span>: Call me <span className="conjunction-highlight">as soon as</span> you get home.</li>
                            <li><span className="conjunction-term font-extrabold">until</span>: I waited <span className="conjunction-highlight">until</span> the rain stopped.</li>
                            <li><span className="conjunction-term font-extrabold">since</span>: I haven't seen him <span className="conjunction-highlight">since</span> we left school.</li>
                            <li><span className="conjunction-term font-extrabold">when</span>: <span className="conjunction-highlight">When</span> the bell rings, the class starts.</li>
                        </ul>
                    </li>
                    <li className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-300">
                        <span className="conjunction-term text-purple-700 text-xl font-extrabold block mb-2">🎯 (e) Condition</span>
                        <ul className="space-y-2 ml-4 list-disc text-base">
                            <li><span className="conjunction-term font-extrabold">if</span>: You can come <span className="conjunction-highlight">if</span> you finish your homework.</li>
                            {/* class corrected to className */}
                            <li><span className="conjunction-term font-extrabold">unless</span>: We won't go out <span className="conjunction-highlight">unless</span> the weather improves.</li>
                            <li><span className="conjunction-term font-extrabold">provided that</span> (B2): The loan will be approved <span className="conjunction-highlight">provided that</span> you meet all the requirements.</li>
                            {/* class corrected to className */}
                            <li><span className="conjunction-term font-extrabold">as long as</span>: You can borrow the car <span className="conjunction-highlight">as long as</span> you fill the tank.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            {/* 4. Common Mistakes & Fixes (Section number updated from 4 to 4) */}
            {/* class corrected to className */}
            <section className="section-card border bg-white p-6 rounded-xl  border-stone-200 fade-in">
                {/* class corrected to className */}
                <h2 className="text-2xl font-bold  mb-6 flex items-center text-red-700">
                    {/* class corrected to className */}
                    <span className="mr-3 text-2xl">❌</span> 4. Common Mistakes & Fixes
                </h2>
                {/* class corrected to className */}
                <p className="text-gray-600 mb-6 text-lg">Avoid these common errors to ensure your sentences are grammatically correct.</p>

                {/* class corrected to className */}
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                    {/* class corrected to className */}
                    <table className="lesson-table w-full border-collapse">
                        <thead>
                            <tr>
                                {/* class corrected to className */}
                                <th className="w-1/3">Mistake</th>
                                {/* class corrected to className */}
                                <th className="w-1/3">Correction</th>
                                {/* class corrected to className */}
                                <th className="w-1/3">Why</th>
                            </tr>
                        </thead>
                        {/* class corrected to className */}
                        <tbody className="divide-y divide-gray-50 text-base text-gray-700">
                            {/* class corrected to className */}
                            <tr className="hover:bg-red-50">
                                {/* class corrected to className */}
                                <td><span className="conjunction-term text-red-700 font-extrabold">Because</span> I was tired. I slept early.</td>
                                <td>I slept early <span className="conjunction-highlight">because</span> I was tired.</td>
                                <td>"Because" cannot start a full sentence unless followed by a main clause.</td>
                            </tr>
                            {/* class corrected to className */}
                            <tr className="hover:bg-red-50">
                                {/* class corrected to className */}
                                <td><span className="conjunction-term text-red-700 font-extrabold">Although</span> it rained <span className="conjunction-term text-red-700 font-extrabold">but</span> we went out.</td>
                                <td><span className="conjunction-highlight">Although</span> it rained, we went out.</td>
                                <td>Do not use "although" and "but" together. Use one or the other for contrast.</td>
                            </tr>
                            {/* class corrected to className */}
                            <tr className="hover:bg-red-50">
                                {/* class corrected to className */}
                                <td>I like cats, <span className="conjunction-term text-red-700 font-extrabold">and</span> dogs.</td>
                                <td>I like cats <span className="conjunction-highlight">and</span> dogs.</td>
                                <td>No comma before "and" when joining only two words or phrases (not two complete sentences).</td>
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

export default ConjunctionLesson;