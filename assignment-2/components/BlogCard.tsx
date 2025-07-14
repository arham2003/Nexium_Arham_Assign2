// components/BlogCard.tsx
import { formatDistanceToNow } from "date-fns";

interface BlogCardProps {
  blog: {
    blogText: string;
    blogUrl?: string | null;
    blogSummary: string;
    createdAt: string | Date;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="border p-4 rounded-md shadow bg-white dark:bg-zinc-900">
      <div className="text-sm text-muted-foreground mb-2">
        Saved {formatDistanceToNow(new Date(blog.createdAt))} ago
      </div>

      {blog.blogUrl && (
        <a
          href={blog.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 underline text-sm"
        >
          {blog.blogUrl}
        </a>
      )}

      <h3 className="text-lg font-semibold mt-2">Summary:</h3>
      <p className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-line">
        {blog.blogSummary}
      </p>

      <h4 className="text-md font-medium mt-4">Original Text:</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-6">
        {blog.blogText}
      </p>
    </div>
  );
}
