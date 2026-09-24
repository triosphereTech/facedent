import Image from "next/image";

/**
 * DoctorProfileHero
 * ---------------------------------------------------------------------------
 * First section of the Doctors page (FaceDent).
 *
 * Colors are written as arbitrary Tailwind values so the file works as-is.
 * If your tailwind.config already has brand tokens, swap them in:
 *   navy  #14264a  -> text-navy
 *   teal  #5ab8c4  -> bg-teal (brand accent)
 *   ink   #26808d  -> darker teal for small text (keeps contrast readable)
 *   tint  #eef3f8  -> soft panel background (same family as your service cards)
 *   page  #f9f9f6  -> off-white section background
 *
 * Doctor shape:
 *   {
 *     id: string,
 *     name: string,
 *     specialization: string,
 *     description: string,
 *     image?: { src: string, alt?: string },     // omit -> initials placeholder
 *     credentials?: { label: string, value: string }[],
 *   }
 *
 * Photos: portrait, ideally 1200x1500 (4:5), stored in /public/images/doctors/.
 *
 * Spacing: the section adds top padding to clear your floating navbar.
 * Reduce `pt-32 md:pt-40` if your layout already offsets the header.
 */

const DEFAULT_DOCTORS = [
  {
    id: "dentist",
    name: "Dr. Aarav Shah",
    specialization: "Dentist & Dental Specialist",
    description:
      "Focused on preventive and restorative dentistry, with a calm, unhurried approach to routine care, cosmetic treatment and long-term oral health.",
    image: {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
      alt: "Portrait of Dr. Aarav Shah",
    },
    credentials: [
      { label: "Qualification", value: "BDS, MDS (Conservative Dentistry)" },
      { label: "Experience", value: "12 years" },
      { label: "Languages", value: "English, Hindi, Gujarati" },
    ],
  },
  {
    id: "maxillofacial",
    name: "Dr. Meera Desai",
    specialization: "Maxillofacial Specialist",
    description:
      "Treats conditions of the jaw, face and mouth, from impacted teeth and jaw alignment to facial trauma and reconstructive surgery.",
    image: {
       src: "https://img.magnific.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80",
     
      alt: "Portrait of Dr. Meera Desai",
    },
    credentials: [
      { label: "Qualification", value: "BDS, MDS (Oral & Maxillofacial Surgery)" },
      { label: "Experience", value: "15 years" },
      { label: "Languages", value: "English, Hindi, Gujarati" },
    ],
  },
];

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

/** "Dr. Aarav Shah" -> "AS" (only used when no photo is supplied). */
function getInitials(name = "") {
  return name
    .replace(/^dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function DoctorPhoto({ name, specialization, image }) {
  return (
    // White frame around a rounded photo, echoing the image treatment used
    // in the About section.
    <div className="rounded-[2rem] bg-white p-2.5 md:p-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#eef3f8]">
        {image?.src ? (
          <Image
            src={image.src}
            alt={image.alt ?? `${name}, ${specialization}`}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`${name}, ${specialization}`}
            className="flex h-full w-full items-center justify-center text-6xl font-semibold text-[#5ab8c4]/60"
          >
            {getInitials(name)}
          </div>
        )}
      </div>
    </div>
  );
}

function DoctorProfile({ doctor }) {
  const { id, name, specialization, description, image, credentials = [] } = doctor;
  const nameId = `doctor-${id}-name`;

  return (
    <article aria-labelledby={nameId} className="flex flex-col">
      <DoctorPhoto name={name} specialization={specialization} image={image} />

      <div className="mt-8 px-1 md:mt-10">
        <p className="inline-flex rounded-full bg-[#5ab8c4]/15 px-4 py-1.5 text-sm font-semibold text-[#26808d]">
          {specialization}
        </p>

        <h2
          id={nameId}
          className="mt-4 text-2xl font-bold tracking-tight text-[#14264a] md:text-3xl"
        >
          {name}
        </h2>

        <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-600">
          {description}
        </p>

        {credentials.length > 0 && (
          <dl className="mt-8 space-y-4 rounded-[1.5rem] bg-[#eef3f8] p-6 md:p-7">
            {credentials.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[6.5rem_1fr] gap-x-4 text-sm leading-relaxed lg:grid-cols-[7.5rem_1fr]"
              >
                <dt className="text-slate-500">{label}</dt>
                <dd className="font-medium text-[#14264a]">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}

export default function DoctorProfileHero({
  doctors = DEFAULT_DOCTORS,
  badge = "Our Doctors",
  heading = "Meet the specialists behind your care",
  intro = "Two doctors, two areas of expertise, one team dedicated to your dental and facial health.",
}) {
  return (
    <section
      aria-labelledby="doctors-heading"
      className="bg-[#f9f9f6] pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#14264a]">
            <SparkleIcon className="h-4 w-4 text-[#5ab8c4]" />
            {badge}
          </p>
          <h1
            id="doctors-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-[#14264a] md:text-5xl"
          >
            {heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {intro}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <DoctorProfile doctor={doctor} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}