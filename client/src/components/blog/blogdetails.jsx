import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineClock,
} from "react-icons/hi2";

const renderBlock = (block, index) => {
  if (block.type === "h2") {
    return (
      <h2
        key={index}
        className="mt-14 text-[26px] font-semibold leading-tight text-[#20181d] sm:text-[31px]"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3
        key={index}
        className="mt-10 text-[21px] font-semibold leading-snug text-[#20181d] sm:text-[24px]"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={index} className="mt-6 text-[16px] leading-8 text-black/60 sm:text-[17px]">
        {block.text}
      </p>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul key={index} className="mt-6 space-y-3 text-[16px] leading-8 text-black/60 sm:text-[17px]">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#207589]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "numbered") {
    return (
      <ol
        key={index}
        className="mt-6 list-decimal space-y-3 pl-6 text-[16px] leading-8 text-black/60 marker:font-semibold marker:text-[#207589] sm:text-[17px]"
      >
        {block.items.map((item) => (
          <li key={item} className="pl-2">
            {item}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "highlight") {
    return (
      <div
        key={index}
        className="mt-9 rounded-[18px] border border-[#207589]/20 bg-[#207589]/10 p-6 sm:p-7"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#207589]">
          {block.title}
        </p>
        <p className="mt-3 text-[16px] leading-8 text-black/60 sm:text-[17px]">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote
        key={index}
        className="mt-10 border-l-4 border-[#207589] pl-6 text-[22px] font-medium leading-9 text-[#20181d] sm:text-[26px] sm:leading-10"
      >
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "image") {
    return (
      <figure key={index} className="mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-[#8a29660e]">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            sizes="(min-width: 1024px) 860px, 100vw"
            className="object-cover"
          />
        </div>
        {block.caption ? (
          <figcaption className="mt-3 text-sm leading-6 text-black/45">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (block.type === "table") {
    return (
      <div key={index} className="mt-10 overflow-hidden rounded-[18px] border border-black/10">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse bg-white text-left">
            <thead className="bg-[#207589] text-white">
              <tr>
                {block.columns.map((column) => (
                  <th key={column} className="px-5 py-4 text-sm font-semibold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {block.rows.map((row) => (
                <tr key={row.join("-")} className="text-[15px] leading-7 text-black/60">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "stats") {
    return (
      <div
        key={index}
        className="mt-10 grid grid-cols-1 gap-4 rounded-[18px] border border-[#207589]/15 bg-[#fbfaf8] p-6 sm:grid-cols-3 sm:p-7"
      >
        {block.items.map((stat) => (
          <div key={stat.label} className="text-center sm:border-l sm:border-black/10 sm:first:border-l-0">
            <p className="text-[28px] font-semibold text-[#207589] sm:text-[32px]">
              {stat.value}
            </p>
            <p className="mt-1 text-[13px] leading-5 text-black/55">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "faq") {
    return (
      <div key={index} className="mt-12">
        {block.title ? (
          <h2 className="text-[26px] font-semibold leading-tight text-[#20181d] sm:text-[31px]">
            {block.title}
          </h2>
        ) : null}
        <div className="mt-6 divide-y divide-black/10 rounded-[18px] border border-black/10">
          {block.items.map((item) => (
            <div key={item.q} className="p-6 sm:p-7">
              <p className="text-[16px] font-semibold text-[#20181d] sm:text-[17px]">
                {item.q}
              </p>
              <p className="mt-2 text-[15px] leading-7 text-black/60 sm:text-[16px]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const BlogDetail = ({ blog, previousBlog, nextBlog }) => {
  return (
    <main className="bg-[#fbfaf8] text-[#20181d]">
      <article className="px-4 pt-36 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/8.6] min-h-[260px] overflow-hidden rounded-[22px] bg-[#8a29660e] shadow-[0_24px_90px_rgba(32,24,29,0.10)]">
            <Image
              src={blog.heroImage || blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <header className="mx-auto max-w-[880px] pt-12 sm:pt-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#207589]/20 bg-[#207589]/10 px-3.5 py-1.5 text-xs font-semibold text-[#207589]">
              {blog.category}
            </span>
            <span className="text-sm text-black/45">{blog.date}</span>
            <span className="flex items-center gap-1.5 text-sm text-black/45">
              <HiOutlineClock className="text-base" />
              {blog.readingTime}
            </span>
          </div>

          <h1 className="mt-6 text-[34px] font-semibold leading-[1.14] text-[#20181d] sm:text-[44px] lg:text-[52px]">
            {blog.title}
          </h1>

          <div className="mt-7 border-y border-black/10 py-5">
            <p className="text-sm uppercase tracking-[0.18em] text-black/38">Written by</p>
            <p className="mt-1 text-[17px] font-medium text-[#20181d]">{blog.author}</p>
          </div>
        </header>

        <div className="mx-auto max-w-[880px] pb-20 pt-2 sm:pb-24">
          {blog.content.map(renderBlock)}
        </div>
      </article>

      <nav className="px-4 pb-24" aria-label="Blog navigation">
        <div className="mx-auto grid max-w-[880px] gap-4 border-t border-black/10 pt-8 sm:grid-cols-2">
          {previousBlog ? (
            <Link
              href={`/blog/${previousBlog.slug}`}
              className="group rounded-[18px] border border-black/10 bg-white p-5 shadow-[0_14px_45px_rgba(32,24,29,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#207589]/30"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#207589]">
                <HiOutlineArrowLeft />
                Previous Blog
              </span>
              <p className="mt-3 text-[17px] font-semibold leading-snug text-[#20181d]">
                {previousBlog.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextBlog ? (
            <Link
              href={`/blog/${nextBlog.slug}`}
              className="group rounded-[18px] border border-black/10 bg-white p-5 text-left shadow-[0_14px_45px_rgba(32,24,29,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#207589]/30 sm:text-right"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#207589] sm:justify-end">
                Next Blog
                <HiOutlineArrowRight />
              </span>
              <p className="mt-3 text-[17px] font-semibold leading-snug text-[#20181d]">
                {nextBlog.title}
              </p>
            </Link>
          ) : null}
        </div>
      </nav>
    </main>
  );
};

export default BlogDetail;