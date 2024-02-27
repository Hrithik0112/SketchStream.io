import React from "react";

function Hero() {
  return (
    <section className="bg-black">
      <div className="flex items-baseline justify-center pt-20">
        <h2 className="border border-gray-500 bg-[#253b4d] text-white rounded-full py-2 px-4 gap-2">
          See whats new | <span className="text-sky-300">AI Diagram &gt;</span>
        </h2>
      </div>
      <div className="mx-auto max-w-screen-xl h-screen px-4 py-6 lg:items-center">
        <div className="mx-auto max-w-5xl text-center mt-10">
          <h1 className="text-7xl text-sky-300 font-extrabold xl:text-7xl ">
            Documents & diagrams
            <strong className="font-extrabold text-white xl:block "> for engineering teams</strong>
          </h1>

          <p className="mt-10 text-gray-400 max-w-xl mx-auto text-xl leading-8 font-medium">
            All-in-one markdown editor, collaborative canvas,
            <span>and diagram-as-code builder</span>
          </p>

          <div className="mt-10 flex justify-center items-center">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200 block"
              href="#"
            >
              Try eraser &#8594;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
