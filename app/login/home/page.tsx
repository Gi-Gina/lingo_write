import Link from "next/link";
export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-row w-screen h-screen bg-blue-200">
          <div className="flex flex-col bg-blue-200 w-1/5">
            <div className="text-2xl font-bold p-3"> 
              <h2>Welcome to LingoWrite</h2>
            </div>
            <ul>
          
              <li className="p-5 hover:bg-blue-300">
                <Link href="/login/home">A1 - A2</Link>
              </li>
              <li className="p-5 hover:bg-blue-300">  
                <Link href="/login/exercises">B1 - B2</Link>
              </li>
              <li className="p-5 hover:bg-blue-300">
                <Link href="/login/level-test">C1 - C2</Link>
              </li>
              <li className="p-5 hover:bg-blue-300">
                <Link href="/login/profile">Exercises</Link>
              </li>
             
              <li className="p-5 hover:bg-blue-300">
                <Link href="/login/help">Practise Essay Writing</Link>
              </li>
               <li className="p-5 hover:bg-blue-300">
                <Link href="/login/settings">Take a level test</Link>
              </li>
              
            </ul>
          </div>

          <div className="flex bg-blue-300 w-4/5 border-l-4 border-blue-300 rounded-l-4xl ">
          <div>
            
          </div>
            
          </div>
        </div>
      </div>
  );
}