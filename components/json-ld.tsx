import { siteConfig, tickets } from "@/lib/event";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    startDate: siteConfig.edition.startYmd,
    endDate: siteConfig.edition.endYmd,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    organizer: {
      "@type": "Person",
      name: siteConfig.speaker,
    },
    performer: {
      "@type": "Person",
      name: siteConfig.speaker,
    },
    location: {
      "@type": "Place",
      name: siteConfig.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.venue.address,
        addressLocality: siteConfig.venue.city,
        addressRegion: siteConfig.venue.state,
        addressCountry: "BR",
      },
    },
    image: [`${siteConfig.url}/opengraph-image`],
    offers: tickets.map((ticket) => ({
      "@type": "Offer",
      name: ticket.name,
      price: ticket.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#inscricao`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
