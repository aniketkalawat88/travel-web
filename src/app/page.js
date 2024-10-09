
import HeroSection from "./_components/hero-section";
import HomePackage from "./_components/home-package";
import HomeAbout from "./_components/home-about";
import HomeContact from "./_components/home-contact";
import { inter, montserrat } from "./font";

export default function Home() {
  return (
    <div className={montserrat.className}>
     <HeroSection />
     <HomePackage />
     <HomeAbout />
     <HomeContact />
    </div>
  );
}
