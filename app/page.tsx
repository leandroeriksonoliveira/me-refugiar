import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { PrayerInvite } from "@/components/prayer-invite";
import { Products } from "@/components/products";
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
        <Story />
        <Gallery />
        <Testimonials />
        <Products />
        <Schedule />
        <PrayerInvite />
        <Registration />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
