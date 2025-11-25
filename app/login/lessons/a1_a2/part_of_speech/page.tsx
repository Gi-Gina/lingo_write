"use client";

import React, {  useState } from 'react';

// Define the structure of a single concept for TypeScript clarity
interface Concept {
  id: string;
  name: string;
  keyword: string;
  color: string;
  definition: string;
  example: string;
  detail: {
    title: string;
    explanation: string;
    rules: string[];
    extraExample: string;
    highlightWords: string[];
  };
}

// --- DATA STRUCTURE MOVED INSIDE COMPONENT CONTEXT ---
const concepts: Concept[] = [
  {
    id: 'noun',
    name: 'Noun',
    keyword: 'Thing/Concept',
    color: 'indigo',
    definition:
      'A person, place, thing, or idea. They function as the subject or object of a sentence.',
    example: 'The <strong>dog</strong> chased the <strong>ball</strong> in the <strong>park</strong>.',
    detail: {
      title: 'Nouns: The Foundation of Language',
      explanation: `
        Nouns are the building blocks of language because they name all people, places, things, and ideas. 
        They typically serve as the subject or object in a sentence and establish the core meaning around 
        which all other words function. Understanding the different categories of nouns is essential for 
        mastering subject–verb agreement, using determiners correctly, and forming clear, precise sentences 
        in both spoken and academic writing.
      `,
      rules: [
        '<strong>Common Nouns</strong> – general names for people, places, things, or ideas (e.g., <em>teacher</em>, <em>river</em>, <em>freedom</em>).',
        '<strong>Proper Nouns</strong> – specific names of individuals, places, organizations, or events; they are always capitalized (e.g., <em>Yangon</em>, <em>Sarah</em>, <em>NASA</em>).',
        '<strong>Concrete Nouns</strong> – refer to physical, tangible objects that can be perceived with the senses (e.g., <em>apple</em>, <em>building</em>, <em>dog</em>).',
        '<strong>Abstract Nouns</strong> – refer to intangible concepts, emotions, or qualities (e.g., <em>justice</em>, <em>happiness</em>, <em>knowledge</em>).',
        '<strong>Collective Nouns</strong> – refer to groups considered as a single unit (e.g., <em>team</em>, <em>committee</em>, <em>flock</em>).',
        '<strong>Countable Nouns</strong> can be counted (e.g., <em>books</em>, <em>ideas</em>) and take plural forms.',
        '<strong>Uncountable Nouns</strong> cannot be counted (e.g., <em>information</em>, <em>water</em>) and do not take plural forms.',
        "Nouns also change form to show plurality (e.g., <em>cat → cats</em>) or possession (e.g., <em>Sarah's book</em>).",
      ],
      extraExample: `
        During her <strong>vacation</strong> to <strong>Spain</strong>, 
        <strong>Sarah</strong> took many <strong>pictures</strong>.
      `,
      highlightWords: ['vacation', 'Spain', 'Sarah', 'pictures'],
    },
  },
  {
    id: 'pronoun',
    name: 'Pronoun',
    keyword: 'Replacement',
    color: 'purple',
    definition: 'Replaces a noun (or a noun phrase) to avoid repetition.',
    example: '<strong>She</strong> told <strong>him</strong> that <strong>it</strong> was late.',
    detail: {
      title: 'Pronouns: Avoiding Repetition',
      explanation:
        'Pronouns serve as shortcuts for nouns, making sentences flow better and preventing redundant phrasing. They reduce repetition, maintain clarity, and allow for concise communication. Care must be taken to ensure pronouns clearly refer back to their antecedents, avoiding ambiguity. Understanding different types of pronouns and their correct usage is essential for grammatical accuracy and advanced writing style.',
      rules: [
        '<strong>Subjective Pronouns</strong>: Used when the pronoun performs the action (e.g., *I, you, he, she, we, they*).',
        '<strong>Objective Pronouns</strong>: Used when the pronoun receives the action (e.g., *me, you, him, her, us, them*).',
        '<strong>Possessive Pronouns</strong>: Indicate ownership, replacing nouns (e.g., *mine, yours, his, hers, ours, theirs*).',
        '<strong>Possessive Adjectives</strong>: Show ownership but modify nouns (e.g., *my, your, his, her, our, their*).',
        '<strong>Reflexive Pronouns</strong>: Refer back to the subject of the clause (e.g., *myself, yourself, himself, herself, ourselves, themselves*).',
        '<strong>Pronoun Chart:</strong><br>' +
          '<table className="table-auto border border-gray-300 mt-2 w-full text-left">' +
          '<tr className="bg-purple-100"><th className="border px-2 py-1">Type</th><th className="border px-2 py-1">Examples</th></tr>' +
          '<tr><td className="border px-2 py-1">Subjective</td><td className="border px-2 py-1">I, you, he, she, we, they</td></tr>' +
          '<tr><td className="border px-2 py-1">Objective</td><td className="border px-2 py-1">me, you, him, her, us, them</td></tr>' +
          '<tr><td className="border px-2 py-1">Possessive Pronouns</td><td className="border px-2 py-1">mine, yours, his, hers, ours, theirs</td></tr>' +
          '<tr><td className="border px-2 py-1">Possessive Adjectives</td><td className="border px-2 py-1">my, your, his, her, our, their</td></tr>' +
          '<tr><td className="border px-2 py-1">Reflexive</td><td className="border px-2 py-1">myself, yourself, himself, herself, ourselves, themselves</td></tr>' +
          '</table>',
      ],
      extraExample:
        '<strong>They</strong> believed <strong>us</strong> after <strong>we</strong> showed <strong>them</strong> the evidence.',
      highlightWords: ['They', 'us', 'we', 'them'],
    },
  },
  {
    id: 'verb',
    name: 'Verb',
    keyword: 'Action/State',
    color: 'green',
    definition:
      'A word that expresses an action, occurrence, or state of being. Verbs are essential for forming complete sentences.',
    example: 'I <strong>ran</strong> fast and <strong>felt</strong> happy.',
    detail: {
      title: 'Verbs: Driving the Sentence',
      explanation: `
        Verbs are the core of every sentence because they express what the subject does, experiences, or 
        the state it is in. They determine tense (past, present, future), aspect (simple, continuous, 
        perfect), mood (indicative, imperative, subjunctive), and sometimes voice (active or passive). 
        Verbs are classified into several types, each serving a unique function. Mastering verbs is 
        crucial for producing grammatically correct and fluent English, as they dictate sentence structure 
        and agreement with the subject. Additionally, advanced usage includes phrasal verbs, modal verbs, 
        and verb patterns that affect meaning and nuance.
      `,
      rules: [
        '<strong>Action Verbs</strong> – express physical or mental actions. They can be <em>transitive</em> (requiring an object, e.g., "She <strong>wrote</strong> a letter") or <em>intransitive</em> (no object, e.g., "He <strong>ran</strong> fast").',
        '<strong>Linking Verbs</strong> – connect the subject to a complement that describes or identifies it (e.g., "She <strong>is</strong> happy", "They <strong>became</strong> teachers").',
        '<strong>Auxiliary (Helping) Verbs</strong> – combine with main verbs to indicate tense, mood, or voice (e.g., "She <strong>has eaten</strong>", "They <strong>are running</strong>").',
        '<strong>Modal Verbs</strong> – express possibility, necessity, or ability (e.g., <em>can, could, may, might, must, shall, should, will, would</em>). Example: "You <strong>must</strong> complete your homework."',
        '<strong>Phrasal Verbs</strong> – verbs combined with particles/prepositions to create a new meaning (e.g., <em>give up, look after, break down</em>). Example: "He <strong>gave up</strong> smoking."',
        'Verbs change form based on tense, number, and person. Example: "I <strong>run</strong>" vs. "He <strong>runs</strong>", "She <strong>was walking</strong>" vs. "They <strong>have walked</strong>".',
        'Advanced considerations include <strong>voice</strong> (active vs. passive) and <strong>aspect</strong> (simple, continuous, perfect, perfect continuous) to express the timing and nature of actions accurately.',
      ],
      extraExample: `
        She <strong>was walking</strong> to the classroom when the bell <strong>rang</strong>, 
        and the students <strong>stopped</strong> to listen.
      `,
      highlightWords: ['was walking', 'rang', 'stopped'],
    },
  },
  {
    id: 'adjective',
    name: 'Adjective',
    keyword: 'Description',
    color: 'yellow',
    definition: 'Describes or modifies a noun or pronoun. It answers: which one, what kind, or how many?',
    example: 'The <strong>spotted</strong>dog ate the <strong>large</strong>cookie.',
    detail: {
      title: 'Adjectives: Adding Detail',
      explanation:
        'Adjectives enrich writing by providing specificity about the nouns they modify. They are often placed before the noun they describe but can also follow linking verbs (as complements), where they are known as predicate adjectives. The correct ordering of multiple adjectives (e.g., opinion, size, age, color, origin, material, purpose) is a subtle yet important aspect of sounding natural in English.',
      rules: [
        'Adjectives can often be compared using suffixes (*-er, -est*) or words (*more, most*).',
        '<strong>Articles</strong>(*a, an, the*) are considered a special type of adjective.',
        'Many adjectives end in suffixes like *-ful, -ous, -able* (e.g., *beautiful, famous, capable*).',
      ],
      extraExample:
        'A <strong>small</strong>, <strong>blue</strong>bird sang a <strong>joyful</strong>song from the <strong>highest</strong>branch.',
      highlightWords: ['small', 'blue', 'joyful', 'highest'],
    },
  },
  {
    id: 'adverb',
    name: 'Adverb',
    keyword: 'Modification',
    color: 'orange',
    definition:
      'Describes or modifies a verb, adjective, or another adverb. It answers: how, when, where, or to what extent?',
    example: 'He walked <strong>slowly</strong>and spoke <strong>very</strong>clearly.',
    detail: {
      title: 'Adverbs: Modifying Everything Else',
      explanation:
        'Adverbs provide essential context to actions and descriptions. They help answer questions like: How did it happen? When did it happen? Where did it happen? or To what degree? Unlike adjectives, adverbs are highly flexible in their placement, often moving to the beginning, middle, or end of a sentence. Their primary function is to qualify or intensify the meaning of other words, giving more precise context to the action.',
      rules: [
        'Adverbs modifying verbs usually tell *how* (e.g., *loudly*), *when* (e.g., *soon*), or *where* (e.g., *upstairs*).',
        'When modifying adjectives or other adverbs, they express degree (e.g., *too, almost, extremely*).',
        'Adverbs can be placed in several positions within a sentence, sometimes changing the meaning.',
      ],
      extraExample:
        'We <strong>almost</strong>missed the show because the train arrived <strong>late</strong><strong>yesterday</strong>.',
      highlightWords: ['almost', 'late', 'yesterday'],
    },
  },
  {
    id: 'preposition',
    name: 'Preposition',
    keyword: 'Relationship',
    color: 'cyan',
    definition:
      'Shows the relationship (time, place, direction) between a noun/pronoun and another word, forming a prepositional phrase.',
    example: 'The book is <strong>on</strong>the table <strong>by</strong>the door.',
    detail: {
      title: 'Prepositions: Establishing Context',
      explanation:
        'Prepositions always begin a prepositional phrase, which ends with an object (a noun or pronoun). They connect these objects to the rest of the sentence to show spatial or temporal relationships. Although a small class of words, prepositions are crucial for establishing clear context and precise relationships between elements in a sentence. They often cause confusion because their usage can be idiomatic (e.g., *interested in* vs. *interested about*).',
      rules: [
        'Common simple prepositions include *in, at, on, by, with, from, about*.',
        'Complex prepositions use two or more words (e.g., *according to, in front of*).',
        'The object of the preposition is always a noun or pronoun in the objective case.',
      ],
      extraExample:
        'She walked <strong>across</strong>the bridge <strong>toward</strong>the city <strong>after</strong>sunset.',
      highlightWords: ['across', 'toward', 'after'],
    },
  },
  {
    id: 'conjunction',
    name: 'Conjunction',
    keyword: 'Connector',
    color: 'red',
    definition:
      'Joins words, phrases, or clauses (Coordinating: FANBOYS; Subordinating: *although, because*).',
    example: 'I like apples <strong>and</strong>oranges, <strong>but</strong>I hate pears.',
    detail: {
      title: 'Conjunctions: The Sentence Glue',
      explanation:
        'Conjunctions provide structure by linking different parts of speech or independent thoughts together, creating complex and compound sentences. They define the logical relationship between the linked items, such as cause and effect (subordinating) or simple addition (coordinating). Properly using conjunctions is key to avoiding run-on sentences and comma splices, and achieving mature sentence variety.',
      rules: [
        '<strong>Coordinating</strong>conjunctions (FANBOYS: *For, And, Nor, But, Or, Yet, So*) connect elements of equal grammatical rank.',
        '<strong>Subordinating</strong>conjunctions (*because, although, since, when*) introduce a dependent clause.',
        '<strong>Correlative</strong>conjunctions (*either/or, neither/nor*) always come in pairs and connect grammatically equal elements.',
      ],
      extraExample:
        '<strong>Neither</strong>the students <strong>nor</strong>the teacher were ready, <strong>so</strong>the lesson was postponed.',
      highlightWords: ['Neither', 'nor', 'so'],
    },
  },
  {
    id: 'interjection',
    name: 'Interjection',
    keyword: 'Emotion',
    color: 'pink',
    definition:
      'A sudden exclamation; expresses emotion or sudden feeling, often followed by an exclamation point.',
    example: '<strong>Wow!</strong>Ouch! Aha! I got it.',
    detail: {
      title: 'Interjections: Expressing Sudden Feeling',
      explanation:
        'Interjections are words or phrases that stand alone, outside the grammatical structure of the sentence. They are used to express surprise, joy, pain, or other immediate, strong emotions. While common in spoken and informal language, they are generally avoided in formal or academic writing. They are unique because they do not modify or relate to any other part of the sentence.',
      rules: [
        'A strong interjection is followed by an exclamation mark (*Ouch!*), while a milder one is followed by a comma (*Well,*).',
        'Common examples include *Hey, Oops, Great, Darn, Yikes*.',
        'They are not grammatically connected to the rest of the sentence.',
      ],
      extraExample:
        "<strong>Oops</strong>, I dropped the files. <strong>Oh dear</strong>, I hope they aren't damaged!",
      highlightWords: ['Oops', 'Oh dear'],
    },
  },
];

