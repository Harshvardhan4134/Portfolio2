export function AboutMe() {
  return (
    <div className="space-y-2 p-8 max-w-3xl">
      <div className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        Hey there! I'm <span className="font-bold text-black dark:text-white">Harshvardhan</span>, a Mechanical Engineering student from{" "}
        <span className="group relative inline font-bold text-violet-600 hover:text-violet-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg">
          Vizag
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-10">
            <img 
              src="/assets/image1.jpg" 
              alt="Vizag Beach" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-violet-600 shadow-lg"
            />
          </div>
          <div className="absolute -top-2 -right-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform group-hover:scale-110 z-10">
            <img 
              src="/assets/image2.jpg" 
              alt="Vizag Skyline" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-violet-600 shadow-lg"
            />
          </div>
        </span>
      </div>

      <div className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        My passion? Turning complexity into simplicity. I love the sweet spot where engineering meets technology—
        where code serves a purpose and data tells a story.
      </div>

      <div className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        If you don't find me developing, I'll be{" "}
        <span className="group relative inline font-bold text-violet-600 hover:text-violet-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg">
          killing bots
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-10">
            <img 
              src="/assets/killing-bots.gif" 
              alt="Killing bots animation" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-violet-600 shadow-lg"
            />
          </div>
          <div className="absolute -top-2 -right-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform group-hover:scale-110 z-10">
            <img 
              src="/assets/image3.jpg" 
              alt="FPS bots fight" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-violet-600 shadow-lg"
            />
          </div>
        </span>
        {" "}in PFP games or{" "}
        <span className="group relative inline font-bold text-violet-600 hover:text-violet-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:drop-shadow-lg">
          scoring goals
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 z-10">
            <img 
              src="/assets/football.gif" 
              alt="Football scoring animation" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-violet-600 shadow-lg"
            />
          </div>
          <div className="absolute -top-2 -right-20 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform group-hover:scale-110 z-10">
            <img 
              src="/assets/image4.jpg" 
              alt="Goal net" 
              className="w-16 h-16 rounded-lg object-cover border-2 border-violet-600 shadow-lg"
            />
          </div>
        </span>
        {" "}in the ground ⚽
      </div>

      <div className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        If you're into technology, innovation, or just good conversations, let's connect! ☕
      </div>
    </div>
  );
}
