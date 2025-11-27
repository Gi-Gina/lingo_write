"use client";

import React, { useState, useEffect } from 'react';

// --- STYLES (Translated from the <style> block and injected) ---
const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
    
    @media (max-width: 640px) {
    .lesson-table thead { display: none; }
    .lesson-table td { display: block; width: 100%; }
    .lesson-table td::before { content: attr(data-label); font-weight: bold; display: block; }
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: #eef2f5;
    }

    .lesson-card {
        background-color: #ffffff;
        border-radius: 1rem;
        /* Removed the general 'border: 1px solid #e0e7ff;' from CSS
           to allow Tailwind classes to control all 4 borders without conflict. */
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
                    0 2px 4px -2px rgba(0, 0, 0, 0.03);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-left-width: 6px;

    }


    .lesson-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1),
                    0 8px 10px -6px rgba(0, 0, 0, 0.05);
    }

    .content-section {
        animation: fadeIn 0.4s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Button base */
    .primary-btn {
        transition: all 0.3s ease;
    }

    /* Table styling */
    .lesson-table th, .lesson-table td {
        padding: 14px 16px;
        text-align: left;
        border-bottom: 1px solid #f3f4f6;
    }
    .lesson-table th {
        background-color: #f7f8fc;
        font-size: 0.75rem;
        font-weight: 700;
        color: #4b5563;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    .lesson-table tbody tr:nth-child(even) {
        background-color: #fafafa;
    }
    .lesson-table tbody tr:hover {
        background-color: #eff6ff;
    }
    .lesson-table strong {
        color: #1d4ed8;
    }
    .lesson-table code {
        background-color: #e0e7ff;
        color: #4338ca;
        font-weight: 600;
        padding: 2px 6px;
        border-radius: 4px;
    }
    /* Added for absolute adjectives */
    .line-through-red {
        text-decoration: line-through;
        color: #ef4444; /* red-500 */
    }
    /* Reduce padding on all lesson content boxes */
    .p-6 {
        padding: 1rem !important;
    }

    /* Reduce table cell spacing */
    .lesson-table th,
    .lesson-table td {
        padding: 6px 10px !important;
    }

    /* Reduce spacing between items */
    .space-y-6 > * + * {
        margin-top: 1rem !important;
    }

    .space-y-2 > * + * {
        margin-top: 0.3rem !important;
    }

    /* Make paragraphs more compact */
    .lesson-content p {
        margin-bottom: 0.75rem !important;
    }

    /* Make headings smaller & tighter */
    .lesson-content h3 {
        margin-bottom: 0.4rem !important;
    }

    /* Make code blocks compact */
    .lesson-content code {
        padding: 8px !important;
        font-size: 0.95rem !important;
    }

    /* Reduce table heading height */
    .lesson-table th {
        font-size: 0.95rem !important;
    }

    /* Reduce general spacing */
    .lesson-content div {
        margin-bottom: 0.75rem !important;
    }
`;

// --- DATA STRUCTURES (Translated from the <script> block) ---
type LessonId = 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6' | 'l7' | 'l8' | 'l9' | 'l10';

interface Lesson {
    nav: string;
    title: string;
    summary: string;
    html: string;
}

const lessonColors: Record<LessonId, string> = {
    "l1": "blue",
    "l2": "purple",
    "l3": "green",
    "l4": "red",
    "l5": "cyan",
    "l6": "indigo",
    "l7": "yellow",
    "l8": "pink",
    "l9": "indigo",
    "l10": "teal",
};

const colorShades: Record<string, { text: string; border: string; bg: string; border_light: string }> = {
    "indigo": { text: "text-indigo-700", border: "border-indigo-500", bg: "bg-indigo-50", border_light: "border-indigo-200" },
    "purple": { text: "text-purple-700", border: "border-purple-500", bg: "bg-purple-50", border_light: "border-purple-200" },
    "green": { text: "text-green-700", border: "border-green-500", bg: "bg-green-50", border_light: "border-green-200" },
    "pink": { text: "text-pink-700", border: "border-pink-500", bg: "bg-pink-50", border_light: "border-pink-200" },
    "cyan": { text: "text-cyan-700", border: "border-cyan-500", bg: "bg-cyan-50", border_light: "border-cyan-200" },
    "orange": { text: "text-orange-700", border: "border-orange-500", bg: "bg-orange-50", border_light: "border-orange-200" },
    "yellow": { text: "text-yellow-700", border: "border-yellow-500", bg: "bg-yellow-50", border_light: "border-yellow-200" },
    "red": { text: "text-red-700", border: "border-red-500", bg: "bg-red-50", border_light: "border-red-200" },
    "blue": { text: "text-blue-700", border: "border-blue-500", bg: "bg-blue-50", border_light: "border-blue-200"},
    "teal": { text: "text-teal-700", border: "border-teal-500", bg: "bg-teal-50", border_light: "border-teal-200"}
};

// Helper function to replicate the string replacement logic for raw HTML strings
// This is critical for maintaining the correct color in the detail view content.
const replaceColorClasses = (html: string, lessonColor: string) => {
    const shades = colorShades[lessonColor];
    if (!shades) return html;
    
    let result = html;
    
    // Default text colors used in the raw HTML template
    const defaultTexts = ["text-indigo-700", "text-purple-700", "text-green-700", "text-pink-700", "text-cyan-700", "text-orange-700", "text-yellow-700", "text-red-700", "text-blue-700", "text-teal-700"];
    defaultTexts.forEach(defaultText => {
        result = result.replace(new RegExp(defaultText, 'g'), shades.text);
    });

    // Default border colors
    const defaultBorders = ["border-indigo-500", "border-purple-500", "border-green-500", "border-pink-500", "border-cyan-500", "border-orange-500", "border-yellow-500", "border-red-500", "border-blue-500", "border-teal-500"];
    defaultBorders.forEach(defaultBorder => {
        result = result.replace(new RegExp(defaultBorder, 'g'), shades.border);
    });
    
    // Default background and light border colors (used for highlight boxes)
    const defaultLightClasses = [
        { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-800" },
        { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800" },
        { bg: "bg-green-50", border: "border-green-200", text: "text-green-800" },
        { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-800" },
        { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-800" },
        { bg: "bg-red-50", border: "border-red-200", text: "text-red-800" },
        { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-800" },
        { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800" },
    ];
    
    // Replace all default light classes with the lesson's target light classes
    defaultLightClasses.forEach(defaultClass => {
        result = result.replace(new RegExp(defaultClass.bg, 'g'), shades.bg);
        result = result.replace(new RegExp(defaultClass.border, 'g'), shades.border_light);
        result = result.replace(new RegExp(defaultClass.text, 'g'), shades.text.replace('700', '800'));
    });

    return result;
};



 const lessonContent: Record<string, Lesson> = {
    // Lesson 1: Definition, Position, and General Functions (The Foundation)
    "l1": {
        nav: "1. Definition & Position",
        title: "Lesson 1: Adverb Definition and Basic Placement",
        summary: "Understand the core function of adverbs (modifying verbs, adjectives, or other adverbs) and their three primary positions in a sentence.",
        html: `
            <p class="text-lg text-gray-700 mb-6">An <strong>adverb</strong> modifies a <strong>verb</strong> (how, when, where), an <strong>adjective</strong> (to what extent), or <strong>another adverb</strong>. They are highly flexible in placement.</p>
            <div class="space-y-6">
                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">A. Core Functions and Examples</h3>
                    <p class="text-gray-700 mb-4">Adverbs describe Manner, Time, or Place in general English.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Manner:</strong> She performed the analysis <strong>carefully</strong>. (Modifies verb)</li>
                        <li><strong>Adjective Modifier (Degree):</strong> The results were <strong>highly</strong> significant. (Modifies adjective)</li>
                        <li><strong>Time/Place:</strong> The audit occurred <strong>recently</strong>. (Modifies verb)</li>
                    </ul>
                </div>
                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">B. Primary Positions</h3>
                    <p class="text-gray-700 mb-4">Adverbs can occupy Initial, Mid, or Final positions.</p>
                    <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-indigo-500">
                        <strong>Initially,</strong> (Initial) we <strong>always</strong> (Mid) review the data <strong>thoroughly</strong> (Final).
                    </code>
                </div>
            </div>
        `
    },
    // Lesson 2: General vs. Formal Adverbs (Manner & Time Transition)
    "l2": {
        nav: "2. Formal Lexicon",
        title: "Lesson 2: Transitioning to Formal Adverb Lexicon",
        summary: "Replace conversational adverbs and phrases with precise, academic alternatives to elevate the tone and clarity of your writing.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Formal writing demands precise, often single-word adverbs. Replace informal phrases with their sophisticated academic counterparts.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Informal Adverb/Phrase</th><th>Formal Academic Adverb</th><th>Academic Purpose</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Really / Very</strong></td><td><strong>Significantly / Substantially</strong></td><td>Intensifying magnitude or impact.</td></tr>
                        <tr><td><strong>At first</strong></td><td><strong>Initially / Prima facie</strong></td><td>Setting the stage or sequence.</td></tr>
                        <tr><td><strong>In the end</strong></td><td><strong>Ultimately / Conclusively</strong></td><td>Stating the final result or conclusion.</td></tr>
                        <tr><td><strong>A lot</strong></td><td><strong>Considerably / Extensively</strong></td><td>Indicating large quantity or breadth.</td></tr>
                        <tr><td><strong>Maybe</strong></td><td><strong>Potentially / Conceivably</strong></td><td>Expressing caution or possibility.</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // Lesson 3: Adverbs of Degree and Hedging (Academic Precision)
    "l3": {
        nav: "3. Degree & Hedging",
        title: "Lesson 3: Adverbs of Degree and Academic Hedging",
        summary: "Use adverbs to accurately reflect the strength, possibility, or reliability of evidence (hedging), avoiding vulnerable absolute claims.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Academic English uses adverbs of degree to hedge claims, ensuring statements are measured and supported by evidence, not presented as absolute truth.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Adverb Type</th><th>Example Adverbs</th><th>Function in Research</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Intensifier</strong></td><td><strong>Significantly / Crucially / Fundamentally</strong></td><td>To highlight a major impact or necessity.</td></tr>
                        <tr><td><strong>Mitigator (Hedge)</strong></td><td><strong>Slightly / Marginally / Tentatively</strong></td><td>To reduce the certainty or scope of a claim.</td></tr>
                        <tr><td><strong>Probability</strong></td><td><strong>Likely / Possibly / Presumably</strong></td><td>To indicate a well-supported belief.</td></tr>
                        <tr><td><strong>Closeness</strong></td><td><strong>Virtually / Nearly / Almost</strong></td><td>Used with absolute adjectives (*virtually impossible*).</td></tr>
                    </tbody>
                </table>
            </div>
            <h3 class="text-xl font-semibold text-green-700 mt-8 mb-4">Example of Hedging:</h3>
            <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-green-500">
                The policy <strong>presumably</strong> leads to a <strong>marginal</strong> increase in efficiency.
            </code>
        `
    },
    // Lesson 4: Avoiding Redundancy and Split Infinitives
    "l4": {
        nav: "4. Clarity & Concision",
        title: "Lesson 4: Concision and Avoiding Grammatical Errors",
        summary: "Focus on eliminating redundant adverbs and adhering to the formal rule against splitting the infinitive (<strong>to</strong> + verb).",
        html: `
            <p class="text-lg text-gray-700 mb-6">Clarity requires strong verbs and strict adherence to placement rules, particularly in formal contexts.</p>
            <div class="space-y-6">
                <div class="p-6 bg-pink-50 border border-pink-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-pink-800 mb-2">A. Avoiding Redundancy</h3>
                    <p class="text-gray-700 mb-4">Do not use an adverb whose meaning is already implied by the verb.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Avoid:</strong> The results <strong>completely</strong> contradicted the theory. (*Contradicted* is already absolute.)</li>
                        <li></strong>Prefer:</strong> The results <strong>contradicted</strong> the theory.</li>
                    </ul>
                </div>
                <div class="p-6 bg-pink-50 border border-pink-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-pink-800 mb-2">B. Avoiding Split Infinitives</h3>
                    <p class="text-gray-700 mb-4">In formal English, do not place an adverb between *to* and the base form of the verb.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Avoid:</strong> The goal is to <strong>thoroughly</strong> document the process.</li>
                        <li><strong>Prefer:</strong> The goal is to document the process <strong>thoroughly</strong>.</li>
                    </ul>
                </div>
            </div>
        `
    },
    // Lesson 5: Conjunctive Adverbs (Sentence Connectors)
    "l5": {
        nav: "5. Conjunctive Adverbs",
        title: "Lesson 5: Using Conjunctive Adverbs for Coherence",
        summary: "Master conjunctive adverbs (e.g., 'however,' 'therefore') to join independent clauses and signal precise logical relationships.",
        html: `
            <p class="text-lg text-gray-700 mb-6">These adverbs link two complete sentences, providing logical flow. <strong>Crucially</strong>, they require specific punctuation.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Relationship</th><th>Conjunctive Adverbs</th><th>Formal Punctuation Rule</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Contrast</strong></td><td><strong>However, Conversely, Nevertheless</strong></td><td rowspan="4">The first phase failed<strong>; moreover,</strong> the resources were inadequate. (Semicolon before, comma after).</td></tr>
                        <tr><td><strong>Result</strong></td><td><strong>Therefore, Consequently, Thus</strong></td></tr>
                        <tr><td><strong>Addition</strong></td><td><strong>Moreover, Furthermore, In addition</strong></td></tr>
                        <tr><td><strong>Sequence</strong></td><td><strong>Subsequently, Initially</strong></td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // Lesson 6: Initial Adverbs and Commas (Punctuation Rules)
    "l6": {
        nav: "6. Initial Punctuation",
        title: "Lesson 6: Initial Adverbs and Commas",
        summary: "Understand the strict rule for setting off initial adverbs and adverbial phrases with a comma when they modify the entire clause.",
        html: `
            <p class="text-lg text-gray-700 mb-6">When an adverb or adverbial phrase begins a sentence and modifies the entire clause (often expressing the writer's attitude or setting the context), it must be followed by a comma.</p>
            <div class="space-y-6">
                <div class="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-orange-800 mb-2">A. Single Initial Adverb</h3>
                    <p class="text-gray-700 mb-4">This signals the writer's attitude toward the sentence's content.</p>
                    <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-orange-500">
                        <strong>Crucially,</strong> the variables must be separated for accurate testing.
                    </code>
                </div>
                <div class="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-orange-800 mb-2">B. Initial Adverbial Phrase</h3>
                    <p class="text-gray-700 mb-4">Sets a formal temporal or spatial context.</p>
                    <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-orange-500">
                        <strong>After a careful review of the literature,</strong> the hypothesis was revised.
                    </code>
                </div>
            </div>
        `
    },
    // Lesson 7: Adverbs of Attitude and Stance
    "l7": {
        nav: "7. Attitude Adverbs",
        title: "Lesson 7: Adverbs of Attitude and Writer Stance",
        summary: "These adverbs convey the writer's assessment or degree of certainty (stance), which is critical for academic objectivity.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Adverbs of attitude are used to signal the writer's assessment or degree of certainty regarding a statement. They ensure objectivity and proper argumentation.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Function</th><th>Adverb Examples</th><th>Formal Usage</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Stating Necessity</strong></td><td><strong>Necessarily, Essentially, Fundamentally</strong></td><td><strong>Fundamentally,</strong> the theory relies on two core principles.</td></tr>
                        <tr><td><strong>Voicing Caution</strong></td><td><strong>Paradoxically, Hypothetically, Conceivably</strong></td><td><strong>Hypothetically,</strong> this model could fail under load.</td></tr>
                        <tr><td><strong>Stating Conclusion</strong></td><td><strong>Conclusively, Indubitably, Unequivocally</strong></td><td><strong>Unequivocally,</strong> the evidence supports the primary claim.</td></tr>
                    </tbody>
                </table>
            </div>
            <h3 class="text-xl font-semibold text-yellow-700 mt-8 mb-4">Placement Note:</h3>
            <p class="text-gray-700">These adverbs frequently occupy the <strong>Initial</strong> position (followed by a comma) or the <strong>Mid</strong> position (before the main verb).</p>
        `
    },
    // Lesson 8: Overcoming Adverb Overload
    "l8": {
        nav: "8. Adverb Overload",
        title: "Lesson 8: Overcoming Adverb Overload (Clarity and Flow)",
        summary: "Learn to recognize and eliminate adverb overuse, which leads to clutter, weak prose, and a lack of authority in formal writing.",
        html: `
            <p class="text-lg text-gray-700 mb-6">While necessary for precision, excessive adverbs clutter prose and diminish authority. Aim for clarity and impact.</p>
            <div class="space-y-6">
                <div class="p-6 bg-red-50 border border-red-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-red-800 mb-2">A. Avoid Cluttered Prose</h3>
                    <p class="text-gray-700 mb-4">Too many adverbs make a statement sound defensive or weak.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Overload:</strong> We <strong>very cautiously</strong> and <strong>slowly</strong> approached the <strong>extremely** critical phase.</li>
                        <li><strong>Prefer:</strong> We <strong>cautiously</strong> approached the <strong>critical</strong> phase.</li>
                    </ul>
                </div>
                <div class="p-6 bg-red-50 border border-red-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-red-800 mb-2">B. Review Verb Choice</h3>
                    <p class="text-gray-700 mb-4">Often, a strong verb eliminates the need for an adverb.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Weak:</strong> The model ran <strong>very fast</strong>.</li>
                        <li><strong>Strong:</strong> The model <strong>accelerated</strong>.</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// --- REACT COMPONENTS ---

interface LessonCardProps {
    lessonId: LessonId;
    lesson: Lesson;
    lessonColor: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ lessonId, lesson, lessonColor }) => {
    // State to manage whether the detail view is visible (mimics the original JS toggle)
    const [isDetailView, setIsDetailView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    // Dynamically constructing Tailwind classes
    const colorShade = colorShades[lessonColor];

    // Explicit literal class maps so Tailwind's parser sees the classes at build time
    const buttonClassesMap: Record<string, string> = {
        blue: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-blue-600 hover:bg-blue-700',
        purple: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-purple-600 hover:bg-purple-700',
        green: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-green-600 hover:bg-green-700',
        red: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-red-600 hover:bg-red-700',
        cyan: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-cyan-600 hover:bg-cyan-700',
        indigo: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-indigo-600 hover:bg-indigo-700',
        yellow: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-yellow-600 hover:bg-yellow-700',
        pink: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-pink-600 hover:bg-pink-700',
        teal: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-teal-600 hover:bg-teal-700',
        orange: 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-orange-600 hover:bg-orange-700',
    };

    const borderClassesMap: Record<string, string> = {
        blue: 'border-blue-600 hover:border-blue-700',
        purple: 'border-purple-600 hover:border-purple-700',
        green: 'border-green-600 hover:border-green-700',
        red: 'border-red-600 hover:border-red-700',
        cyan: 'border-cyan-600 hover:border-cyan-700',
        indigo: 'border-indigo-600 hover:border-indigo-700',
        yellow: 'border-yellow-600 hover:border-yellow-700',
        pink: 'border-pink-600 hover:border-pink-700',
        teal: 'border-teal-600 hover:border-teal-700',
        orange: 'border-orange-600 hover:border-orange-700',
    };

    const buttonClass = buttonClassesMap[lessonColor] ?? 'primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-gray-600 hover:bg-gray-700';

    // Build card classes using literal mapped strings so Tailwind includes them in the build
    const cardClass = `lesson-card border-l-8 border-solid ${borderClassesMap[lessonColor] ?? 'border-gray-500'} border-gray-200 px-6`;

    // Fallback color hex map so hover/border colors work even if Tailwind isn't built
    const colorHexMap: Record<string, { default: string; hover: string }> = {
        blue: { default: '#2563eb', hover: '#1e40af' }, // blue-600, blue-700
        purple: { default: '#7c3aed', hover: '#6d28d9' },
        green: { default: '#16a34a', hover: '#15803d' },
        red: { default: '#dc2626', hover: '#b91c1c' },
        cyan: { default: '#0891b2', hover: '#0e7490' },
        indigo: { default: '#4f46e5', hover: '#4338ca' },
        yellow: { default: '#d97706', hover: '#b45309' },
        pink: { default: '#ec4899', hover: '#db2777' },
        teal: { default: '#0d9488', hover: '#0f766e' },
        orange: { default: '#f97316', hover: '#ea580c' },
    };

    const hexColors = colorHexMap[lessonColor] ?? { default: '#6b7280', hover: '#4b5563' };

    const mainTitleColorClass = colorShade.text.replace('700', '800'); // Use 800 for main title

    const handleViewDetail = () => {
        setIsDetailView(true);
        // Optional: Scroll to the detail view, as in the original JS
        setTimeout(() => {
            const detailElement = document.getElementById(`lesson-container-${lessonId}`);
            if (detailElement) {
                detailElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 0);
    };

    const handleBackToSummary = () => {
        setIsDetailView(false);
    };

    // Process the raw HTML content to apply the correct color classes based on the lesson
    const lessonDetailContent = replaceColorClasses(lesson.html, lessonColor);

    return (
        <div
            id={`lesson-container-${lessonId}`}
            className={cardClass}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ borderLeftColor: isHovered ? hexColors.hover : hexColors.default }}
        >
            {/* Summary View (Visible when isDetailView is false) */}
            <div 
                id={`lesson-summary-${lessonId}`} 
                className={`content-section py-6  ${isDetailView ? 'hidden' : 'block'} max-w-5xl`}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{lesson.nav} </h2>
                <p className="text-lg text-gray-600 mb-6">{lesson.summary}</p>
                <button onClick={handleViewDetail} className={buttonClass}>
                    View Full Lesson Details →
                </button>
            </div>

            {/* Detail View (Visible when isDetailView is true) */}
            <div 
                id={`lesson-detail-${lessonId}`} 
                className={`mt-8 mb-8 py-6 content-section ${isDetailView ? 'block' : 'hidden'}`}
            >
                <button 
                    onClick={handleBackToSummary}
                    className="mb-6 px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                >
                    ← Back to Summary
                </button>
                <h3 className={`text-2xl font-bold ${mainTitleColorClass} mb-6`}>{lesson.title}</h3>
                {/* DANGER: Using dangerouslySetInnerHTML to render the large HTML string */}
                <div className="space-y-8 lesson-content" dangerouslySetInnerHTML={{ __html: lessonDetailContent }} />
            </div>
        </div>
    );
};


const FormalAdverbGuide: React.FC = () => {
    // Inject custom styles globally, as in the original HTML file's <style> block
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = customStyles;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);


    return (
        <div>
            <header className="text-center mt-12">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                    Formal Adverb Guide for Academic Writing
                </h1>
                <p className="text-xl text-gray-500 font-light">
                    Master the art of using adverbs effectively in formal contexts.
                </p>
            </header>

            <div className="max-w-5xl mx-auto min-h-screen">
                <main id="content-area" className="p-4 md:p-8 space-y-8">
                    {/* Iterate over the lesson content data */}
                    {Object.keys(lessonContent).map((key) => {
                        const lessonId = key as LessonId;
                        return (
                            <LessonCard
                                key={lessonId}
                                lessonId={lessonId}
                                lesson={lessonContent[lessonId]}
                                lessonColor={lessonColors[lessonId]}
                            />
                        );
                    })}
                </main>
            </div>
        </div>
    );
};

export default FormalAdverbGuide;