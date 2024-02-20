import { useState } from "react";

function SomaliQuote() {
  const MaahMaah = [
    " ON THE OTHER SIDE OF STRUGGLE IS STRENGTH.",
    " THOSE WHO MIND SHOULDN'T MATTER, AND THOSE WHO MATTER SHOULDN'T MIND.",
    " HAPPINESS COMES FROM APPRECIATING EVERTYTHING THAT YOU HAVE NOT FOCUSING THE THINGS YOU DON'T.",
    " THE FUTURE BELONGS TO THOSE WHO BELIEVE THE BEAUTY OF THIER DREAMS.",
    " LIFE IS A ONE TIME OFFER, USE IT WELL.",
    " IF YOU CAN'T FIND A WAY , CREATE ONE",
    " YOU CAN'T START THE NEXT CHAPTER OF YOUR LIFE IF YOU KEEP RE-READING THE LAST ONE.",
    " IN THE MIDDLE OF DIFFICULTY LIES OPPURTUNITY.",
  
  ];

  const [index, setIndex] = useState(0);

  const nextBtn = () => {
    if (index < MaahMaah.length - 1) {
      setIndex(index + 1);
      console.log(MaahMaah[1])
    } 
  };

  const previousBtn = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };


  return (
    <div className="text-center">  
<h1 className= {`text-4xl mt-3 text-red-500 font-bold ${index === MaahMaah.length-1 ? "block" :"hidden" }`}>Dhamaad</h1>

<p className={`my-20 text-4xl ${index == 2 ?"text-lime-700" :" "}`}>{MaahMaah[index]}</p>
      <button onClick={previousBtn} className="bg-zinc-500 px-8 py-3 rounded text-white text-2xl" >Previous</button>
      <button onClick={nextBtn} className="bg-purple-500 px-8 py-3 rounded text-white ml-20 text-2xl"> Next</button>
    </div>
  );

  }
export default SomaliQuote;
