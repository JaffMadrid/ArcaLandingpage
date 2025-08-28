import React from "react";
import Image from "next/image";

const Hero04 = () => {
  return (
    <div className="  flex items-center justify-center py-12 overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6  lg:py-0">
        <div className="my-auto">
          <h1 className="mt-6 max-w-[17ch] text-primary text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Arca de esperanzas: Nuestra historia
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Somos una Asociación de padres de familia y especialistas, que
            atiende a niños y niñas, jóvenes y adultos con lesiones cerebrales o
            que desean elevar su rendimiento neurológico.
            <br />
            <br />
            En el año 2000 gracias a la iniciativa de la Lic. Nelly Galeano
            quien junto con la Lic. Lorena Castillo y otros 2 padres de familia
            fue creada la Asociación Para el Desarrollo Integral del Niño y
            Adulto con Lesión Cerebral “Arca de Esperanzas” obteniendo su
            personería Jurídica en el año 2002, con el objetivo de brindar
            atención a niños, jóvenes y adultos con lesión cerebral o riesgo de
            padecerla a través de terapias innovadoras no invasivas y que han
            sido exitosas en su aplicación.
            <br />
            <br />
            Desde entonces Arca de Esperanzas ha brindado atención a cientos de
            niños, jóvenes y adultos, así como a sus familias considerando que
            la participación de las familias en el proceso de rehabilitación de
            sus hijos es un factor muy importante para alcanzar logros
            importantes en su recuperación.
            <br />
            <br />
            Actualmente Arca de Esperanzas gracias a la gestión de su Directora
            Ejecutiva la Lic. Lorena Castillo se encuentra ejecutando el
            proyecto de construcción de las nuevas instalaciones del Centro de
            Rehabilitación con apoyo financiero del BMZ/NANGINA de Alemania,
            este se realizara en varias etapas y contara con modernas áreas de
            atención debidamente equipadas para brindar una atención integral en
            todas las áreas de terapias.
          </p>
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <div className="w-full aspect-video bg-accent rounded-xl overflow-hidden">
            <Image
              src="/assets/images/ArcaGeneral1.jpg"
              alt="Arca General 1"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-video bg-accent rounded-xl overflow-hidden">
            <Image
              src="/assets/images/edificioarca.jpg"
              alt="Edificio Arca"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero04;
