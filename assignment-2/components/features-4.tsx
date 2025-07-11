import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20" id="Features">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Pure Logic. Clear Summaries. No AI Hype.
          </h2>
          <p>Scrape, Summarize, Store — all in your control.</p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">
                Fast Logical Summarization
              </h3>
            </div>
            <p className="text-sm">
              Built with custom static logic, not massive models. Get accurate,
              focused summaries in seconds.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">No LLM Dependencies</h3>
            </div>
            <p className="text-sm">
              {`Forget token limits or API calls. There’s no ChatGPT, Claude, or Bard under the hood — just raw code and reasoning.`}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />

              <h3 className="text-sm font-medium">Privacy-First Storage</h3>
            </div>
            <p className="text-sm">
              Your summaries are securely stored in our database — only you can
              access them. No third-party snooping.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />

              <h3 className="text-sm font-medium">Developer Friendly</h3>
            </div>
            <p className="text-sm">
              Clean APIs and logical structure make it easy to extend,
              integrate, or fork for your own use cases.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />

              <h3 className="text-sm font-medium">
                Fast Logical Summarization
              </h3>
            </div>
            <p className="text-sm">
              Built with custom static logic, not massive models. Get accurate,
              focused summaries in seconds.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Lightweight & Efficient</h3>
            </div>
            <p className="text-sm">
              Runs in-browser, with minimal dependencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
