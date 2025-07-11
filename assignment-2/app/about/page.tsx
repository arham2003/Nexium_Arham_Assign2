import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/lib/data";
import { Particles } from "@/components/magicui/particles";

const BLUR_FADE_DELAY = 0.1;

export const metadata = {
  title: "About | Arham Khan",
  description: "Learn more about Arham and his journey in tech.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 px-4 sm:px-8 py-30">
      <Particles className="absolute inset-0 -z-10" />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col flex-1 space-y-2">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {`Hi, I'm ${DATA.name.split(" ")[0]}`} 👋
                </h1>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[600px] md:text-xl text-muted-foreground">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex flex-col gap-y-3 max-w-2xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
