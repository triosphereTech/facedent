import { notFound } from "next/navigation";
import BlogDetail from "@/components/blog/blogdetails";
import { blogs } from "@/data/blogs";
import { blogDetails } from "@/data/blogDetails";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogDetails.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: blog.heroImage || blog.image,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blogIndex = blogDetails.findIndex((item) => item.slug === slug);

  if (blogIndex === -1) {
    notFound();
  }

  return (
    <BlogDetail
      blog={blogDetails[blogIndex]}
      previousBlog={blogDetails[blogIndex - 1] || null}
      nextBlog={blogDetails[blogIndex + 1] || null}
    />
  );
}
