import Link from "next/link";

/**
 * DoctorExpertise
 * ---------------------------------------------------------------------------
 * Second section of the Doctors page (FaceDent). Sits directly after
 * <DoctorProfileHero /> and shows which treatments each specialist handles.
 *
 * Uses the same visual tokens as DoctorProfileHero:
 *   navy  #14264a   headings, primary button
 *   teal  #5ab8c4   accent
 *   ink   #26808d   darker teal for small text
 *   tint  #eaf5f7 / #eef3f8   soft panel backgrounds (from your service cards)
 *   page  #f9f9f6   previous section background (this one is white to alternate)
 *
 * Group shape:
 *   {
 *     id: string,
 *     doctor: string,
 *     specialization: string,
 *     title: string,
 *     tint: string,                       // Tailwind bg class for the panel
 *     treatments: { name: string, description: string }[],
 *     cta: { label: string, href: string },
 *   }
 */

const DEFAULT_GROUPS = [
  {
    id: "dentist",
    doctor: "Dr. Aarav Shah",
    specialization: "Dentist & Dental Specialist",
    title: "Everyday and cosmetic dental care",
    tint: "bg-[#eaf5f7]",
    treatments: [
      {
        name: "Checkups and cleaning",
        description: "Routine exams and scaling to keep teeth and gums healthy.",
      },
      {
        name: "Cosmetic dentistry",
        description: "Aesthetic treatments that refine the look of your smile.",
      },
      {
        name: "Teeth whitening",
        description: "Professional whitening for a brighter, safer result.",
      },
      {
        name: "Dental implants",
        description: "Durable, natural-looking replacements for missing teeth.",
      },
      {
        name: "Orthodontic care",
        description: "Braces and aligners to straighten teeth and correct bite.",
      },
    ],
    cta: { label: "View dental services", href: "/services" },
  },
  {
    id: "maxillofacial",
    doctor: "Dr. Meera Desai",
    specialization: "Maxillofacial Specialist",
    title: "Surgical care for the jaw and face",
    tint: "bg-[#eef3f8]",
    treatments: [
      {
        name: "Impacted tooth removal",
        description: "Safe removal of wisdom teeth and other impacted teeth.",
      },
      {
        name: "Jaw surgery",
        description: "Corrective surgery for jaw alignment, bite and function.",
      },
      {
        name: "Facial trauma repair",
        description: "Treatment of fractures and injuries to the jaw and face.",
      },
      {
        name: "Jaw joint disorders",
        description: "Diagnosis and care for TMJ pain, clicking and limited movement.",
      },
      {
        name: "Reconstructive surgery",
        description: "Rebuilding form and function after injury or disease.",
      },
    ],
    cta: { label: "View surgical services", href: "/services" },
  },
];

function CheckIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function ArrowIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SparkleIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7L19 15z" />
    </svg>
  );
}

function ExpertisePanel({ group }) {
  const { id, doctor, specialization, title, tint, treatments, cta } = group;
  const titleId = `expertise-${id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={`flex h-full flex-col rounded-[2rem] p-8 md:p-9 lg:p-12 ${tint}`}
    >
      <p className="text-sm font-semibold text-[#26808d]">
        {doctor}
        <span className="font-normal text-slate-500"> · {specialization}</span>
      </p>

      <h3
        id={titleId}
        className="mt-3 text-2xl font-bold tracking-tight text-[#14264a] md:text-3xl"
      >
        {title}
      </h3>

      <ul className="mt-8 space-y-6 md:mt-10">
        {treatments.map(({ name, description }) => (
          <li key={name} className="flex gap-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#26808d]">
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="font-semibold text-[#14264a]">{name}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-2 md:mt-auto md:pt-10">
        <Link
          href={cta.href}
          className="inline-flex items-center gap-3 rounded-full bg-[#14264a] py-3 pl-6 pr-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d3767] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14264a]"
        >
          {cta.label}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function DoctorExpertise({
  groups = DEFAULT_GROUPS,
  badge = "Areas of Expertise",
  heading = "Which specialist is right for you",
  intro = "Each doctor focuses on a distinct set of treatments. If you are unsure where to start, we will guide you to the right one at your first visit.",
}) {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#14264a]">
            <SparkleIcon className="h-4 w-4 text-[#5ab8c4]" />
            {badge}
          </p>
          <h2
            id="expertise-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-[#14264a] md:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {intro}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {groups.map((group) => (
            <li key={group.id}>
              <ExpertisePanel group={group} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}