// --- STYLES CONVERTED TO TSX (For use in the component) ---
// In a real Next.js project, these would be moved to a CSS file or styled components.
const globalStyles = `
  /* You MUST move these styles into a global CSS file or a dedicated CSS module (e.g., styles.css or Module.css) in Next.js. */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
  body {
      font-family: 'Inter', sans-serif;
      background-color: #f7f9fb; /* Light background */
      color: #1f2937;
      min-height: 100vh;
  }
  .card {
      background-color: white; /* White card background */
      border-left-width: 6px; /* Thick left border for color coding */
      border-radius: 0.75rem; /* rounded-xl */
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      cursor: pointer; /* Indicate clickability */
  }
  .card:hover {
      box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
  }
  .example-block {
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
      border: 1px solid #e5e7eb;
      transition: all 0.2s;
      background-color: #f9fafb;
  }
  .example-block:hover {
      box-shadow: none;
      transform: none;
  }
  .gradient-text {
      color: #1f2937;
      font-weight: 900;
  }
  .filter-btn {
      border: 1px solid #d1d5db;
      background-color: white;
      color: #4b5563;
  }
  .tab-active {
      background-color: #eff6ff;
      border-color: #2563eb;
      color: #1e40af;
      box-shadow: 0 0 5px rgba(37, 99, 235, 0.2);
      font-weight: 700;
  }
  .border-indigo-400 { border-color: #818cf8; } .text-indigo-700 { color: #4338ca; } .bg-indigo-700 { background-color: #4338ca; }
  .border-purple-400 { border-color: #c084fc; } .text-purple-700 { color: #7e22ce; } .bg-purple-700 { background-color: #7e22ce; }
  .border-green-400 { border-color: #4ade80; } .text-green-700 { color: #047857; } .bg-green-700 { background-color: #047857; }
  .border-yellow-400 { border-color: #facc15; } .text-yellow-700 { color: #b45309; } .bg-yellow-700 { background-color: #b45309; }
  .border-orange-400 { border-color: #fb923c; } .text-orange-700 { color: #c2410c; } .bg-orange-700 { background-color: #c2410c; }
  .border-cyan-400 { border-color: #22d3ee; } .text-cyan-700 { color: #0e7490; } .bg-cyan-700 { background-color: #0e7490; }
  .border-red-400 { border-color: #f87171; } .text-red-700 { color: #b91c1c; } .bg-red-700 { background-color: #b91c1c; }
  .border-pink-400 { border-color: #f472b6; } .text-pink-700 { color: #be185d; } .bg-pink-700 { background-color: #be185d; }
`;

