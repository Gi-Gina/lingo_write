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
        background-color: #f5f5f4; /* stone-100 */
    }
   
    .section-card {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease;
    }
    .fade-in {
        animation: fadeIn 0.5s ease-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    /* Add padding globally for table cells in TSX */
    .table-header th, .table-body td {
        padding: 0.75rem; 
    }
`;

const QuantifierReferenceGuide: React.FC = () => {
    return (
        <>
            {/* Inject Custom Styles */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            <div >
                
                <header className="text-center mb-6 mt-6">
                    <h1 className="text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                        Complete Quantifier Reference Guide
                    </h1>
                    <p className="text-xl text-gray-500 font-light">
                        All rules, nuances, and formal academic replacements in one scrollable document for precise writing.            
                    </p>
                </header>
            

                <main id="content-area" className="p-6 md:p-10 space-y-12">
                    
                    {/* SECTION 1: FOUNDATION */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">1.</span> Foundation: Count vs. Non-Count Nouns
                        </h2>
                        <p className="text-stone-600 mb-6">The use of a quantifier depends entirely on the type of noun it modifies. <span className="font-bold text-indigo-800">Countable (C) Nouns</span> are things you can count (e.g., students, errors). <span className="font-bold text-indigo-800">Non-Countable (NC) Nouns</span> are things you cannot count (e.g., information, effort).</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Quantifier Category</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Countable (C) Use</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Non-Countable (NC) Use</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Large Amount</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Many</span> / <span className="font-bold text-indigo-800">A large number of</span></td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Much</span> / <span className="font-bold text-indigo-800">A great deal of</span></td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Small Amount</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Few</span> / <span className="font-bold text-indigo-800">A handful of</span></td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Little</span> / <span className="font-bold text-indigo-800">A minimal amount of</span></td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">General/Shared</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A lot of, Some, Any, Enough</span></td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A lot of, Some, Any, Enough</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 2: NUANCE */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">2.</span> Nuance: Positive vs. Negative Meaning
                        </h2>
                        <p className="text-stone-600 mb-6">This section focuses on the crucial distinction between positive quantifiers (indicating sufficiency) and negative quantifiers (indicating scarcity or lack).</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Quantifier(s)</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Positive (Sufficient)</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Negative (Scarcity)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">A few / Few (C)</td>
                                        <td className="text-green-800 bg-green-50">We have <span className="font-bold text-green-900">a few</span> chairs left. (Enough.)</td>
                                        <td className="text-red-800 bg-red-50"><span className="font-bold text-red-900">Few</span> schools adopted the protocol. (Not many/Hardly any.)</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">A little / Little (NC)</td>
                                        <td className="text-green-800 bg-green-50">I need <span className="font-bold text-green-900">a little</span> time to finish. (Some time.)</td>
                                        <td className="text-red-800 bg-red-50">There was <span className="font-bold text-red-900">little</span> evidence to support the claim. (Not enough evidence.)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 3: SCOPE */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">3.</span> Scope: Defining Proportions
                        </h2>
                        <p className="text-stone-600 mb-6">These quantifiers are used to discuss proportion, distribution, and total inclusion in quantitative analysis.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Quantifier(s)</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Function</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Academic/Analytical Application</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">All / Every / Each</td>
                                        <td className="text-stone-700">Total Inclusion</td>
                                        <td className="text-stone-700">Universal Scope: Used to generalize or ensure complete coverage (e.g., <span className="font-bold text-indigo-800">Each</span> trial lasted one hour.).</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Most / Most of</td>
                                        <td className="text-stone-700">Majority</td>
                                        <td className="text-stone-700">Prevalence/Tendency: Discusses the dominant proportion (e.g., The <span className="font-bold text-indigo-800">majority of</span> respondents favored the measure.).</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold">Either / Neither</td>
                                        <td className="text-stone-700">Choice of Two</td>
                                        <td className="text-stone-700">Bipolar Analysis: Used when discussing two options (e.g., <span className="font-bold text-indigo-800">Neither</span> methodology proved to be superior.).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 4: ACADEMIC STYLE (EXPANDED AGAIN) */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">4.</span> Academic Style and Formal Replacements (Highly Expanded)
                        </h2>
                        <p className="text-stone-600 mb-6">Elevate your writing by replacing informal quantifiers with precise, formal terms suitable for academic papers and reports. The use of these alternatives conveys a more professional and objective tone.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Informal Quantifier</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Formal Replacement</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Example of Academic Use</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    {/* Large Quantities (Countable) */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">A lot of (C)</td>
                                        <td className="font-semibold">A substantial number of / Numerous</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Numerous</span> ethical concerns were raised.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Loads of (C)</td>
                                        <td className="font-semibold">A multitude of / A significant pool of</td>
                                        <td className="text-stone-700">The study drew on <span className="font-bold text-indigo-800">a significant pool of</span> primary data.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Many (C)</td>
                                        <td className="font-semibold">A considerable number of / A high incidence of</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A considerable number of</span> variables were controlled during the experiment.</td>
                                    </tr>
                                    {/* Large Quantities (Non-Countable) */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">A lot of (NC)</td>
                                        <td className="font-semibold">A significant amount of / A great deal of</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A significant amount of</span> capital was required.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Plenty of (NC)</td>
                                        <td className="font-semibold">A surplus of / Ample resource / Sufficient quantity of</td>
                                        <td className="text-stone-700">The project was established with <span className="font-bold text-indigo-800">ample resource</span> allocation.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Very much so (NC)</td>
                                        <td className="font-semibold">To a considerable degree / Substantially / Markedly</td>
                                        <td className="text-stone-700">The results align <span className="font-bold text-indigo-800">to a considerable degree</span> with prior findings.</td>
                                    </tr>
                                    {/* Total Inclusion / Majority */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Almost all</td>
                                        <td className="font-semibold">The vast majority of / The preponderance of / Nearly all</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">The vast majority of</span> the available literature suggests...</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Pretty much all</td>
                                        <td className="font-semibold">Almost the entirety of / Nearly every instance</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Almost the entirety of</span> the sample responded positively.</td>
                                    </tr>
                                    {/* Moderate/Sufficient Quantities */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Enough (NC)</td>
                                        <td className="font-semibold">Adequate volume of / Sufficient scope of</td>
                                        <td className="text-stone-700">The policy requires <span className="font-bold text-indigo-800">adequate volume of</span> data for validation.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Some (C)</td>
                                        <td className="font-semibold">A portion of / Certain individuals/elements</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A portion of</span> the committee disagreed with the findings.</td>
                                    </tr>
                                    {/* Small Quantities (Countable) */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Some / A few</td>
                                        <td className="font-semibold">A subset of / A moderate number of</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A moderate number of</span> studies support this hypothesis.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Very few</td>
                                        <td className="font-semibold">A minimal number of / Scarcely any / Only a handful of</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A minimal number of</span> participants withdrew from the trial.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Hardly any</td>
                                        <td className="font-semibold">A negligible quantity of / Almost zero instances</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A negligible quantity of</span> contaminants was detected.</td>
                                    </tr>
                                    {/* Small Quantities (Non-Countable) */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">A little bit of (NC)</td>
                                        <td className="font-semibold">A minor proportion of / A limited degree of</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A minor proportion of</span> variance can be attributed to error.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Not much (NC)</td>
                                        <td className="font-semibold">A negligible amount of / Limited resource / Very little</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A negligible amount of</span> funding was allocated to the sub-project.</td>
                                    </tr>
                                    {/* Fractional/Exceptional */}
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Half of</td>
                                        <td className="font-semibold">A moiety of / Fifty percent (50%) of the sample</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">A moiety of</span> the population reported a positive correlation.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="text-stone-600 italic">Not all</td>
                                        <td className="font-semibold">A fraction of / Not every instance / Select components</td>
                                        <td className="text-stone-700"><span className="font-bold text-indigo-800">Not every instance</span> conforms entirely to the theoretical model.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SECTION 5: COMMON ERRORS */}
                    <div className="section-card bg-white p-6 rounded-xl border border-stone-200 fade-in">
                        <h2 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                            <span className="text-3xl mr-3">5.</span> Common Errors and Pitfalls
                        </h2>
                        <p className="text-stone-600 mb-6">Avoid these common mistakes to maintain the highest level of grammatical and academic precision.</p>
                        <div className="overflow-x-auto rounded-lg border border-stone-200">
                            <table className="w-full min-w-max">
                                <thead className="bg-stone-100 table-header">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Error Focus</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Incorrect Example</th>
                                        <th className="text-left text-sm font-semibold text-stone-600 uppercase tracking-wider">Correct Rule/Correction</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 table-body">
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold text-red-700">Less vs. Fewer</td>
                                        <td className="text-red-700 italic line-through">I made less mistakes.</td>
                                        <td className="text-green-700"><span className="font-bold text-green-900">Fewer</span> (C) is for number. <span className="font-bold text-green-900">Less</span> (NC) is for amount. Correct: I made <span className="font-bold text-green-900">fewer</span> mistakes.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold text-red-700">Non-Count Plurals</td>
                                        <td className="text-red-700 italic line-through">I need many advices.</td>
                                        <td className="text-green-700"><span className="font-bold text-green-900">Advice</span> and <span className="font-bold text-green-900">information</span> are non-count. Do not pluralize. Use <span className="font-bold text-green-900">a great deal of advice</span>.</td>
                                    </tr>
                                    <tr className="hover:bg-stone-50">
                                        <td className="font-semibold text-red-700">Amount vs. Number</td>
                                        <td className="font-semibold text-red-700 italic line-through">A large amount of people.</td>
                                        <td className="text-green-700"><span className="font-bold text-green-900">Amount</span> (NC) is for mass. <span className="font-bold text-green-900">Number</span> (C) is for count. Correct: A large <span className="font-bold text-green-900">number</span> of people.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>

            </div>
        </>
    );
}

export default QuantifierReferenceGuide;