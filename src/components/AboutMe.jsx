import fawwaz from "../assets/img/fawwaz.png";

export default function AboutMe() {
  return (
    <section
      className="top-0 max-md:bottom-0 left-0 relative max-md:sticky flex justify-end items-center bg-utama max-md:bg-transparent mt-[100vh] w-full h-screen font-jakarta"
      id="aboutMe">
      <div className="top-0 left-0 flex justify-center items-center max-md:p-0 px-12.5 py-6.25 w-4/5 max-md:w-full h-full">
        <div className="space-y-10 bg-white px-6.25 py-9 border border-black rounded-3xl w-full h-full">
          <div className="flex max-md:flex-col justify-between items-center max-md:gap-2 w-full">
            <span className="bg-black w-full h-px"></span>
            <div className="w-1/2 font-bold text-center">
              <h1 className="text-2xl tracking-[10px]">BAB 1</h1>
              <h2 className="text-3xl">About Me</h2>
            </div>
            <span className="bg-black w-full h-px"></span>
          </div>
          <div className="flex max-md:flex-col gap-4 w-full">
            <img
              src={fawwaz}
              alt=""
              className="rounded-3xl w-100 max-md:w-full h-110 max-md:h-40 object-cover max-md:object-[0px_-40px]"
            />
            <div>
              <div>
                <h1 className="text-2xl">
                  <span className="font-bold">Hello...</span> My name is
                </h1>
                <h2 className="text-3xl italic tracking-[5px]">
                  SECRET,
                  <span className="max-md:hidden text-sm not-italic tracking-normal">
                    Only someone with reason will realize it
                  </span>
                </h2>
                <h3 className="text-white cursor-default">
                  fawwaz romzi nagib
                </h3>
              </div>
              <div>
                <p className="max-md:line-clamp-5">
                  A student at the Abudzar Tahfizh Plus IT Islamic boarding
                  school who has a strong interest in Information Technology. He
                  has worked on numerous projects, including Indotravel,
                  Webkita, Portfolio, and Eduverse, most of which were developed
                  collaboratively in group settings. He is currently still
                  learning and is in the 10th grade of high school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
