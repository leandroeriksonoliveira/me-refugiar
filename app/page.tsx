import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Partnership } from "@/components/partnership";
import { Registration } from "@/components/registration";
import { Schedule } from "@/components/schedule";
import { Story } from "@/components/story";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Testimonials />
        <Story />
        <Gallery />
        <Partnership />
        <Registration />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
