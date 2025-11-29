"use client";
import React from 'react';

// NOTE: In a real-world application, you would configure Tailwind CSS
// for your project and use a dedicated CSS file (e.g., globals.css or a module CSS file)
// instead of inline <style> and CDN.
// For this single-file integration, we place the custom styles here.
const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f5f5f4;
    }
    .section-card {
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        transition: transform 0.3s ease;
    }
    .fade-in {
        animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    code { background-color: #f1f1f1; padding: 0.2rem 0.4rem; border-radius: 0.3rem; }
    
    /* Global table styles for better readability inside TSX */
    .table-header th {
        padding: 0.75rem; 
    }
    .table-body td {
        padding: 0.75rem;
    }
`;

const QualifierReferenceGuide: React.FC = () => {
    return (
        <>
            {/* Inject Custom Styles */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            {/* Note: The original <body> tag wrapper is simulated here by the top-level div 
                and the body-specific CSS applied via the style tag. */}
            <div>
                
                <header className="text-center mb-6 mt-6">
                    <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                        Complete Qualifier Reference Guide
                    </h1>
                    <p className="text-xl text-gray-500 font-light">
                        Explore formal, academic, and precise qualifiers for effective scholarly writing.
                    </p>
                </header>

                <main id="content-area" className="p-6 md:p-10 space-y-12">

                    {/* SECTION 1: FOUNDATION */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">1.</span> Foundation: Understanding Qualifiers
                        </h2>
                        <p className="text-stone-600 mb-6">Qualifiers are words or phrases that <strong>modify statements</strong> to express certainty, probability, extent, or restriction. They are essential for precision and objectivity in academic writing.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Qualifier Type</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Function / Meaning</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Degree / Extent</td>
                                        <td className="text-stone-700">Indicates intensity or amount</td>
                                        <td className="text-stone-700">e.g., <span className="font-bold text-indigo-800">largely</span>, <span className="font-bold text-indigo-800">considerably</span>, <span className="font-bold text-indigo-800">markedly</span></td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Probability / Likelihood</td>
                                        <td className="text-stone-700">Indicates possibility or chance</td>
                                        <td className="text-stone-700">e.g., <span className="font-bold text-indigo-800">likely</span>, <span className="font-bold text-indigo-800">possibly</span>, <span className="font-bold text-indigo-800">may</span>, <span className="font-bold text-indigo-800">might</span></td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Frequency / Regularity</td>
                                        <td className="text-stone-700">Indicates how often something occurs</td>
                                        <td className="text-stone-700">e.g., <span className="font-bold text-indigo-800">generally</span>, <span className="font-bold text-indigo-800">often</span>, <span className="font-bold text-indigo-800">rarely</span></td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Limitation / Scope</td>
                                        <td className="text-stone-700">Restricts claims to certain conditions</td>
                                        <td className="text-stone-700">e.g., <span className="font-bold text-indigo-800">in most cases</span>, <span className="font-bold text-indigo-800">under certain conditions</span>, <span className="font-bold text-indigo-800">to some extent</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 2: FORMAL ACADEMIC ALTERNATIVES */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">2.</span> Formal Academic Replacements
                        </h2>
                        <p className="text-stone-600 mb-6">Replace informal qualifiers to achieve <strong>professional and objective tone</strong>.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Informal Qualifier</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Formal Academic Replacement</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">very</td>
                                        <td className="font-semibold">considerably / substantially / markedly</td>
                                        <td className="text-stone-700">The results were <span className="font-bold text-indigo-800">substantially</span> affected by the intervention.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">a bit / slightly</td>
                                        <td className="font-semibold">marginally / to a minor degree / moderately</td>
                                        <td className="text-stone-700">The hypothesis was <span className="font-bold text-indigo-800">marginally</span> supported by the data.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">probably</td>
                                        <td className="font-semibold">likely / appears to / is expected to</td>
                                        <td className="text-stone-700">The effect <span className="font-bold text-indigo-800">is likely</span> to vary across populations.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">really / very much</td>
                                        <td className="font-semibold">to a considerable degree / substantially</td>
                                        <td className="text-stone-700">The findings align <span className="font-bold text-indigo-800">to a considerable degree</span> with prior research.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">sort of / kind of</td>
                                        <td className="font-semibold">somewhat / to a certain extent</td>
                                        <td className="text-stone-700">The method is <span className="font-bold text-indigo-800">somewhat</span> effective under controlled conditions.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 3: HEDGING AND CAUTION */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">3.</span> Hedging and Cautious Statements
                        </h2>
                        <p className="text-stone-600 mb-6">Academic writing often requires <strong>softening claims</strong> to avoid overgeneralization. Hedging maintains credibility.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Qualifier / Hedge</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Usage / Function</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Example</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">may / might</td>
                                        <td className="text-stone-700">Indicates possibility</td>
                                        <td className="text-stone-700">The results <span className="font-bold text-indigo-800">may</span> indicate a trend toward higher efficiency.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">appears / seems</td>
                                        <td className="text-stone-700">Shows tentative observation</td>
                                        <td className="text-stone-700">The intervention <span className="font-bold text-indigo-800">appears</span> to have limited impact.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">generally / typically</td>
                                        <td className="text-stone-700">Indicates common patterns</td>
                                        <td className="text-stone-700">Participants <span className="font-bold text-indigo-800">generally</span> responded positively.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">to some extent / partially</td>
                                        <td className="text-stone-700">Limits the scope of claims</td>
                                        <td className="text-stone-700">The model is valid <span className="font-bold text-indigo-800">to some extent</span> under these conditions.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 4: COMMON ERRORS */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">4.</span> Common Errors and Pitfalls
                        </h2>
                        <p className="text-stone-600 mb-6">Avoid these frequent mistakes to maintain clarity and academic precision.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Error Focus</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Incorrect Example</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Correction / Rule</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold text-red-700">Overuse of "very"</td>
                                        <td className="text-red-700 italic line-through">This is very important for understanding the topic.</td>
                                        <td className="text-green-700">Replace "very" with precise term: <span className="font-bold text-green-900">substantially important</span>.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold text-red-700">Vague hedging</td>
                                        <td className="text-red-700 italic line-through">This might be correct.</td>
                                        <td className="text-green-700">Use academically precise hedging: <span className="font-bold text-green-900">This finding may indicate...</span></td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold text-red-700">Informal qualifiers in reports</td>
                                        <td className="text-red-700 italic line-through">The data is sort of helpful.</td>
                                        <td className="text-green-700">Replace with formal: <span className="font-bold text-green-900">The data is somewhat informative.</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 5: PRACTICE AND APPLICATION */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">5.</span> Practice and Application
                        </h2>
                        <p className="text-stone-600 mb-6">Use these exercises to apply qualifiers correctly in academic contexts.</p>
                        <ul className="list-disc pl-6 text-stone-700 space-y-2">
                            <li>Rewrite informal sentences using <strong>formal qualifiers</strong>:  
                                <br/><code>The results are very good.</code> → <code>The results are <span className="font-bold text-indigo-800">substantially positive</span>.</code>
                            </li>
                            <li>Add appropriate <strong>hedging</strong> to statements:  
                                <br/><code>This method works perfectly.</code> → <code>This method <span className="font-bold text-indigo-800">appears</span> to work effectively.</code>
                            </li>
                            <li>Identify <strong>overused or vague qualifiers</strong> and replace them with precise alternatives in a paragraph of your choice.</li>
                            <li>Practice <strong>limiting claims</strong> with scope qualifiers:  
                                <br/><code>All participants preferred the new curriculum.</code> → <code><span className="font-bold text-indigo-800">Most participants</span> preferred the new curriculum.</code>
                            </li>
                        </ul>
                    </div>

                </main>
            </div>
        </>
    );
}

export default QualifierReferenceGuide;