"use client";

import useStore from "./store";

export default function S1() {
  const sec1 = useStore((state) => state.sec1);
  return (
    <section
      style={{ left: sec1, top: -sec1 }}
      className="w-[100%] h-[100vh] overflow-hidden relative z-30"
    >
      <video
        src="/1.mp4"
        className="w-[100%] h-[100%] object-cover absolute"
        autoPlay
        playsInline
        muted
        loop
      >
        <source type="video/mp4" />
      </video>
      <div style={{transform:'translate(0,'+-(sec1/10)+'%)',opacity:(sec1/300+1)}} className="w-[100%] h-[100%] absolute flex flex-wrap justify-center content-center">
        <h1 className="w-[100%] lg:w-[51%] text-center text-[2rem] lg:text-[4rem] text-white font-bold">
          IF COMPARABLE <br /> IT IS NO LONGER BUGATTI
        </h1>
        <p className="w-[100%] lg:w-[100%] text-center text-[.8rem] text-white">
          ETTORE BUGATTI
        </p>
        <p className="w-[100%] lg:w-[30%] text-center text-[1.5rem] mt-6 text-white">
          Immerse yourself in a world <br /> of unparalleled artistry.
        </p>
      </div>
    </section>
  );
}
