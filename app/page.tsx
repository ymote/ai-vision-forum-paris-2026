import Link from "next/link";
import { GraduationCap, Laptop, Scale, Globe, Mic, Landmark, Handshake, Plane, TowerControl } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EVENT_CONFIG, TRACKS, SCHEDULE_OUTLINE } from "@/lib/constants";

const TRACK_ICONS: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-12 w-12 text-primary" />,
  "laptop": <Laptop className="h-12 w-12 text-primary" />,
  "scale": <Scale className="h-12 w-12 text-primary" />,
  "globe": <Globe className="h-12 w-12 text-primary" />,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Three.js and Countdown */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Tracks Section — cool blue tint */}
      <section id="tracks" className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(93, 132, 168, 0.06) 0%, rgba(93, 132, 168, 0.03) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">Four Tracks</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              Explore the future of AI across education, development, governance, and public good
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {TRACKS.map((track) => (
              <Link
                key={track.id}
                href={`/tracks/${track.id === 1 ? 'education' : track.id === 2 ? 'vibe-coding' : track.id === 3 ? 'governance' : 'public-good'}`}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-6">{TRACK_ICONS[track.icon]}</div>
                <h3 className="mb-4 text-2xl font-bold group-hover:text-primary transition-colors">
                  {track.title}
                </h3>
                <p className="text-muted-foreground mb-6">{track.description}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {track.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {track.highlight && (
                  <div className="absolute -right-3 -top-3 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-lg">
                    Featured
                  </div>
                )}

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 text-2xl opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview Section */}
      <section id="schedule" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">Event Schedule</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
              A full day of insights, discussions, and networking
            </p>
          </div>

          <div className="space-y-4">
            {SCHEDULE_OUTLINE.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex-shrink-0 rounded-lg bg-primary/10 px-4 py-2">
                  <span className="font-mono text-sm font-bold text-primary">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              * Schedule subject to change. Final agenda will be shared with confirmed participants.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section — warm rose tint */}
      <section id="speakers" className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(202, 124, 129, 0.06) 0%, rgba(202, 124, 129, 0.03) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">Speakers</span>
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl">
            World-class experts, researchers, and practitioners
          </p>

          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-16">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6"><Mic className="mx-auto h-14 w-14 text-primary" /></div>
              <h3 className="mb-4 text-2xl font-bold">Speakers Coming Soon</h3>
              <p className="text-muted-foreground">
                We're curating an exceptional lineup of thought leaders, academics, and industry pioneers. Our Board of Advisors is working to bring you the most impactful voices in agentic AI.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Check back soon or request an invitation to be notified when speakers are announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section — sage green tint */}
      <section id="venue" className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(138, 160, 125, 0.06) 0%, rgba(138, 160, 125, 0.03) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="text-gradient-primary">Venue</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold">{EVENT_CONFIG.location.venue}</h3>
                  <p className="text-lg text-muted-foreground">
                    {EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country}
                  </p>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <Landmark className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span>
                      A historic palace transformed into a modern conference venue, combining Parisian elegance with cutting-edge facilities.
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Handshake className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span>
                      Co-located with <strong className="text-foreground">GOSIM Paris 2026</strong>, enabling cross-pollination between governance and AI vision communities.
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Plane className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                    <span>
                      Easily accessible from Paris Charles de Gaulle Airport (CDG) and central Paris via metro.
                    </span>
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <TowerControl className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Venue photos coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — warm gold tint */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(180deg, rgba(211, 165, 106, 0.05) 0%, rgba(211, 165, 106, 0.02) 50%, transparent 100%)" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border-2 border-accent/50 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-12 md:p-16">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Join the Conversation
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              AI Vision Forum Paris 2026 is invitation-only. Request your invitation to participate in shaping the future of agentic AI.
            </p>
            <a
              href="/register"
              className="inline-block rounded-full bg-accent px-10 py-5 text-xl font-bold text-accent-foreground transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
            >
              Request Invitation
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Applications reviewed on a rolling basis
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
