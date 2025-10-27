import indo from "../assets/indo-conv.webm";

export default function Hero() {
  return (
    <section
      className="top-0 fixed flex justify-end max-md:justify-center items-center w-full h-screen font-jakarta text-white"
      id="hero">
      <div className="relative w-4/5 max-md:w-full h-full">
        <video
          src={indo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"></video>
        <div className="top-0 left-0 z-20 absolute bg-black opacity-80 w-full h-full"></div>
        <div className="top-0 left-0 z-30 absolute flex flex-col justify-center items-start max-md:items-center gap-7 px-15.5 max-md:px-3 w-full h-full">
          <div className="max-md:text-center">
            <h2 className="max-md:text-3xl text-5xl">Lets Discover</h2>
            <h1 className="font-bold max-md:text-5xl text-7xl">My Portfolio</h1>
          </div>
          <div className="space-y-4 max-md:w-full">
            <div className="flex max-md:justify-between gap-4 max-md:gap-0">
              <a
                href=""
                className="bg-utama px-7.5 max-md:px-5 py-2 rounded-full font-bold max-md:text-xl text-2xl">
                Home
              </a>
              <a
                href="#aboutMe"
                className="bg-utama px-7.5 max-md:px-5 py-2 rounded-full font-bold max-md:text-xl text-2xl">
                About Me
              </a>
              <a
                href="#mySkills"
                className="bg-utama px-7.5 max-md:px-5 py-2 rounded-full font-bold max-md:text-xl text-2xl">
                My Skills
              </a>
            </div>
            <div className="flex max-md:justify-between gap-4">
              <a
                href="#myProject"
                className="bg-utama px-7.5 py-2 rounded-full font-bold text-2xl">
                My Project
              </a>
              <a
                href="#contact"
                className="bg-utama px-7.5 py-2 rounded-full font-bold text-2xl">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
