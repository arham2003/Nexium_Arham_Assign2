import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

export function TextareaWithText() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <Label htmlFor="message-2" className="mb-2">
        Blog Text
      </Label>
      <Textarea
        placeholder="Paste your Blog here."
        id="message-2"
        className="h-[200px]"
      />
      <p className="text-muted-foreground text-sm">
        Your Blog Text will be used to generate summary.
      </p>
      <Button className="mt-2">Submit </Button>
    </div>
  );
}