// Helper function to handle word highlighting
const highlightWords = (text: string, words: string[]): string => {
  if (typeof text !== 'string') {
    return '';
  }
  let result = text;
  words.forEach((word) => {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedWord})\\b(?!([^<]*?<\/span>))`, 'g');
    result = result.replace(regex, `<span className="highlight">$1</span>`);
  });
  // Handle words already bolded in data (using <strong>)
  result = result.replace(/<strong>(.*?)<\/strong>/g, (match, p1) => 
    `<span className="highlight">${p1}</span>`
  );
  return result;
};

// Component Structure
const PartsOfSpeechExplainer: React.FC = () => {
  // --- STATE MANAGEMENT (Simplified initial setup) ---
  const [currentView, setCurrentView] = useState<{ name: 'list' | 'detail'; id: string | null }>({
    name: 'list',
    id: null,
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // React component for the List Card (extracted from old function)
  const Card: React.FC<{ concept: Concept; handleCardClick: (id: string) => void }> = ({
    concept,
    handleCardClick,
  }) => {
    const colorClass = `text-${concept.color}-700`;
    const borderClass = `border-${concept.color}-400`;
    const bgColorClass = `bg-${concept.color}-700`;
    const highlightedExample = highlightWords(concept.example, concept.detail.highlightWords || []);

    // Replaced data-concept-id with onClick handler
    return (
      <div
        onClick={() => handleCardClick(concept.id)}
        className={`card p-6 ${borderClass} flex flex-col justify-between shadow-lg hover:shadow-xl`}
      >
        <div>
          <div className="flex justify-between items-start mb-4">
            <h2 className={`text-xl md:text-2xl font-extrabold ${colorClass}`}>{concept.name}</h2>
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${bgColorClass} shadow-md`}
            >
              {concept.keyword}
            </span>
          </div>
          <p className="text-gray-700 mb-4">{concept.definition}</p>

          <div className="example-block">
            <h3 className="text-sm font-semibold text-gray-600 mb-1">Quick Example:</h3>
            {/* DANGER: Using dangerouslySetInnerHTML to render HTML from the data structure */}
            <p
              className="text-gray-800 italic text-base"
              dangerouslySetInnerHTML={{ __html: highlightedExample }}
            />
          </div>
        </div>
      </div>
    );
  };

  // Helper to filter concepts based on state
  const filteredConcepts =
    activeFilter === 'all'
      ? concepts
      : concepts.filter((c) => c.id === activeFilter);

  // --- EVENT HANDLERS CONVERTED TO REACT FUNCTIONS ---

  const goToView = (viewName: 'list' | 'detail', conceptId: string | null = null) => {
    setCurrentView({ name: viewName, id: conceptId });
  };

  const handleCardClick = (id: string) => {
    goToView('detail', id);
  };

  const handleFilterClick = (id: string) => {
    setActiveFilter(id);
  };

  // --- VIEW RENDERING LOGIC ---

  const renderList = () => {
    return (
      <React.Fragment>
        {/* Header Area */}
        <div id="header-area" className="mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
              The Eight Pillars of English
            </h1>
            <p className="text-lg md:text-xl text-gray-600">Mastering the Building Blocks of Language</p>
          </div>
          <div
            id="filter-container"
            className="mt-8 p-4 bg-white rounded-full shadow-lg flex flex-wrap gap-3 justify-center border border-gray-200"
          >
            <button
              onClick={() => handleFilterClick('all')}
              className={`filter-btn px-5 py-2 text-sm md:text-base rounded-full transition duration-150 hover:bg-gray-50 ${
                activeFilter === 'all' ? 'tab-active' : ''
              }`}
            >
              Show All Concepts
            </button>
            {concepts.map((c) => (
              <button
                key={c.id}
                onClick={() => handleFilterClick(c.id)}
                className={`filter-btn px-5 py-2 text-sm md:text-base rounded-full transition duration-150 hover:bg-gray-50 ${
                  activeFilter === c.id ? 'tab-active' : ''
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area (Grid) */}
        <div id="content-area">
          <div id="pos-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredConcepts.map((concept) => (
              <Card key={concept.id} concept={concept} handleCardClick={handleCardClick} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderDetail = (concept: Concept) => {
    const colorClass = `text-${concept.color}-700`;
    const bgColorClass = `bg-${concept.color}-700`;
    const borderClass = `border-${concept.color}-400`;
    const highlightedDetailExample = highlightWords(
      concept.detail.extraExample,
      concept.detail.highlightWords || []
    );

    return (
      <React.Fragment>
        {/* Header Area (Back Button) */}
        <div id="header-area" className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => goToView('list')}
              className="flex items-center text-gray-600 hover:text-gray-800 transition duration-150 p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to All Parts of Speech
            </button>
            <span
              className={`px-4 py-1 text-sm font-semibold rounded-full text-white ${bgColorClass} shadow-md`}
            >
              {concept.keyword}
            </span>
          </div>
          {/* Ensuring the title is left aligned and has proper bottom margin before content area */}
          <h1 className={`text-4xl md:text-5xl font-extrabold ${colorClass} text-left`}>
            {concept.detail.title}
          </h1>
        </div>

        {/* Content Area (Detail) */}
        <div id="content-area">
          <div className="mt-10 grid grid-cols-1 gap-8">
            {/* Explanation Section */}
            <div className={`p-8 bg-white ${borderClass} card shadow-xl`}>
              <h2 className={`text-3xl font-extrabold ${colorClass} mb-4`}>Core Function</h2>
              <p className="text-xl text-gray-700 leading-relaxed">{concept.detail.explanation}</p>
            </div>

            {/* Rules Section */}
            <div className={`p-8 bg-white ${borderClass} card shadow-xl`}>
              <h2 className={`text-2xl font-bold ${colorClass} mb-4`}>Usage Rules & Examples</h2>
              <ul className="space-y-3 text-gray-800">
                {concept.detail.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`h-5 w-5 ${colorClass} mt-1 shrink-0 mr-2`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {/* DANGER: Using dangerouslySetInnerHTML for rules containing HTML tags (<strong>, <table>) */}
                    <span className="text-base" dangerouslySetInnerHTML={{ __html: rule }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Example Section */}
            <div className={`example-block border-2 ${borderClass} p-6`}>
              <h3 className={`text-xl font-bold ${colorClass} text-gray-700 mb-2`}>
                Detailed Sentence Example:
              </h3>
              {/* DANGER: Using dangerouslySetInnerHTML to render HTML from the data structure */}
              <p
                className={`text-gray-800 ${colorClass} text-lg`}
                dangerouslySetInnerHTML={{ __html: highlightedDetailExample }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  // Determine which view to render
  const selectedConcept = concepts.find((c) => c.id === currentView.id);

  // --- MAIN RENDER ---
  return (
    <div className="p-4 md:p-10">
      {/* NOTE ON STYLES: 
        The original HTML used a <style> block and a script tag for Tailwind. 
        In Next.js, you must either:
        1. Ensure Tailwind CSS is properly configured and imported.
        2. Move the custom CSS rules above into a global stylesheet (e.g., styles/globals.css).
        
        For this conversion, I'm including a <style> tag, which is generally discouraged 
        but functionally equivalent to the original HTML.
      */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <div className="max-w-6xl mx-auto">
        {/* Render the appropriate view */}
        {currentView.name === 'list' && renderList()}
        {currentView.name === 'detail' && selectedConcept && renderDetail(selectedConcept)}
      </div>
    </div>
  );
};

export default PartsOfSpeechExplainer;