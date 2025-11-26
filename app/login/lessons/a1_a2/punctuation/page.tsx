"use client";
import React, { useState, useEffect, useCallback } from 'react';

// NOTE: In a real-world application, you would configure Tailwind CSS
// for your project and use a dedicated CSS file (e.g., globals.css or a module CSS file)
// instead of inline <style> and CDN.
// For this single-file integration, we place the custom styles here.
const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

    .body-bg {
        font-family: 'Inter', sans-serif;
        background-color: #eef2f5;
    }
    .main-container {
        max-width: 1400px;
        margin: 2rem auto;
        background-color: white;
        border-radius: 1.5rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        padding: 2rem;
    }

    .lesson-card {
        background-color: #ffffff;
        border-radius: 1rem;
        border: 1px solid #e0e7ff;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
                    0 2px 4px -2px rgba(0, 0, 0, 0.03);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
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

    .colored-left {
        border-left-width: 8px;
        border-left-style: solid;
        border-radius: 1rem;
        padding-left: 1.2rem;
    }

    .primary-btn {
        transition: all 0.3s ease;
    }

    .lesson-table th, .lesson-table td {
        padding: 6px 10px;
        text-align: left;
        border-bottom: 1px solid #f3f4f6;
        vertical-align: top;
    }
    .lesson-table th {
        background-color: #f7f8fc;
        font-size: 0.85rem;
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
        font-weight: 600;
    }
    .lesson-content p {
        margin-bottom: 0.75rem !important;
    }
    .lesson-content h3 {
        margin-bottom: 0.4rem !important;
    }
`;

// ---------------------
// TypeScript Interfaces for Data
// ---------------------
interface Rule {
    context: string;
    function: string;
    general: string;
    academic: string;
}

interface PunctuationLesson {
    title: string;
    symbol: string;
    data: Rule[];
}

interface ColorShade {
    text: string;
    border: string;
    bg: string;
    border_light: string;
}

interface LessonState {
    id: string; // e.g., 'l1'
    isSummary: boolean;
    lessonData: PunctuationLesson;
}

// ---------------------
// Color Shades & Data
// ---------------------
const colorShades: Record<string, ColorShade> = {
    "indigo": { text: "text-indigo-700", border: "border-indigo-500", bg: "bg-indigo-50", border_light: "border-indigo-200" },
    "purple": { text: "text-purple-700", border: "border-purple-500", bg: "bg-purple-50", border_light: "border-purple-200" },
    "green": { text: "text-green-700", border: "border-green-500", bg: "bg-green-50", border_light: "border-green-200" },
    "pink": { text: "text-pink-700", border: "border-pink-500", bg: "bg-pink-50", border_light: "border-pink-200" },
    "cyan": { text: "text-cyan-700", border: "border-cyan-500", bg: "bg-cyan-50", border_light: "border-cyan-200" },
    "orange": { text: "text-orange-700", border: "border-orange-500", bg: "bg-orange-50", border_light: "border-orange-200" },
    "yellow": { text: "text-yellow-700", border: "border-yellow-500", bg: "bg-yellow-50", border_light: "border-yellow-200" },
    "red": { text: "text-red-700", border: "border-red-500", bg: "bg-red-50", border_light: "border-red-200" }
};

const punctuationData: PunctuationLesson[] = [
    {
        title: "Full Stop (Period)",
        symbol: ".",
        data: [
            { context: "Ends Sentence", function: "Marks the end of a complete statement or command.", general: "The meeting is over now.", academic: "The data supports the hypothesis." },
            { context: "Abbreviations", function: "Follows certain abbreviations (Mr., Dr., p.m.).", general: "I will arrive at 7 a.m.", academic: "The analysis was conducted by Dr. Lee." },
            { context: "Formal Note", function: "Placed outside of closing parentheses when the parentheses are inside the sentence.", general: "The results were mixed (see chart).", academic: "The theory is complex (Jones, 2020)." }
        ]
    },
    {
        title: "Comma",
        symbol: ",",
        data: [
            { context: "Lists", function: "Separates three or more items in a series.", general: "We bought apples, oranges, and milk.", academic: "The factors were time, funding, and scope." },
            { context: "Compound Sentence", function: "Separates two complete sentences joined by a coordinating conjunction (FANBOYS).", general: "I ran the test, but the results were unclear.", academic: "The first model failed, so we used the second." },
            { context: "Introductory Element", function: "Follows introductory words, phrases, or clauses.", general: "Because of the rain, we stayed inside.", academic: "In conclusion, the findings are significant." },
            { context: "Non-Essential Info", function: "Sets off descriptive information that could be removed.", general: "My dog, which is a beagle, loves to chew.", academic: "The sample size, which was small, limits validity." }
        ]
    },
    {
        title: "Semicolon",
        symbol: ";",
        data: [
            { context: "Joined Clauses", function: "Links two complete, related sentences without a conjunction.", general: "The weather was severe; the flights were cancelled.", academic: "The first trial showed promise; the second failed." },
            { context: "Complex Lists", function: "Separates items in a list that already contain internal commas.", general: "I visited Paris, France; Rome, Italy; and Berlin, Germany.", academic: "The committee included Dr. Smith, Chair; Dr. Lee, Ethics; and Mr. Jones, Law." },
            { context: "Transitional Phrases", function: "Used before a conjunctive adverb (however, therefore) linking two clauses.", general: "*Not applicable*", academic: "The data was flawed; therefore, we reran the test." }
        ]
    },
    {
        title: "Colon",
        symbol: ":",
        data: [
            { context: "Introduction", function: "Follows a complete sentence and introduces a list, explanation, or example.", general: "I need three items: a map, a rope, and a light.", academic: "The results confirmed one point: the cost was too high." },
            { context: "Emphasis", function: "Introduces a phrase that summarizes or dramatically explains the preceding clause.", general: "There was one solution: fight back.", academic: "Title of Book: A Study in Modern Physics." },
            { context: "Rule (Warning)", function: "Must be preceded by a complete independent clause.", general: "*Correct:* I want a few things: coffee, tea, and juice.", academic: "*Incorrect:* My favorites are: coffee, tea, and juice." }
        ]
    },
    {
        title: "Apostrophe",
        symbol: "'",
        data: [
            { context: "Possession (Singular)", function: "Shows that one person/thing owns something.", general: "The <strong>dog's</strong> toy is broken.", academic: "The <strong>student's</strong> score was high." },
            { context: "Possession (Plural)", function: "Shows that many things own something.", general: "The **workers'** break room.", academic: "The <strong>children's</strong> books." },
            { context: "Contraction", function: "Replaces missing letters when joining two words.", general: "**It's** going to rain. (**It is**)", academic: "<strong>Who's</strong> responsible? (**Who is**)" },
            { context: "Warning", function: "Do not confuse **its** (possessive) with **it's** (contraction).", general: "*Wrong:* limiting **it's** ability.", academic: "*Correct:* The company limited **its** profits." }
        ]
    },
    {
        title: "Dash and Hyphen",
        symbol: "— / -",
        data: [
            { context: "Hyphen (-)", function: "Joins words that form a single adjective before a noun.", general: "This is a **well-known** problem.", academic: "We used a **long-term** solution." },
            { context: "Two Dashes (—)", function: "Sets off non-essential information with strong emphasis.", general: "My car—**the blue one**—is parked outside.", academic: "The theory—**though unproven**—remains popular." },
            { context: "Single Dash (—)", function: "Used like a colon to introduce a strong concluding thought or restatement.", general: "I need to leave—**my flight is delayed**.", academic: "*Not used in this context.*" }
        ]
    },
    {
        title: "Other Marks (Parentheses, Brackets, Ellipsis)",
        symbol: "( ) [ ] ...",
        data: [
            { context: "Parentheses ( )", function: "Enclose non-essential details, comments, or examples.", general: "Please bring the supplies (hammer and saw).", academic: "This is confirmed (**Smith, 2024**)." },
            { context: "Brackets [ ]", function: "Used **inside quotations** to add clarification or modify the original text.", general: "He said, \"I think **[the cat]** is hungry.\"", academic: "The rule states, \"It **[the law]** is final.\"" },
            { context: "Ellipsis (...)", function: "Shows words omitted from a quote or a pause in dialogue.", general: "\"I wonder if... if I can go.\"", academic: "\"The data was complex **...** due to low funds.\"" }
        ]
    }
];

const lessonColorsPassive: Record<string, keyof typeof colorShades> = {
    "l1": "indigo", "l2": "purple", "l3": "green", "l4": "pink", "l5": "cyan", "l6": "orange", "l7": "yellow", "l8": "red", "l9": "indigo", "l10": "purple", "l11": "green", "l12": "pink", "l13": "cyan", "l14": "orange"
};

// ---------------------
// React Component
// ---------------------
const PunctuationMasteryGuide: React.FC = () => {
    // State to track which lesson is currently detailed (or null if all are summarized)
    const [detailedLessonId, setDetailedLessonId] = useState<string | null>(null);

    // Get the color key for a specific lesson index
    const getColorKey = (index: number): keyof typeof colorShades => {
        return lessonColorsPassive[`l${index + 1}`] || "indigo"; // Default to indigo
    };

    // JSX Helper to render the detailed lesson content table
    const renderLessonDetail = useCallback((lesson: PunctuationLesson, index: number) => {
        const shades = colorShades[getColorKey(index)];

        const tableRows = lesson.data.map((rule, ruleIndex) => (
            <tr key={ruleIndex}>
                <td className="font-semibold text-gray-800">{rule.context}</td>
                {/* DANGER: Using dangerouslySetInnerHTML to preserve <strong> tags from original HTML/JS data. 
                    In a production app, this should be avoided or carefully sanitized. */}
                <td dangerouslySetInnerHTML={{ __html: rule.function }}></td>
                <td dangerouslySetInnerHTML={{ __html: rule.general }}></td>
                <td dangerouslySetInnerHTML={{ __html: rule.academic }}></td>
            </tr>
        ));

        return (
            <div className="space-y-8">
                <div className={`p-6 ${shades.bg} border ${shades.border_light} rounded-lg shadow-md mb-6`}>
                    <p className={`text-xl font-extrabold ${shades.text.replace('700', '900')} mb-1`}>
                        Structure / Symbol: {lesson.symbol}
                    </p>
                    <p className="text-lg text-gray-700">
                        {lesson.title} explains the usage of punctuation in general and academic contexts.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="lesson-table w-full min-w-max">
                        <thead>
                            <tr>
                                <th>Context</th>
                                <th>Function</th>
                                <th>General Example</th>
                                <th>Academic Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }, []);

    // Function to handle showing the detail view
    const showDetail = useCallback((key: string) => {
        setDetailedLessonId(key);
        // Scroll to the detail view after the state updates and the component re-renders
        setTimeout(() => {
            document.getElementById(`lesson-container-${key}`)?.scrollIntoView({ behavior: "smooth" });
        }, 0);
    }, []);

    // Function to handle showing the summary view
    const showSummary = useCallback(() => {
        setDetailedLessonId(null);
    }, []);

    // Hover state to apply inline left-border color (fallback when Tailwind classes aren't present)
    const [hoveredLesson, setHoveredLesson] = useState<string | null>(null);

    const colorHexMap: Record<string, { default: string; hover: string }> = {
        indigo: { default: '#4f46e5', hover: '#4338ca' },
        purple: { default: '#7c3aed', hover: '#6d28d9' },
        green: { default: '#16a34a', hover: '#15803d' },
        pink: { default: '#ec4899', hover: '#db2777' },
        cyan: { default: '#0891b2', hover: '#0e7490' },
        orange: { default: '#f97316', hover: '#ea580c' },
        yellow: { default: '#d97706', hover: '#b45309' },
        red: { default: '#dc2626', hover: '#b91c1c' },
    };

    return (
        <>
            {/* Inject Custom Styles */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            <header className="text-center mb-10 mt-10">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                    Punctuation Mastery Guide
                </h1>
                <p className="text-xl text-gray-500 font-light">
                    A complete step-by-step guide to English punctuation, from basics to advanced academic writing.
                </p>
            </header>

            <div className="max-w-4xl mx-auto min-h-screen">
                <main id="content-area" className="p-10 md:p-8 space-y-8">
                            {punctuationData.map((lesson, index) => {
                                const key = `l${index + 1}`;
                                const color = getColorKey(index);
                                const shades = colorShades[color];
                                const isDetailed = detailedLessonId === key;
                                const mainTitleColorClass = shades.text.replace('700', '800');

                                const hexColors = colorHexMap[color] ?? { default: '#6b7280', hover: '#4b5563' };

                                return (
                                    <div
                                        key={key}
                                        id={`lesson-container-${key}`}
                                        className={`lesson-card colored-left border-l-${color}-500 mb-6`}
                                        onMouseEnter={() => setHoveredLesson(key)}
                                        onMouseLeave={() => setHoveredLesson(null)}
                                        style={{ borderLeftColor: hoveredLesson === key ? hexColors.hover : hexColors.default }}
                                    >
                                        {/* Summary View */}
                                        {!isDetailed && (
                                            <div id={`lesson-summary-${key}`} className="content-section p-6">
                                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{index + 1}. {lesson.title}</h2>
                                                <p className="text-lg text-gray-600 mb-6">Master the {lesson.title} including examples for general and academic writing.</p>
                                                <button
                                                    onClick={() => showDetail(key)}
                                                    className={`primary-btn px-8 py-3 text-white font-semibold rounded-lg shadow-xl bg-${color}-600 hover:bg-${color}-700`}
                                                >
                                                    View Full Lesson Details →
                                                </button>
                                            </div>
                                        )}

                                        {/* Detail View */}
                                        {isDetailed && (
                                            <div id={`lesson-detail-${key}`} className="mt-8 mb-8 px-6 content-section">
                                                <button
                                                    onClick={showSummary}
                                                    className="mb-6 px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                                                >
                                                    ← Back to Summary
                                                </button>
                                                <h3 className={`text-3xl font-bold ${mainTitleColorClass} mb-8`}>{lesson.title}</h3>
                                                {renderLessonDetail(lesson, index)}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </main>
                    </div>
        </>
    );
}

export default PunctuationMasteryGuide;