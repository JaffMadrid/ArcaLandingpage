import React from "react";
import VideoPlayer from "../ui/videoPlayer";

const Hero03 = () => {
  return (
    <div className=" w-full flex flex-col gap-10 items-center justify-start my-8 py-12 pt-12 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="mt-1 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Deja una huella en Metros Cuadrados
        </h1>
        <p className="mt-6 text-[17px] md:text-xl">
          Sumate a nuestra campaña de recaudacion de fondos para finalizar el primer nivel de nuestro centro de rehabilitacion 
        </p>
      </div>
      <div className="relative w-full max-w-screen-xl mx-auto aspect-video bg-accent rounded-xl overflow-hidden">
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Hero03;
