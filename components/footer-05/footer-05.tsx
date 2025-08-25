import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../ui/logo";


const footerLinks = [
  {
    title: "Inicio",
    href: "#",
  },
  {
    title: "Acerca de Nosotros",
    href: "#",
  },
  {
    title: "Donaciones",
    href: "#",
  },
  {
    title: "Contactanos",
    href: "#",
  },
];

const Footer05Page = () => {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto">
        <div className="py-2 flex flex-col justify-start items-center">
          {/* Logo */}
          <Logo />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground font-medium"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Arca de Esperanzas
            </Link>
            . Todos los derechos reservados.
          </span>

          <div className="flex gap-4">
            <Link href="https://www.tiktok.com/@asociacin.arca.de" target="_blank">
              <Image
                src="/assets/images/tiktok.svg"
                alt="TikTok"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
            <Link href="https://www.facebook.com/arcaesperanzashn" target="_blank">
              <Image
                src="/assets/images/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer05Page;
