

import { SparklesCore } from "./components/ui/Sparkles";
import './App.css'
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";



function App() {
  const words = [
    {
      text: "Build",
      className:"text-lg xl:h-1"
    },
    {
      text: "awesome",
      className:"text-lg"
    },
    {
      text: "apps",
      className:"text-lg"

    },
    {
      text: "with",
      className:"text-lg"

    },
    {
      text: "Aceternity.",
      className: "text-blue-500  text-lg dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#5c00a2] to-black flex flex-col items-start justify-center overflow-y-scroll">

    

    
       <div className=" h-[50vh] w-full flex flex-col items-center justify-end overflow-hidden">
      {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Aceternity
      </h1> */}
      <img src="src/assets/ge_transparent.png" alt="logo" className="w-[50vw] h-[30vh] mt-[-30vh]"/>
      <div className="w-[35vw] h-30 relative mt-[-10vh] ml-[15vw]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-[20vw] h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    <div className="flex justify-between p-4 h-[100vh]">

      <div className="h-[30vh] w-[50vw] border-[3px] border-dashed rounded-lg border-slate-500 mt-20 ml-10 text-wrap ">
      <TypewriterEffectSmooth words={words}   className="" cursorClassName="xl:h-5"/>
      </div>
    </div>


    </div>
    
  )
}

export default App
