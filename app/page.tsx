import Link from "next/link";
import { BookOpen, Brain, PencilLine, Clock, } from "lucide-react";
import "./globals.css";

export default function Home() {
  return (
    <div>
      
      <div className="flex flex-col items-center justify-center ">
        <div className="text-center text-5xl mt-50 mb-5 font-bold px-10">
          <h1>
            AI-Powered English Writing Learning     
          </h1>
        </div>
        <div className="text-center text-2xl text-gray-700 mt-5 mb-5 px-5">
          <p>
            Master grammar and academic writing from A1 to C2. Get instant AI feedback on your exercises and improve your writing in real-time.
          </p>
        </div>
        <div className="mt-5 mb-10">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-blue-600">
          <Link href="/login/home">
            Get Started
          </Link>
        </button>
        </div>
    </div>
    <div className=" px-5 mt-10 mb-20 flex flex-col items-center" id="features">
      
      <h1 className="text-3xl font-bold mt-10 mb-10 ">
        Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl
        ">

        {/* Feature 1 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-600 transition">
          <div className="flex flex-col items-center text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold">Comprehensive Grammar</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Learn parts of speech, tenses, sentence structure, and advanced grammar concepts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-600 transition">
          <div className="flex flex-col items-center text-center">
            <Brain className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-2xl font-bold">AI-Powered Feedback</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Receive instant corrections with explanations for clarity and accuracy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-600 transition">
          <div className="flex flex-col items-center text-center">
            <PencilLine className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-2xl font-bold"> Argumentation Skills</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Master Toulmin, PEEL, and other academic frameworks.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-600 transition">
          <div className="flex flex-col items-center text-center">
            <Clock className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-2xl font-bold">Self-Paced Learning</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Progress from A1 to C2 with structured lessons and AI support.
          </p>
        </div>

      </div>
    </div>
   <div className="px-5 mt-10 mb-10 flex flex-col items-center" id="exercises">

      <h1 className="text-3xl font-bold mb-10 mt-10">
        Start Learning from your level
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl">

        {/* Feature 1 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-200 transition">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold">A1 - A2</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Learn parts of speech, tenses, sentence structure, and advanced grammar concepts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-200 transition">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold">B1 - B2</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Receive instant corrections with explanations for clarity and accuracy.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-blue-200 transition">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold">C1 - C2</h3>
          </div>
          <p className="text-gray-600 mt-3">
            Master Toulmin, PEEL, and other academic frameworks.
          </p>
        </div>

      </div>
    </div>
    <div className="px-5 mt-10 mb-20 flex flex-col items-center" id="test">
    
      <h1 className="text-2xl font-bold text-red-600 mb-10 mt-10">
        Don't know your level? Start here! 
      </h1>
  
        <div className="p-7 rounded-2xl shadow-md bg-white hover:shadow-lg shadow-red-200 transition items-center justify-center ">
          
          <p className="text-gray-600 mt-3">
            Find out your English proficiency level with our comprehensive assessment.
          </p>
          <div className="flex justify-center items-center">
          <button className="mt-5 bg-red-500 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-red-600">
            Start Test
          </button>
          </div>
        </div>
    </div>
   <div className="bg-blue-200 py-16" id="about">
  <div className="max-w-4xl mx-auto px-5 text-center">
    
    <h2 className="text-3xl font-bold text-black mb-6">
      About LingoWrite
    </h2>

    <p className="text-gray-700 text-xl leading-relaxed">
      LingoWrite helps learners improve their English grammar and writing skills from beginner 
      (A1) to advanced (C2) levels. Through structured HTML lessons and real-time AI feedback, 
      students can understand grammar rules, practice writing effectively, and receive instant guidance 
      to refine their skills.
    </p>

  </div>
</div>



  </div>
  );
}
