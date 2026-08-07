import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

const ServiceCard = ({ service }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-black/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#207589]/25 hover:shadow-[0_18px_50px_rgba(32,24,29,0.08)]">
      <div className="relative aspect-[4/2.6] w-full overflow-hidden bg-[#2075890e]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-[19px] font-semibold leading-snug text-[#20181d] sm:text-[20px]">
          {service.title}
        </h3>

        <p className="mt-2 flex-1 text-[14px] leading-6 text-black/55 sm:text-[14.5px]">
          {service.description}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex justify-between items-center bg-linear-to-r from-[#0E2A47] to-[#2DBBC4] text-white p-5 rounded-xl gap-1.5 text-[13.5px] font-semibold transition-colors duration-200 group-hover:gap-2.5"
        >
         Book a Consultation
          <HiOutlineArrowRight className="h-4.5 w-4.5" />
        </Link>
      </div>
    </article>
  );
};

const ServicesGrid = ({ services }) => {
  return (
    <main className="bg-[#fbfaf8] text-[#20181d]">
      <section className="px-5 pt-36 pb-14 sm:px-8 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#207589]">
              Our Treatments
            </p>
            <h1 className="mt-4 text-[30px] font-semibold leading-tight sm:text-[38px]">
              Comprehensive dental &amp; facial care, under one roof
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-black/55 sm:text-[16px]">
              From routine check-ups to advanced oral and maxillofacial surgery,
              FaceDent brings together dentistry and facial care so your teeth,
              jaw, and face are treated as one connected system.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[20px] border border-[#207589]/20 bg-[#207589]/10 p-7 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-[20px] font-semibold text-[#20181d] sm:text-[22px]">
              Not sure which treatment you need?
            </h2>
            <p className="mt-1.5 text-[14px] leading-6 text-black/60 sm:text-[14.5px]">
              Book a consultation and our team will guide you to the right care plan.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#207589] px-6 py-3 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#185c6b]"
          >
            Book a Consultation
            <HiOutlineArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesGrid;