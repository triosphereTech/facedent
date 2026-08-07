import BlogList from "@/components/blog/bloglist";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Blogs",
  description:
    "Read Bhagvat Pipe insights about CPVC pipes, UPVC pipes, SWR systems, pipe installation, plumbing solutions, and buying guides.",
};

export default function BlogPage() {
  return <BlogList blogs={blogs} />;
}
