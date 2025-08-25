import Navbar01Page from "@/components/navbar-01/navbar-01";
import Hero03 from "@/components/hero-03/hero-03";
import Footer05Page from "@/components/footer-05/footer-05";
import Features03Page from "@/components/features-03/features-03";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
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
                  <BreadcrumbPage>Inicio</BreadcrumbPage>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <Hero03 />
        <Features03Page />
      </main>
      <footer className="mt-16">
        <Footer05Page />
      </footer>
    </div>
  );
}
