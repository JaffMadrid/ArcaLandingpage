import React from "react";
import Navbar01Page from "@/components/navbar-01/navbar-01";
import Footer05Page from "@/components/footer-05/footer-05";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar01Page />
      </header>
      <main className="flex-grow">
        <div className="px-4 sm:px-6 lg:px-8 mt-6 flex justify-center">
          <div className="w-full max-w-7xl">
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbPage>Donaciones</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className=" flex items-center justify-center my-8 py-12">
          <div className="text-center">
            <b className="text-muted-foreground">Realiza tu Donación</b>
            <h2 className="mt-3 text-2xl text-primary md:text-4xl font-bold tracking-tight">
              Dona a nuestras cuentas bancarias
            </h2>
            <p className="mt-4 text-base sm:text-lg">
              Agradecemos tu apoyo para continuar con nuestra labor.
            </p>
            <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
              <div className="text-center flex flex-col items-center">
                <div className="h-20 w-20 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <Image
                    src="/assets/images/logoBac.png"
                    alt="Logo Bac"
                    width={500}
                    height={500}
                    className="h-20 w-20"
                  />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Cuenta Bancaria BAC</h3>
                <p className="mt-2 text-muted-foreground">
                  Gracias por tu apoyo, cada granito cuenta!
                </p>
                <Link className="mt-4 font-medium" href="#">
                  Numero de Cuenta: 723 584 251
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-16">
        <Footer05Page />
      </footer>
    </div>
  );
}
