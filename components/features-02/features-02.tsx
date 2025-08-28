import Image from "next/image";

const features = [
  {
    title: "Mision",
    description: "Mejorar la calidad de vida de los pacientes y sus familias potencializando sus habilidades, generándoles nuevas oportunidades, a través de atenciones innovadoras, especializadas y exitosas donde la familia participa efectivamente, junto a un equipo de especialistas que basa su trabajo en la experiencia, profesionalismo, respeto, confianza, responsabilidad e igualdad de derechos.",
    src: "/assets/images/ArcaGeneral2.jpg",
  },
  {
    title: "Vision",
    description: "Ofrecer a la ciudadanía un servicio altamente calificado, de vanguardia e innovador, personalizadl apoyándonos en la tecnología de punta y las buenas practicas para potencializar las habilidades neurológicas de los niños, como también asesorar a organizaciones y empresas con el objetivo de ayudar a sus recursos humanos.",
    src: "/assets/images/ArcaGeneral3.jpg",
  },
];

const Features02Page = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full">
        <h2 className="text-4xl text-primary sm:text-5xl font-bold tracking-tight text-center">
          Mision y Vision
        </h2>
        <div className="mt-10 flex justify-center gap-12 max-w-screen-lg w-full mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col text-start flex-1">
              <div className="mb-5 sm:mb-6 w-full aspect-[4/5] bg-muted rounded-xl"> <Image src={feature.src} width={500} height={300} alt={feature.title} className="object-cover w-full h-full rounded-xl" /></div>
              <span className="text-2xl font-semibold tracking-tight">
          {feature.title}
              </span>
              <p className="mt-2 text-muted-foreground text-[17px]">
          {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
