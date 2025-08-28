import { CircleSmall } from "lucide-react";
import Image from "next/image";

const Features03Page = () => {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-start px-6">
      <div className="w-full max-w-screen-lg mx-auto px-6">
        <h2 className="text-3xl leading-10 text-primary sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight text-center">
          Asociación Arca de Esperanzas <br />
        </h2>
        <h3 className="text-xl leading-7 sm:text-2xl md:text-[28px] md:leading-[2.5rem] font-semibold tracking-tight text-center">
          Nuestros Programas
        </h3>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl overflow-hidden"><Image src="/assets/images/Reorganizacion1.jpeg" alt="Reorganizacion 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>

            <span className="text-2xl font-semibold tracking-tight">
              Reorganización Neurológica
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Estrategia de rehabilitación que consiste en la realización de una serie de ejercicios a nivel neurológico que permite la organización neuronal en el cerebro del paciente con lesión cerebral
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Se enfoca en &quot;recapitular&quot; las etapas motoras y sensoriales tempranas, como rodar o gatear, para desbloquear patrones neuronales y recuperar habilidades motoras, cognitivas y lingüísticas perdidas o que no se han desarrollado adecuadamente
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Media 1 Desktop */}
            <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden"> <Image src="/assets/images/Reorganizacion1.jpeg" alt="Reorganizacion 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>

          {/* Media 2 Desktop */}
          <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden"> <Image src="/assets/images/Equinoterapia1.jpg" alt="Equinoterapia 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>
          {/* Card 2 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl overflow-hidden"> <Image src="/assets/images/Equinoterapia1.jpg" alt="Equinoterapia 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>

            <span className="text-2xl font-semibold tracking-tight">
              Equinoterapia (Terapia asistida con caballos)
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Es una terapia complementaria a las ya existentes, que utiliza el movimiento tridimensional del caballo como mediador para mejorar la calidad de vida de las personas con discapacidad física, psíquica y sensorial, problemas de salud mental y/o problemas de adaptación social.

                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    El caballo actúa como una base dinámica de soporte sobre la que la persona puede coordinar y controlar sus movimientos.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 3 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl overflow-hidden"><Image src="/assets/images/EstimulacionTemprana1.jpg" alt="Estimulacion Temprana 1" width={500} height={300} className="w-full h-full object-cover"/></div>

            <span className="text-2xl font-semibold tracking-tight">
              Programa de Estimulación Temprana
            </span>

            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Para Recién Nacidos con Alto Riesgo Neurológico (Estrategia de Prevención de la discapacidad que beneficia a familias de escasos recursos remitidas de los Hospitales Públicos y centros de salud de la Capital
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Se realizan actividades diseñadas para potenciar el desarrollo físico, cognitivo, socioafectivo y de lenguaje de los niños desde el nacimiento hasta los primeros años de vida
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Media 3 Desktop */}
            <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden"> <Image src="/assets/images/EstimulacionTemprana1.jpg" alt="Estimulacion Temprana 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>
            {/* Media 4 Desktop */}
          <div className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 overflow-hidden"> <Image src="/assets/images/HabilidadesVida1.jpg" alt="Equinoterapia 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>
          {/* Card 4 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 24Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl overflow-hidden"> <Image src="/assets/images/HabilidadesVida1.jpg" alt="Habilidades para la Vida 1" width={500} height={300} className="w-full h-full object-cover overflow-hidden"/></div>
            <span className="text-2xl font-semibold tracking-tight">
              Programa de Habilidades para la Vida y Productividad
            </span>
            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Estrategia que busca la salud mental de jóvenes con discapacidad intelectual y física, así como su formación para una vida independiente y ser insertados en la sociedad como personas productivas.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <CircleSmall className="shrink-0" />
                  <p className="-mt-0.5">
                    Son parte de actividades de cultivo orgánico juntamente con sus familias como una estrategia de alivio económico para las familias y de reciclaje a través del Programa Los Girasoles  mediante a la  captación de material reciclable, brindar los servicios de trituración de documentación confidencial y en la elaboración de nuevos productos para su venta.

                  </p>
                </div>
              </li>
            </ul>
          </div>            
        </div>
      </div>
    </div>
  );
};

export default Features03Page;
