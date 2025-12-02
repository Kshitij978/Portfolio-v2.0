import Navigation from "@/components/navigation";
import { ScrollTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
// import DarkVeil from "@/components/ui/dark-veil";
import LightRays from "@/components/ui/light-rays";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full relative">
        <Navigation />
        <main className="max-w-screen md:pb-0 pb-15 overflow-x-hidden w-full mx-auto ">
          <div className="min-h-[33.8rem] md:min-h-[37.5rem]">{children}</div>
          <SiteFooter />
        </main>
      </div>

      <div className="fixed left-0 opacity-50 right-0 top-0 -z-10">
        {/* <DarkVeil hueShift={225} /> */}
        <LightRays
          raysOrigin="top-center"
          // raysColor="#7e3e3e"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <ScrollTop />
      {/* <ThemeToggler /> */}
    </>
  );
}
