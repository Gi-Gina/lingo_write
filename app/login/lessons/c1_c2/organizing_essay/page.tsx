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


const lessonContent: Record<LessonId, Lesson> = {
    "l1": {
        nav: "1. Narrative Essay",
        title: "Lesson 1: Narrative Essay – Storytelling & Chronology",
        summary: "Narrative essays tell a story using personal voice and chronological order, highlighting experiences, reflections, and insights.",
        html: `
            <p class="text-lg text-gray-700 mb-6">
                Narrative essays recount events or personal experiences in a structured sequence. They focus on storytelling, personal reflection, and conveying the significance of experiences.
            </p>

            <div class="space-y-6">

                <div class="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-blue-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> Set the scene and introduce the main event or experience.</li>
                        <li><strong>Body:</strong> Describe events in chronological order, including details, emotions, and interactions.</li>
                        <li><strong>Conclusion:</strong> Reflect on what you learned or how the experience affected you.</li>
                    </ul>
                </div>

                <div class="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-blue-800 mb-2">Example Narrative</h3>
                    <p class="text-gray-700">Topic: A memorable hiking trip</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> "One summer, I decided to hike up the hills near my hometown, seeking a break from my routine life."</li>
                        <li><strong>Body:</strong> "The climb was steep and tiring, but the encouragement from fellow hikers kept me going. I marveled at the vibrant wildflowers along the path and finally reached the peak by sunset."</li>
                        <li><strong>Conclusion:</strong> "This hike reminded me that patience and perseverance are key, and that taking small steps can lead to amazing rewards."</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l2": {
        nav: "2. Descriptive Essay",
        title: "Lesson 2: Descriptive Essay – Imagery & Sensory Details",
        summary: "Descriptive essays help readers vividly imagine people, places, objects, or experiences using sensory details and figurative language.",
        html: `
            <p class="text-lg text-gray-700 mb-6">
                Descriptive essays aim to immerse readers in the scene or subject by appealing to the senses and using vivid, figurative language. Writers focus on showing rather than telling.
            </p>

            <div class="space-y-6">

                <div class="p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-purple-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> Introduce the subject and set the tone.</li>
                        <li><strong>Body:</strong> Describe qualities or features in a logical order—spatially, thematically, or by importance. Use sensory details (sight, sound, smell, taste, touch) and figurative language (similes, metaphors, personification).</li>
                        <li><strong>Conclusion:</strong> Summarize impressions or feelings, leaving the reader with a lasting image or emotion.</li>
                    </ul>
                </div>

                <div class="p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-purple-800 mb-2">Example Descriptive Essay</h3>
                    <p class="text-gray-700">Topic: A peaceful mountain morning</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li>"The mountains rose like ancient guardians, their peaks brushing the soft morning clouds."</li>
                        <li>"A cool breeze carried the scent of pine and dew, while birds chirped melodiously in the distance."</li>
                        <li>"Sunlight spilled over the valleys, illuminating wildflowers that swayed gently, adding bursts of color to the serene landscape."</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l3": {
        nav: "3. Expository Essay",
        title: "Lesson 3: Expository Essay – Explaining & Clarifying",
        summary: "Expository essays inform, explain, or clarify a topic using clear facts, logical reasoning, and examples.",
        html: `
            <p class="text-lg text-gray-700 mb-6">
                Expository essays aim to provide the reader with a clear understanding of a topic. They focus on presenting information objectively, explaining processes, analyzing causes and effects, or clarifying concepts.
            </p>

            <div class="space-y-6">

                <div class="p-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-green-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> Present the topic, provide context, and state the main idea or thesis.</li>
                        <li><strong>Body:</strong> Explain points logically, support them with evidence, examples, or facts, and use clear transitions.</li>
                        <li><strong>Conclusion:</strong> Summarize key points, reinforce understanding, and clarify the significance of the topic.</li>
                    </ul>
                </div>

                <div class="p-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-green-800 mb-2">Example Expository Essay</h3>
                    <p class="text-gray-700">Topic: How renewable energy works</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li>"Solar panels capture sunlight and convert it into electricity through a process called the photovoltaic effect."</li>
                        <li>"When sunlight strikes the panels, it excites electrons in the cells, creating an electrical current."</li>
                        <li>"This electricity can be used immediately, stored in batteries, or supplied to the power grid, offering a cleaner alternative to fossil fuels."</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l4": {
        nav: "4. Argumentative / Persuasive Essay",
        title: "Lesson 4: Argumentative Essay – Persuading with Evidence",
        summary: "Argumentative essays aim to convince readers by presenting a clear position, supporting it with evidence, and addressing opposing viewpoints.",
        html: `
            <p class="text-lg text-gray-700 mb-6">
                Argumentative essays develop a strong thesis, build logical reasoning with evidence, and anticipate counterarguments to make a persuasive case.
            </p>

            <div class="space-y-6">

                <div class="p-6 bg-red-50 border border-red-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-red-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> Present your thesis and engage the reader with a hook.</li>
                        <li><strong>Body:</strong> Each paragraph presents a reason supporting the thesis, backed with evidence, examples, or data.</li>
                        <li><strong>Counterarguments:</strong> Acknowledge opposing views and explain why your position remains valid.</li>
                        <li><strong>Conclusion:</strong> Restate the thesis, summarize key points, and include a call to action or final thought.</li>
                    </ul>
                </div>

                <div class="p-6 bg-red-50 border border-red-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-red-800 mb-2">Example Argumentative Essay</h3>
                    <p class="text-gray-700">Topic: Why schools should teach financial literacy</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li>"Financial literacy equips students with essential life skills to manage money effectively."</li>
                        <li>"Research shows that young adults who understand budgeting and investments are less likely to accumulate debt."</li>
                        <li>"Some argue that other subjects are more important, but without basic financial knowledge, students are unprepared for real-world challenges."</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l5": {
        nav: "5. Compare & Contrast Essay",
        title: "Lesson 5: Compare & Contrast – Analyzing Similarities and Differences",
        summary: "Compare & contrast essays examine the similarities and differences between two subjects, ideas, or concepts using clear criteria and logical organization.",
        html: `
            <p class="text-lg text-gray-700 mb-6">
                A compare & contrast essay helps readers understand two subjects more deeply by exploring how they are alike and how they differ. 
                This type of writing is widely used in academic, analytical, and professional contexts.
            </p>

            <div class="space-y-6">

                <!-- Structure Box -->
                <div class="p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-cyan-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        
                        <li>
                            <strong>Block Method (Subject-by-Subject):</strong>
                            <ul class="list-disc pl-6">
                                <li>Paragraph 1: All key points about Subject A</li>
                                <li>Paragraph 2: All key points about Subject B</li>
                                <li>Best for simple topics or when subjects are easy to differentiate</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Point-by-Point Method:</strong>
                            <ul class="list-disc pl-6">
                                <li>Paragraph 1: Compare/contrast Point 1 of both subjects</li>
                                <li>Paragraph 2: Compare/contrast Point 2 of both subjects</li>
                                <li>Directly highlights similarities and differences</li>
                                <li>Ideal for detailed academic writing for clarity and coherence</li>
                            </ul>
                        </li>

                        <li><strong>Conclusion:</strong> Summarize key similarities and differences, and provide an overall evaluation or insight.</li>
                    </ul>
                </div>

                <!-- General Example -->
                <div class="p-6 bg-cyan-50 border border-cyan-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-cyan-800 mb-2">Example Compare & Contrast Essay</h3>
                    <p class="text-gray-700 mb-2"><strong>Topic:</strong> Online Learning vs Traditional Classroom Learning</p>

                    <p class="text-gray-700">
                        <strong>Introduction:</strong><br>
                        Online learning and traditional classroom education are two popular approaches to learning. 
                        While both aim to develop knowledge and skills, they differ in structure, interaction, and learning experience.
                    </p>

                    <p class="text-gray-700">
                        <strong>Point 1 – Learning Environment:</strong><br>
                        Traditional classrooms provide a structured environment with fixed schedules and direct engagement with teachers and peers. 
                        Online learning offers flexibility, allowing learners to study from anywhere and set their own pace. 
                        This flexibility suits busy learners, whereas classrooms provide consistent guidance and routine.
                    </p>

                    <p class="text-gray-700">
                        <strong>Point 2 – Interaction:</strong><br>
                        Classroom settings encourage face-to-face interaction, supporting discussion, collaboration, and instant feedback. 
                        Online learning often relies on emails, chats, or discussion boards, which can delay responses. 
                        As a result, classrooms may feel more engaging, while online learning provides convenience but less immediacy in interaction.
                    </p>

                    <p class="text-gray-700">
                        <strong>Conclusion:</strong><br>
                        Both online and traditional learning offer valuable experiences. Online education provides flexibility and accessibility, 
                        while traditional classrooms foster direct communication and community. The choice depends on learners’ needs, preferences, and learning styles.
                    </p>
                </div>

            </div>
        `
    },
    "l6": {
        nav: "6. Opinion Essay",
        title: "Lesson 6: Opinion Essay – Giving Your Opinion Clearly",
        summary: "Opinion essays provide a personal viewpoint with two strong supporting reasons and examples.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Opinion essays require a clear stance on a topic with well-developed reasoning and examples, suitable for IELTS Task 2.</p>

            <div class="space-y-6">

                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> Present topic and opinion</li>
                        <li><strong>Body 1:</strong> First reason with example</li>
                        <li><strong>Body 2:</strong> Second reason with example</li>
                        <li><strong>Body 3 (Optional):</strong> Acknowledge the Counter-Argument, then <strong>Refute</strong> it.</li>
                        <li><strong>Conclusion:</strong> Restate opinion</li>
                    </ul>
                </div>

                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">Band 7+ IELTS Example</h3>
                    <p class="text-gray-700">Topic: Online learning is better than traditional schools</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> “Online education has become increasingly popular worldwide, and I believe it offers significant advantages over traditional schooling.”</li>
                        
                        <li><strong>Body 1:</strong> “Firstly, online learning provides exceptional flexibility, allowing students to manage their schedules more effectively. For example, learners can attend classes or review materials whenever it suits them, which is especially beneficial for working students.”</li>

                        <li><strong>Body 2:</strong> “Secondly, digital platforms offer access to global academic resources, such as international webinars, expert-led courses, and extensive online libraries. This exposure enables students to broaden their knowledge beyond what a local school can provide.”</li>

                        <li><strong>Counter-Argument + Refutation:</strong> “Some people argue that online learning reduces social interaction. While this may be true to an extent, modern platforms now include discussion boards, group projects, and live sessions, which effectively replicate in-person communication.”</li>

                        <li><strong>Conclusion:</strong> “In conclusion, because of its flexibility and access to worldwide resources, online learning is a more advantageous option than traditional schooling.”</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l7": {
        nav: "7. Discussion Essay",
        title: "Lesson 7: Discussion Essay – Presenting Both Sides",
        summary: "Discussion essays explore opposing viewpoints and then give the writer's opinion, common in IELTS Task 2.",
        html: `
            <p class="text-lg text-gray-700 mb-6">Discussion essays require balanced analysis of both sides of an argument before stating a personal opinion.</p>

            <div class="space-y-6">

                <div class="p-6 bg-yellow-50 border border-yellow-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-yellow-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                         <li><strong>Introduction:</strong> Introduce the topic, explain the two sides of the debate, and signal that your opinion will appear in the conclusion.</li>
                        <li><strong>Body 1:</strong> Present and explain the first viewpoint with supporting examples or evidence.</li>
                        <li><strong>Body 2:</strong> Present the opposing viewpoint with clear reasons and examples.</li>
                        <li><strong>Body 3 (Recommended):</strong> Provide a balanced evaluation or common ground between the two sides, transitioning smoothly toward your final opinion.</li>
                        <li><strong>Conclusion:</strong> Summarize both arguments and clearly state your final opinion.</li>
                    </ul>
                </div>

                <div class="p-6 bg-yellow-50 border border-yellow-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-yellow-800 mb-2">Band 7+ IELTS Example</h3>
                    <p class="text-gray-700">Topic: Should public transport be free?</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                         <li><strong>Introduction:</strong> “There is ongoing debate about whether governments should make public transportation free for everyone. While some argue it would benefit society, others believe it would place too much financial strain on national budgets.”</li>

                            <li><strong>Body 1:</strong> “Supporters of free transport claim that removing fares would reduce traffic congestion and pollution, encouraging more people to choose buses and trains over private vehicles.”</li>

                            <li><strong>Body 2:</strong> “On the other hand, critics argue that fully subsidising transport systems is financially unsustainable. They believe that the enormous operational costs could limit funding for essential services such as healthcare and education.”</li>

                            <li><strong>Body 3 (Evaluation/Common Ground):</strong> “Both positions highlight important social priorities: environmental protection and financial responsibility. A balanced approach, such as offering free transport only to low-income groups or during peak pollution periods, may address both concerns.”</li>

                            <li><strong>Conclusion:</strong> “In my view, targeted subsidies are more realistic than completely free transport, as they retain the social benefits while reducing the financial burden on governments.”</li>
                        </ul>
                </div>

            </div>
        `
    },
    "l8": {
        nav: "8. Problem-Solution Essay",
        title: "Lesson 8: Problem-Solution Essay – Addressing Issues",
        summary: "Problem-Solution essays identify an issue, analyze causes, and suggest practical solutions for IELTS Task 2.",
        html: `
            <p class="text-lg text-gray-700 mb-6">These essays demonstrate analytical thinking by proposing solutions to real-world problems.</p>

            <div class="space-y-6">

                <div class="p-6 bg-pink-50 border border-pink-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-pink-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> Introduce the problem, explain its significance, and outline what the essay will discuss.</li>
                        <li><strong>Body 1 – Causes & Effects:</strong> Describe the main causes of the problem and explain the consequences for individuals, society, or the environment.</li>
                        <li><strong>Body 2 – Solutions:</strong> Present practical and realistic solutions. Explain how each solution addresses the causes or reduces the impact of the problem.</li>
                        <li><strong>Body 3 (Optional):</strong> Discuss which solution is most effective or how multiple solutions can work together. This strengthens coherence and supports Band 7+ analysis.</li>
                        <li><strong>Conclusion:</strong> Summarize the causes and solutions and offer a final statement about the importance of taking action.</li>
                    </ul>
                </div>

                <div class="p-6 bg-pink-50 border border-pink-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-pink-800 mb-2">Band 7+ IELTS Example</h3>
                    <p class="text-gray-700">Topic: Urban traffic congestion</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                        <li><strong>Introduction:</strong> “Traffic congestion has become one of the most pressing challenges in major cities, disrupting daily life and slowing economic activity. This essay will examine the main causes of this issue and propose effective solutions.”</li>

                        <li><strong>Body 1 – Causes & Effects:</strong> “A key cause of congestion is the rapid increase in private vehicle ownership, often due to inadequate public transport systems. As roads become overcrowded, travel times lengthen and air pollution worsens, negatively affecting public health.”</li>

                        <li><strong>Body 2 – Solutions:</strong> “To alleviate these problems, governments can expand and modernize public transport, making it a more attractive alternative to driving. Additionally, introducing congestion charges and promoting carpooling can reduce the number of cars on the road.”</li>

                        <li><strong>Body 3 – Evaluation (Optional):</strong> “Although several measures are available, improving public transport is arguably the most effective long-term solution, as it directly addresses the root cause: dependence on private vehicles.”</li>

                        <li><strong>Conclusion:</strong> “In conclusion, traffic congestion results from both increased car use and weak transport infrastructure. By adopting a combination of public transport upgrades and regulatory policies, cities can significantly reduce congestion and its harmful effects.”</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l9": {
        nav: "9. Advantages-Disadvantages Essay",
        title: "Lesson 9: Advantages-Disadvantages – Balanced Discussion",
        summary: "Advantages-Disadvantages essays discuss pros and cons of a topic, optionally providing an opinion.",
        html: `
            <p class="text-lg text-gray-700 mb-6">This essay type evaluates both benefits and drawbacks of a topic to form a reasoned judgment.</p>

            <div class="space-y-6">

                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">Structure</h3>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">
                         <li><strong>Introduction</strong>: Paraphrase the topic + state that you will discuss both sides.</li>
                        <li><strong>Body Paragraph 1 – Advantages</strong>: 
                            <ul class="list-disc pl-4">
                                <li>Topic sentence</li>
                                <li>Explain the advantage</li>
                                <li>Give an example</li>
                            </ul>
                        </li>
                        <li><strong>Body Paragraph 2 – Disadvantages</strong>:
                            <ul class="list-disc pl-4">
                                <li>Topic sentence</li>
                                <li>Explain the disadvantage</li>
                                <li>Give an example</li>
                            </ul>
                        </li>
                        <li><strong>Conclusion</strong>: Summarize both sides + optional personal opinion.</li>
                    </ul>
                </div>

                <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-indigo-800 mb-2">Band 7+ IELTS Example</h3>
                    <p class="text-gray-700">Topic: Living in a big city</p>
                    <ul class="list-disc pl-4 text-gray-700 space-y-1">

                        <li><strong>Introduction:</strong> Many people choose to live in large cities due to the lifestyle and opportunities they offer. While urban areas provide significant advantages, they also present several challenges. This essay will examine both the benefits and drawbacks of city life.</li>

                        <li><strong>Body 1 – Advantages:</strong> One major advantage of living in a big city is the availability of better employment opportunities. Cities typically host international companies and a wide range of industries, allowing residents to pursue well-paid and specialised careers. In addition, urban areas offer high-quality services such as modern hospitals, universities, and public transportation, which can greatly improve a person’s quality of life. For example, individuals in cities often have quicker access to emergency medical care compared to those in rural regions.</li>

                        <li><strong>Body 2 – Disadvantages:</strong> Despite these benefits, city life also has notable disadvantages. The first issue is overcrowding, which leads to long commute times and increased stress levels. Moreover, pollution from traffic and factories can seriously affect people’s health. Big cities are also known for their high cost of living, making it difficult for many residents to afford housing or save money. For instance, rental prices in major cities like London or Tokyo are significantly higher than in smaller towns.</li>

                        <li><strong>Conclusion:</strong> In conclusion, living in a big city offers improved job prospects and access to excellent public services but can also bring problems related to congestion, pollution, and high expenses. On balance, the advantages tend to outweigh the disadvantages for individuals who value career growth and convenience.</li>
                    </ul>
                </div>

            </div>
        `
    },
    "l10": {
        nav: "10. Writing Strong Body Paragraphs",
        title: "Lesson 10: Writing Strong Body Paragraphs – Using the Toulmin Framework",
        summary: "This lesson guides students in constructing clear, logical, and persuasive body paragraphs using the Toulmin model, a widely recognized framework for academic argumentation.",
        html: `
            <p class="text-lg text-gray-700 mb-6">
                Strong academic writing requires not just stating opinions but supporting them with evidence and reasoning. The <strong>Toulmin Framework</strong> provides a structured approach to develop well-supported arguments in essays and reports. By breaking down each paragraph into key components, students can enhance clarity, coherence, and persuasiveness in their writing.
            </p>

            <div class="space-y-6">

            <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold text-indigo-800 mb-2">Core Components of the Toulmin Framework</h3>
                <p class="text-gray-700 mb-3">
                    Each paragraph can be seen as an argument with distinct parts. Understanding these components ensures your ideas are logically presented:
                </p>
                <ul class="list-disc pl-4 text-gray-700 space-y-1">
                    <li><strong>Claim:</strong> The central point or assertion you are making. This should be clear, concise, and directly answer the essay question or task.</li>
                    <li><strong>Grounds (Evidence):</strong> Facts, statistics, examples, or expert opinions that support your claim. Reliable evidence strengthens credibility.</li>
                    <li><strong>Warrant:</strong> The reasoning or explanation that connects your evidence to your claim. It shows why your grounds logically support your point.</li>
                    <li><strong>Backing (Optional):</strong> Additional support for your warrant, such as background information or further data.</li>
                    <li><strong>Qualifier (Optional):</strong> Words or phrases that indicate the strength of your claim (e.g., “generally,” “in most cases”).</li>
                    <li><strong>Rebuttal (Optional):</strong> Anticipating counterarguments and addressing them, which demonstrates critical thinking and can elevate your band score.</li>
                </ul>
                <p class="text-gray-700 mt-4">
                    In IELTS essays, not every component is mandatory. Focus primarily on <strong>Claim, Grounds, and Warrant</strong> to maintain clarity and coherence. Including a <strong>Rebuttal</strong> can demonstrate advanced analytical skills and help achieve Band 7+.
                </p>
            </div>

            <div class="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold text-indigo-800 mb-2">Band 7+ IELTS Example</h3>
                <p class="text-gray-700 mb-3"><strong>Essay Topic:</strong> Online Education</p>
                <ul class="list-disc pl-4 text-gray-700 space-y-1">
                    <li><strong>Claim:</strong> Online education can serve as an effective alternative to traditional classroom learning.</li>
                    <li><strong>Grounds (Evidence):</strong> It provides flexibility for learners to study at their own pace and improves accessibility for students worldwide, including those in remote areas.</li>
                    <li><strong>Warrant:</strong> Because flexibility and accessibility allow students to balance personal commitments with learning, they are more likely to stay engaged and retain knowledge effectively.</li>
                    <li><strong>Backing:</strong> Research shows that students who can learn on flexible schedules demonstrate higher retention rates and report greater satisfaction compared to those in rigid classroom settings.</li>
                    <li><strong>Qualifier:</strong> While online education is generally effective, its success depends on the quality of course design and student motivation.</li>
                    <li><strong>Rebuttal:</strong> Critics argue that online learning lacks direct interaction; however, modern platforms with video conferencing, interactive forums, and collaborative projects mitigate these concerns, maintaining effective engagement.</li>
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
    const cardClass = `lesson-card border-l-4 border-solid ${borderClassesMap[lessonColor] ?? 'border-gray-500'} border-gray-200 px-6`;

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
                className={`content-section py-6  ${isDetailView ? 'hidden' : 'block'}`}
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


const EssayGuide: React.FC = () => {
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
        <div className="main-container">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                    Mastering Essay Writing: Types, Structures, and Strategies
                </h1>
                <p className="text-xl text-gray-500 font-light">
                    Learn how to write clear, effective essays across all major types, from narrative and descriptive to specific formats. This comprehensive guide covers structure, organization, and practical strategies, helping you craft essays that communicate ideas with clarity and impact.
                </p>
            </header>

            <div className="max-w-4xl mx-auto min-h-screen">
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

export default EssayGuide;