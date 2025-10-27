import { useState } from "react";

export default function Header() {
  const [hover, setHover] = useState(null);
  const menu = [
    { judul: "Home", link: "#" },
    { judul: "About Me", link: "#aboutMe" },
    { judul: "My Skills", link: "#mySkills" },
    { judul: "My Project", link: "#myProject" },
    { judul: "Contact Me", link: "#contact" },
  ];
  return (
    <header className="max-md:hidden top-0 left-0 z-50 fixed flex justify-center items-center bg-utama w-1/5 h-screen font-jakarta font-bold text-[30px] text-white">
      <ul className="px-15">
        {menu.map((item, index) => (
          <li
            className="relative"
            key={index}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}>
            <a href={item.link}>{item.judul}</a>
            <div
              className={`bg-white h-1 transition-all duration-300 absolute ${
                hover === index ? "w-full" : "w-0"
              }`}></div>
          </li>
        ))}
      </ul>
    </header>
  );
}
