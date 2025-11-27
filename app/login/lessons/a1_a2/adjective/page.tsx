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
    "l1": {
        nav: "1. Function & Position",
        title: "Lesson 1: Function and Position",
        summary: "Adjectives modify nouns and pronouns. Learn the two primary positions: Attributive (before the noun) and Predicative (after a linking verb).",
        html: `
            <p class="text-lg text-gray-700 mb-6">Adjectives are words that modify (describe or qualify) nouns and pronouns. They primarily appear in two key positions in a sentence.</p>
            <div class="space-y-6 lesson-content">
                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">A. Attributive Position (Before the Noun)</h3>
                    <p class="text-gray-700 mb-4">This is the most common position. The adjective comes directly <strong>before</strong> the noun it modifies.</p>
                    <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-indigo-500">
                        The <strong>critical</strong> analysis produced <strong>favorable</strong> results.
                    </code>
                </div>
                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">B. Predicative Position (After a Linking Verb)</h3>
                    <p class="text-gray-700 mb-4">The adjective follows a <strong>linking verb</strong> (like <code>be</code>, <code>seem</code>, <code>become</code>, <code>feel</code>) and describes the subject of the sentence.</p>
                    <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-indigo-500">
                        The findings appear <strong>irrefutable</strong>. / The meeting was <strong>productive</strong>.
                    </code>
                </div>
            </div>
        `
    },
    "l2": {
        nav: "2. Degrees of Comparison",
        title: "Lesson 2: Degrees of Comparison",
        summary: "Adjectives change form (positive, comparative, superlative) to show degree. Master the rules for adding -er/-est and using 'more'/'most,' including irregular forms.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Adjectives change form to show degree, which is essential for making precise comparisons in academic writing.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm lesson-content">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Degree</th><th>Function</th><th>Example</th><th>Rule</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Positive</strong></td><td>Describes one item (no comparison).</td><td>The policy is <strong>strict</strong>.</td><td>(Base form)</td></tr>
                        <tr><td><strong>Comparative</strong></td><td>Compares <strong>two</strong> items.</td><td>The revised policy is <strong>stricter</strong> (or <strong>more restrictive</strong>) than the original.</td><td>Add <code>-er</code> or use <code>more</code> (for 2+ syllables).</td></tr>
                        <tr><td><strong>Superlative</strong></td><td>Compares <strong>three or more</strong> items (the extreme).</td><td>This is the <strong>strictest</strong> (or <strong>most restrictive</strong>) policy in effect.</td><td>Add <code>-est</code> or use <code>most</code> (for 2+ syllables).</td></tr>
                    </tbody>
                </table>
            </div>
            <h3 class="text-xl font-semibold text-purple-700 mt-8 mb-4">Irregular Forms</h3>
            <p class="text-gray-700 mb-4">A few common adjectives have irregular forms that must be memorized:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li><code>Good</code> &rarr; <strong>Better</strong> &rarr; <strong>Best</strong></li>
                <li><code>Bad</code> &rarr; <strong>Worse</strong> &rarr; <strong>Worst</strong></li>
                <li><code>Far</code> &rarr; <strong>Further / Farther</strong> &rarr; <strong>Furthest / Farthest</strong></li>
            </ul>
        `
    },
    "l3": {
        nav: "3. Adverbs Modifying Adjectives",
        title: "Lesson 3: Using Adverbs to Modify Adjectives",
        summary: "Adverbs modify adjectives by intensifying or mitigating their meaning. Focus on using formal adverbs (e.g., 'wholly,' 'significantly') instead of casual ones.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Adverbs can intensify or mitigate an adjective's meaning. In formal writing, avoid casual adverbs like <code>very</code> or <code>really</code> in favor of more sophisticated terms.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm lesson-content">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Adverb Type</th><th>Formal Adverb</th><th>Example of Formal Use</th><th>Informal Equivalent</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Intensifier</strong></td><td><strong>Wholly / Significantly / Entirely</strong></td><td>The argument is <strong>wholly</strong> convincing.</td><td><span class="text-gray-500 italic">The argument is really convincing.</span></td></tr>
                        <tr><td><strong>Mitigator</strong></td><td><strong>Slightly / Marginally / Comparatively</strong></td><td>The outcome was <strong>comparatively</strong> disappointing.</td><td><span class="text-gray-500 italic">The outcome was a little disappointing.</span></td></tr>
                        <tr><td><strong>Qualifier</strong></td><td><strong>Virtually / Notably / Generally</strong></td><td>The data is <strong>generally</strong> reliable.</td><td><span class="text-gray-500 italic">The data is mostly reliable.</span></td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    "l4": {
        nav: "4. Formal vs. Informal Lexicon",
        title: "Lesson 4: Formal vs. Informal Adjective Lexicon",
        summary: "Formal writing requires precise, often Latinate, adjectives. Elevate your vocabulary by choosing formal alternatives (e.g., 'sufficient' instead of 'enough').",
        html: `
            <p class="text-lg text-gray-700 mb-6">Formal English requires selecting precise, often Latinate, adjectives over their simpler counterparts to lend gravity and precision to your text.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm lesson-content">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Informal Adjective</th><th>Formal Adjective</th><th>Example of Formal Use</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Enough</strong></td><td><strong>Sufficient / Adequate</strong></td><td>The department has confirmed that resources are <strong>sufficient</strong>.</td></tr>
                        <tr><td><strong>Right / True</strong></td><td><strong>Valid / Veritable</strong></td><td>We must verify the <strong>veritable</strong> facts before proceeding.</td></tr>
                        <tr><td><strong>Next / Later</strong></td><td><strong>Subsequent</strong></td><td>The <strong>subsequent</strong> meeting will address the budgetary concerns.</td></tr>
                        <tr><td><strong>Big</strong></td><td><strong>Substantial / Extensive</strong></td><td>The project requires a <strong>substantial</strong> investment of capital.</td></tr>
                        <tr><td><strong>Main</strong></td><td><strong>Primary / Principal</strong></td><td>The <strong>primary</strong> objective is to reduce energy costs.</td></tr>
                        <tr><td><strong>Wrong</strong></td><td><strong>Erroneous / Incorrect</strong></td><td>The initial analysis contained <strong>erroneous</strong> calculations.</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    "l5": {
        nav: "5. Qualifying Adjectives",
        title: "Lesson 5: Qualifying and Restrictive Adjectives",
        summary: "These adjectives (e.g., 'potential,' 'apparent') are used to temper claims and define the exact scope of a statement, indicating a careful, measured approach.",
        html: `
            <p class="text-lg text-gray-700 mb-6">These adjectives are used in formal settings to temper claims or define the scope of a statement, indicating a careful, measured approach and avoiding absolutes.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm lesson-content">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Adjective</th><th>Function in Formal Writing</th><th>Example Sentence</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Potential</strong></td><td>Indicates possibility, not certainty.</td><td>There is <strong>potential</strong> risk involved in deviating from the procedure.</td></tr>
                        <tr><td><strong>Apparent</strong></td><td>Describes something that seems true but needs confirmation.</td><td>The <strong>apparent</strong> correlation requires further statistical investigation.</td></tr>
                        <tr><td><strong>Marginal</strong></td><td>Denotes a minor or insignificant degree.</td><td>The adjustment resulted in only a <strong>marginal</strong> improvement in efficiency.</td></tr>
                        <tr><td><strong>Preliminary</strong></td><td>Identifies early-stage information or findings.</td><td>The <strong>preliminary</strong> report suggests the system is scalable.</td></tr>
                        <tr><td><strong>Tentative</strong></td><td>Describes plans or conclusions that are not final.</td><td>The committee reached a <strong>tentative</strong> agreement pending legal review.</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    "l6": {
        nav: "6. Participle Adjectives",
        title: "Lesson 6: Formal Use of Participle Adjectives",
        summary: "Master the use of verb forms ending in -ing (present participle, active) and -ed (past participle, passive/state) as concise, formal adjectives.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Participles (verb forms ending in <code>-ing</code> or <code>-ed</code>) are frequently used as adjectives in formal writing to concisely convey complex actions or states.</p>
            <div class="space-y-6 lesson-content">
                <div class="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-orange-800 mb-2">A. Present Participle Adjectives (-ing)</h3>
                    <p class="text-gray-700 mb-4">These describe an active process or ongoing characteristic.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Resulting:</strong> The <strong>resulting</strong> complications must be factored into the analysis.</li>
                        <li><strong>Pertaining:</strong> All documents <strong>pertaining</strong> to the contract should be enclosed.</li>
                        <li><strong>Emerging:</strong> The organization must adapt to the <strong>emerging</strong> technological landscape.</li>
                    </ul>
                </div>
                <div class="p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-orange-800 mb-2">B. Past Participle Adjectives (-ed)</h3>
                    <p class="text-gray-700 mb-4">These describe a state or characteristic resulting from a completed action.</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Delineated:</strong> The <strong>delineated</strong> scope of work prevents resource creep.</li>
                        <li><strong>Validated:</strong> The data used in the model has been <strong>validated</strong> by an auditor.</li>
                        <li><strong>Mandated:</strong> Compliance with the <strong>mandated</strong> standards is non-negotiable.</li>
                    </ul>
                </div>
            </div>
        `
    },
    "l7": {
        nav: "7. Adjective Order (OQCSANOM)",
        title: "Lesson 7: The Unbreakable Rule of Adjective Order",
        summary: "When using multiple adjectives (more than three) before a noun, they must follow the fixed OQCSANOM sequence: Opinion, Quality/Size, Condition/Age, Shape, Color, Nationality, Material, Modifying Noun.",
        html: `
            <p class="text-lg text-gray-700 mb-6">When using multiple adjectives before a noun, they must follow a fixed, specific sequence (OQCSANOM) to sound natural and correct.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm lesson-content">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Order</th><th>Category</th><th>Example Adjectives</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td><strong>Opinion</strong></td><td><em>complex, useful, excellent</em></td></tr>
                        <tr><td>2</td><td><strong>Quality/Size</strong></td><td><em>large, tiny, extensive</em></td></tr>
                        <tr><td>3</td><td><strong>Condition/Age</strong></td><td><em>old, modern, current</em></td></tr>
                        <tr><td>4</td><td><strong>Shape</strong></td><td><em>round, square</em></td></tr>
                        <tr><td>5</td><td><strong>Color</strong></td><td><em>red, blue, dark</em></td></tr>
                        <tr><td>6</td><td><strong>Nationality</strong></td><td><em>British, French</em></td></tr>
                        <tr><td>7</td><td><strong>Material</strong></td><td><em>metal, plastic, research</em></td></tr>
                        <tr><td>8</td><td><strong>Modifying Noun</strong></td><td><em>dining, filing, policy</em></td></tr>
                    </tbody>
                </table>
            </div>
            <h3 class="text-xl font-semibold text-yellow-700 mt-8 mb-4">Example of Correct Order:</h3>
            <code class="block p-4 bg-gray-100 rounded text-gray-800 border-l-4 border-yellow-500">
                The <strong>extensive (Q)</strong> <strong>preliminary (C)</strong> <strong>research (M)</strong> findings were reviewed.
            </code>
        `
    },
    "l8": {
        nav: "8. Absolute Adjectives",
        title: "Lesson 8: Absolute (Non-Gradable) Adjectives",
        summary: "Absolute adjectives (e.g., 'unique,' 'perfect,' 'impossible') describe all-or-nothing states and cannot be modified with comparative words like 'more' or 'most.'",
        html: `
            <p class="text-lg text-gray-700 mb-6">Absolute adjectives describe qualities that are either completely present or absent. They cannot be compared with <code>more</code> or <code>most</code>.</p>
            <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm lesson-content">
                <table class="lesson-table w-full min-w-max">
                    <thead><tr><th>Adjective</th><th>Meaning (Absolute)</th><th>Correct Usage</th><th>Incorrect Usage</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Unique</strong></td><td>One of a kind.</td><td>That is a <strong>unique</strong> perspective.</td><td><span class="line-through-red">The perspective is more unique.</span></td></tr>
                        <tr><td><strong>Perfect</strong></td><td>Flawless; without defect.</td><td>The design is <strong>perfect</strong>.</td><td><span class="line-through-red">This design is the most perfect.</span></td></tr>
                        <tr><td><strong>Impossible</strong></td><td>Cannot be done.</td><td>The task is <strong>impossible</strong>.</td><td><span class="line-through-red">This task is more impossible.</span></td></tr>
                        <tr><td><strong>Essential</strong></td><td>Absolutely necessary.</td><td>This step is <strong>essential</strong>.</td><td><span class="line-through-red">This step is most essential.</span></td></tr>
                    </tbody>
                </table>
            </div>
            <h3 class="text-xl font-semibold text-red-700 mt-8 mb-4">Formal Modification</h3>
            <p class="text-gray-700 mb-4">To temper or intensify an absolute adjective, use adverbs like <code>almost</code>, <code>nearly</code>, <code>virtually</code>, <code>completely</code>, or <code>utterly</code>.</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 pl-4">
                <li>Correct: The solution is <strong>utterly perfect</strong>.</li>
                <li>Correct: The goal is <strong>virtually impossible</strong> to achieve.</li>
            </ul>
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


const FormalAdjectiveGuide: React.FC = () => {
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
                    Formal Adjective Guide for Academic Writing
                </h1>
                <p className="text-xl text-gray-500 font-light">
                    Master the art of using adjectives effectively in formal contexts.
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

export default FormalAdjectiveGuide;