// app/summary/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { checkUser } from "@/lib/CheckUser";
import UserStatus from "@/components/general/UserStatus";

export default async function SummaryPage() {
  const { userId } = await auth();

  if (!userId) {
    // Instead of redirecting back to /summary, redirect to homepage
    return redirect("/");
  }
  await checkUser();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20">
      <UserStatus />
    </div>
  );
}
