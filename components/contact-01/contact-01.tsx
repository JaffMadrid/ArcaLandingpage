import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Contact01Page = () => (
  <div className=" flex items-center justify-center pt-12">
    <div className="text-center">
      <b className="text-muted-foreground">Contactanos</b>
      <h2 className="mt-3 text-primary text-2xl md:text-4xl font-bold tracking-tight">
        Ponte en contacto
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Nuestro amable equipo está disponible para cualquier duda.
      </p>
      <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Correo</h3>
          <p className="mt-2 text-muted-foreground">
            La administracion te responderá a tus consultas.
          </p>
          <Link
            className="mt-4 font-medium "
            href="mailto:arcadeesperanzashn04@yahoo.com"
          >
            arcadeesperanzashn04@yahoo.com
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Oficina</h3>
          <p className="mt-2 text-muted-foreground">
            Ven a visitar a nuestra oficina.
          </p>
          <Link
            className="mt-4 font-medium "
            href="https://www.google.com/maps/place/Asociaci%C3%B3n+Arca+De+Esperanzas/@14.0001478,-87.196665,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6fbd006d010273:0x5a19c6185d349c20!8m2!3d14.0001478!4d-87.1940901!16s%2Fg%2F11y92m_x0p?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            El Tizatillo Km6, salida al sur <br /> Fransisco Morazan, Honduras
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Telefono</h3>
          <p className="mt-2 text-muted-foreground">Lun-Vie de 8am a 5pm | Sab 9am a 12pm.</p>
          <Link className="mt-4 font-medium text-" href="tel:2225-1707">
            Celular: 9406-2035 y 8928-9121 <br></br> Telefono Fijo: 2225-1707
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <Image
              src="/assets/images/facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Facebook</h3>
          <Link
            className="mt-4 font-medium "
            href="https://www.facebook.com/arcaesperanzashn"
          >
            arcaesperanzashn
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <Image
              src="/assets/images/tiktok.svg"
              alt="TikTok"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Tiktok</h3>
          <Link className="mt-4 font-medium " href="https://www.tiktok.com/@asociacin.arca.de">
            Asociacion Arca de Esperanzas
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <Image
              src="/assets/images/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Instagram</h3>
          <Link className="mt-4 font-medium " href="https://www.instagram.com/arcadeesperanzas">
            asociacionarcadeesperanzas
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact01Page;
