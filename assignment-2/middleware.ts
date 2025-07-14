// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher([
  "/summary(.*)",
  "/savedBlogs(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) {
    const { userId, redirectToSignIn } = await auth();

    if (!userId) {
      // Always send them to sign-in, and then back to homepage
      return redirectToSignIn({ returnBackUrl: `${req.nextUrl.origin}/` });
    }
  }
}, {
  debug: process.env.NODE_ENV === "development",
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sw.js).*)"
  ],
};
