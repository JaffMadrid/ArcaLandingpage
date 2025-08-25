import React from "react";
import Navbar01Page from "@/components/navbar-01/navbar-01";
import Footer05Page from "@/components/footer-05/footer-05";
import Hero04 from "@/components/hero-04/hero-04";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
                  <BreadcrumbPage>Acerca de nosotros</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <Hero04 />
      </main>
      <footer className="mt-16">
        <Footer05Page />
      </footer>
    </div>
  );
}
