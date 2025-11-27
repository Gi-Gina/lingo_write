"use client";
import React, { useState, useEffect, useMemo } from 'react';

// --- 1. DATA DEFINITIONS ---

// Define the color maps used for styling in Tailwind CSS
const lessonColors: Record<string, string> = {
    "l1": "indigo",
    "l2": "purple",
    "l3": "green",
    "l4": "pink",
    "l5": "cyan",
    "l6": "orange",
    "l7": "yellow",
    "l8": "red"
};

// Define the specific Tailwind classes for each color
const colorShades: Record<string, { text: string; border: string; bg: string; border_light: string }> = {
    "indigo": { text: "text-indigo-700", border: "border-indigo-500", bg: "bg-indigo-50", border_light: "border-indigo-200" },
    "purple": { text: "text-purple-700", border: "border-purple-500", bg: "bg-purple-50", border_light: "border-purple-200" },
    "green": { text: "text-green-700", border: "border-green-500", bg: "bg-green-50", border_light: "border-green-200" },
    "pink": { text: "text-pink-700", border: "border-pink-500", bg: "bg-pink-50", border_light: "border-pink-200" },
    "cyan": { text: "text-cyan-700", border: "border-cyan-500", bg: "bg-cyan-50", border_light: "border-cyan-200" },
    "orange": { text: "text-orange-700", border: "border-orange-500", bg: "bg-orange-50", border_light: "border-orange-200" },
    "yellow": { text: "text-yellow-700", border: "border-yellow-500", bg: "bg-yellow-50", border_light: "border-yellow-200" },
    "red": { text: "text-red-700", border: "border-red-500", bg: "bg-red-50", border_light: "border-red-200" }
};

interface Lesson {
    nav: string;
    title: string;
    summary: string;
    html: string;
}

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

// --- 2. DYNAMIC COLOR REPLACEMENT LOGIC ---

/**
 * Replaces hardcoded color classes in the HTML string with the dynamic color.
 * This mimics the JavaScript logic from the original HTML.
 */
const replaceColorClasses = (html: string, lessonColor: string): string => {
    const shades = colorShades[lessonColor];

    // The logic below ensures that even if the source HTML template used 
    // a different default color (like 'indigo' for L1) it gets replaced 
    // with the current lesson's color.

    let coloredHtml = html;

    // 1. General h3 headings (text-*-700 -> dynamic text-COLOR-700)
    coloredHtml = coloredHtml.replace(/text-(indigo|purple|green|pink|cyan|orange|yellow|red)-700/g, shades.text);

    // 2. Code block left borders (border-*-500 -> dynamic border-COLOR-500)
    coloredHtml = coloredHtml.replace(/border-(indigo|purple|green|pink|cyan|orange|yellow|red)-500/g, shades.border);

    // 3. Special highlighted blocks (bg-*-50/border-*-200 -> dynamic)
    coloredHtml = coloredHtml.replace(/bg-(indigo|purple|green|pink|cyan|orange|yellow|red)-50/g, shades.bg);
    coloredHtml = coloredHtml.replace(/border-(indigo|purple|green|pink|cyan|orange|yellow|red)-200/g, shades.border_light);

    // 4. Specific text color for boxes (text-*-800 -> dynamic text-COLOR-800)
    coloredHtml = coloredHtml.replace(/text-(indigo|purple|green|pink|cyan|orange|yellow|red)-800/g, shades.text.replace('700', '800'));

    return coloredHtml;
};

// --- 3. LESSON COMPONENT ---

