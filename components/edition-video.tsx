import { FadeIn } from "@/components/ui/fade-in";
import { editionVideo } from "@/lib/event";

export function EditionVideo() {
  return (
    <section id="video" aria-label={editionVideo.title} className="bg-earth">
      <FadeIn>
        <div className="relative aspect-video max-h-[90svh] w-full overflow-hidden bg-black">
          {editionVideo.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${editionVideo.youtubeId}?rel=0`}
              title={editionVideo.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={editionVideo.src}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </FadeIn>
    </section>
  );
}
