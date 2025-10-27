import { useState } from "react";
export default function Contact() {
  const [NDepan, setNDepan] = useState("");
  const [NBelakang, setNBelakang] = useState("");
  const [Message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const noHP = "0000000000";
    const text = `hallo, saya ${NDepan} ${NBelakang}%0A%0A${Message}`;
    const masukWA = `//api.whatsapp.com/send?phone=62${noHP}&text=${text}`;
    window.open(masukWA, "_blank");
  };
  return (
    <section
      className="max-md:top-0 max-md:left-0 relative max-md:sticky flex justify-end items-center bg-utama max-md:bg-transparent w-full h-screen font-jakarta"
      id="contact">
      <div className="top-0 left-0 flex justify-center items-center max-md:p-0 px-12.5 py-6.25 w-4/5 max-md:w-full h-full">
        <div className="space-y-10 bg-white px-6.25 py-9 border border-black rounded-3xl w-full h-full">
          <div className="flex max-md:flex-col justify-between items-center max-md:gap-2 w-full">
            <span className="bg-black w-full h-px"></span>
            <div className="w-1/2 font-bold text-center">
              <h1 className="text-2xl tracking-[10px]">ANY</h1>
              <h2 className="text-3xl">QuestioN</h2>
            </div>
            <span className="bg-black w-full h-px"></span>
          </div>
          <form
            className="flex flex-col justify-between gap-5 w-full h-4/5"
            onSubmit={submit}>
            <div className="flex justify-between gap-15 max-sm:gap-3">
              <input
                type="text"
                placeholder="Nama Depan"
                onChange={(e) => setNDepan(e.target.value)}
                required
                className="py-2 pl-5 border border-black rounded-full w-full"
              />
              <input
                type="text"
                placeholder="Nama Belakang"
                onChange={(e) => setNBelakang(e.target.value)}
                required
                className="py-2 pl-5 border border-black rounded-full w-full"
              />
            </div>
            <textarea
              required
              placeholder="kata kata hari ini"
              onChange={(e) => setMessage(e.target.value)}
              className="p-5 border border-black rounded-2xl w-full h-full"></textarea>
            <button
              type="submit"
              className="bg-black py-3 rounded-full w-full text-white cursor-pointer">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
