import Image from "next/image";
import Link from "next/link";

const BlogList = ({ blogs }) => {
  return (
    <main className="bg-white text-[#17171a]">
      <section className="px-5 pt-36 pb-20 sm:px-8 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#207589]">
              Facedent Blog
            </p>
            <h1 className="mt-4 text-[30px] font-semibold leading-tight sm:text-[38px]">
              Recent blog posts
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-black/55 sm:text-[16px]">
              Latest insights about CPVC Pipes, UPVC Pipes, SWR Pipes,
              Plumbing Solutions, Pipe Installation, Industry Trends and
              Buying Guides.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={blog.slug}
              className="group"
            >
              <Link href={`/blog/${blog.slug}`} className="block">
                <div className="relative aspect-[1.55/1] overflow-hidden rounded-[14px] bg-[#f3f0ed]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority={index < 3}
                    sizes="(min-width: 1024px) 390px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="pt-6">
                <Link href={`/blog/${blog.slug}`} className="block">
                  <h2 className="text-[21px] font-semibold leading-snug tracking-normal text-[#17171a] transition-colors duration-300 group-hover:text-[#207589] sm:text-[23px]">
                    {blog.title}
                  </h2>
                </Link>

                <p className="mt-3 line-clamp-2 text-[14px] leading-6 text-black/58 sm:text-[15px]">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-[#f3f0ed]">
                    <Image
                      src={blog.authorAvatar}
                      alt={blog.author}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[13px] font-medium leading-none text-black/70">
                    {blog.author}
                    <span className="mx-1.5 text-black/35">-</span>
                    <span className="text-black/55">{blog.date}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogList;
