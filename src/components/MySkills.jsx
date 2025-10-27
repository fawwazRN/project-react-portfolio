import { skill as mySkill } from "./asset";

export default function MySkills() {
  return (
    <section
      className="max-md:top-0 max-md:left-0 relative max-md:sticky flex justify-end items-center bg-utama max-md:bg-transparent w-full h-screen font-jakarta"
      id="mySkills">
      <div className="flex justify-center items-center max-md:p-0 px-12.5 py-6.25 w-4/5 max-md:w-full h-full">
        <div className="flex flex-col justify-between items-center gap-10 bg-white px-6.25 py-9 border border-black rounded-3xl w-full h-full">
          <div className="flex max-md:flex-col justify-between items-center max-md:gap-2 w-full">
            <span className="bg-black w-full h-px"></span>
            <div className="w-1/2 font-bold text-center">
              <h1 className="text-2xl tracking-[10px]">BAB 2</h1>
              <h2 className="text-3xl">My Skills</h2>
            </div>
            <span className="bg-black w-full h-px"></span>
          </div>
          <div className="flex flex-col items-center gap-5 px-20 max-md:px-0 pt-5 max-md:pt-0 border-2 border-black w-full h-full">
            <h1 className="bg-black py-2 rounded-full max-md:rounded-none w-full font-bold text-white max-md:text-lg text-center">
              {"List My Skill (2025)"}
              <span className="max-md:hidden"> - hover to see it</span>
            </h1>
            <div className="justify-items-center items-center grid grid-cols-4 w-full">
              {mySkill.map((item) => (
                <p
                  key={item.name}
                  className="max-md:hidden hover:bg-black hover:px-6 hover:py-2 hover:pb-4 rounded-b-full hover:font-bold hover:text-white transition-all duration-300">
                  {item.name}
                </p>
              ))}
            </div>
            <div className="justify-items-center items-end grid grid-cols-4 w-full h-full text-white">
              {mySkill.map((item) => (
                <div
                  key={item.name}
                  className="relative flex justify-items-center items-center bg-transparent max-md:bg-[#0b2f1c]/70 hover:bg-[#0b2f1c]/70 rounded-t-full w-20 h-1 max-md:h-full hover:h-full transition-all duration-300">
                  <div
                    className="bottom-0 left-0 absolute flex max-md:flex-col justify-center bg-[#0b2f1c] pt-5 border border-black rounded-t-full w-full max-md:text-sm max-md:text-center"
                    style={{ height: `${item.persent}%` }}>
                    <h1>{item.persent}%</h1>
                    <p className="hidden max-md:block">{item.nama}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
