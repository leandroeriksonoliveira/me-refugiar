import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Registration } from "@/components/registration";
import { Schedule } from "@/components/schedule";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Schedule />
        <Registration />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