interface LessonCardProps {
    lessonId: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ lessonId }) => {
    const [isDetail, setIsDetail] = useState(false);
    const lesson = lessonContent[lessonId];
    const colorName = lessonColors[lessonId];
    const shades = colorShades[colorName];

    // Generate the full button/hover classes once
    const buttonClasses = `bg-${colorName}-600 hover:bg-${colorName}-700`;
    
    // Generate the dynamic content HTML with correct colors
    const coloredHtml = useMemo(() => replaceColorClasses(lesson.html, colorName), [lesson.html, colorName]);
    const mainTitleColorClass = shades.text.replace('700', '800');

    // Scroll to the detail view when it opens
    useEffect(() => {
        if (isDetail) {
            const detailDiv = document.getElementById(`lesson-container-${lessonId}`);
            if (detailDiv) {
                detailDiv.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [isDetail, lessonId]);

    const handleViewDetail = () => setIsDetail(true);
    const handleBackToSummary = () => setIsDetail(false);

    // The combined classes for the outer card container
    const cardClasses = `lesson-card colored-left border-l-[8px] border-l-solid border-l-${colorName}-500`;

    // Render Summary View
    if (!isDetail) {    
        return (
            <div className={`${cardClasses} border-l-8 border-l-solid border-l-${colorName}-500 content-section py-6`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-2">{lesson.nav}</h2>
                <p className="text-lg text-gray-600 mb-6 ml-2">{lesson.summary}</p>
                <button 
                    onClick={handleViewDetail}
                    className={`primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl ${buttonClasses} ml-2`}
                >
                    View Full Lesson Details →
                </button>
            </div>
        );
    }

    // Render Detail View
    return (
        <div className={`${cardClasses} content-section px-6 py-6`}>
            <button 
                onClick={handleBackToSummary}
                className="mb-6 px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 ml-2"
            >
                ← Back to Summary
            </button>

            <h3 className={`text-2xl font-bold ${mainTitleColorClass} mb-6 ml-2`}>{lesson.title}</h3>
            
            {/* DANGER: Using dangerouslySetInnerHTML is required here to render the 
              HTML template strings defined in lessonContent.
            */}
            <div className="space-y-8 ml-2" dangerouslySetInnerHTML={{ __html: coloredHtml }} />
        </div>
    );
};

// --- 4. MAIN COMPONENT ---

export const FormalAdjectiveGuide: React.FC = () => {
    
    // Custom styles derived from the HTML <style> block.
    // NOTE: In a production React application, these rules should ideally be 
    // refactored into global CSS or configured via Tailwind overrides.
    const customStyles = `
        /* Import Inter Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        /* Custom Global Styles from HTML */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #eef2f5;
        }

        .lesson-card {
            background-color: #ffffff;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .lesson-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }

        .content-section {
            animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .colored-left {
            border-left-width: 8px;
            border-left-style: solid;
            border-radius: 1rem;
            padding-left: 1.2rem;
        }
        
        /* The border-left-width is handled dynamically via Tailwind class border-l-[8px] */

        /* Button base */
        .primary-btn {
            transition: all 0.3s ease;
        }

        /* Table styling */
        .lesson-table th, .lesson-table td {
            padding: 6px 10px !important; /* Smaller compact padding from original HTML */
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
        
        /* Specific Overrides for Compact UI from the original HTML style block */
        .p-6 {
            padding: 1rem !important;
        }

        .space-y-6 > * + * {
            margin-top: 1rem !important;
        }
        .space-y-2 > * + * {
            margin-top: 0.3rem !important;
        }

        .lesson-content p {
            margin-bottom: 0.75rem !important;
        }

        .lesson-content h3 {
            margin-bottom: 0.4rem !important;
        }

        .lesson-content code {
            padding: 8px !important;
            font-size: 0.95rem !important;
        }

        .lesson-table th {
            font-size: 0.95rem !important;
        }

        .lesson-content div {
            margin-bottom: 0.75rem !important;
        }
        
        .line-through-red {
            text-decoration: line-through;
            color: #ef4444; /* red-500 */
        }
    `;

    // Inject the custom styles into the DOM once
    useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = customStyles;
        document.head.appendChild(styleTag);
        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    const lessonIds = Object.keys(lessonContent);

    return (
        <div>
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                    Formal Adjective Guide
                </h1>
                <p className="text-xl text-gray-500 font-light">
                    All 8 lessons for formal adjective usage are available below.
                </p>
            </header>

            <div className="max-w-5xl mx-auto min-h-screen">
                <main id="content-area" className="p-4 md:p-8 space-y-8">
                    {lessonIds.map(id => (
                        <LessonCard key={id} lessonId={id} />
                    ))}
                </main>
            </div>
        </div>
    );
};
export default FormalAdjectiveGuide;


