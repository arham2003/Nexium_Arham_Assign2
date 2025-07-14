// app/savedBlogs/page.tsx
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import BlogCard from "@/components/BlogCard";

export default async function SavedBlogsPage() {
  const { userId } = await auth();

  if (!userId) return redirect("/");

  const blogs = await db.savedBlogs.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 mt-3">
        <br />
      <h2 className="text-2xl font-bold mb-6 text-center">📝 Your Saved Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500 text-xl text-center">No saved blogs yet.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}
