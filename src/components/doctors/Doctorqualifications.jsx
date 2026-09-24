
const DEFAULT_DOCTORS = [
  {
    id: "dentist",
    name: "Dr. Aarav Shah",
    specialization: "Dentist & Dental Specialist",
    tint: "bg-[#eaf5f7]",
    stats: [
      { value: "12+", label: "Years in practice" },
      { value: "8,000+", label: "Patients treated" },
    ],
    education: [
      {
        degree: "MDS, Conservative Dentistry & Endodontics",
        institution: "Government Dental College, Ahmedabad",
        year: "2014",
      },
      {
        degree: "BDS",
        institution: "Government Dental College, Ahmedabad",
        year: "2010",
      },
    ],
    certifications: [
      "Certified in Invisalign Clear Aligner Therapy",
      "Advanced Training in Cosmetic Dentistry",
      "Member, Indian Dental Association",
    ],
  },
  {
    id: "maxillofacial",
    name: "Dr. Meera Desai",
    specialization: "Maxillofacial Specialist",
    tint: "bg-[#eef3f8]",
    stats: [
      { value: "15+", label: "Years in practice" },
      { value: "3,500+", label: "Surgeries performed" },
    ],
    education: [
      {
        degree: "MDS, Oral & Maxillofacial Surgery",
        institution: "Nair Hospital Dental College, Mumbai",
        year: "2011",
      },
      {
        degree: "BDS",
        institution: "Government Dental College, Ahmedabad",
        year: "2007",
      },
    ],
    certifications: [
      "Fellowship in Craniomaxillofacial Trauma",
      "Certified in Dental Implantology",
      "Member, Association of Oral & Maxillofacial Surgeons of India",
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

function CapIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4L2 9l10 5 10-5-10-5z" />
      <path d="M6 11.5V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-5.5" />
    </svg>
  );
}

function BadgeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="8.5" r="5" />
      <path d="M8.5 12.8L7 21l5-2.5 5 2.5-1.5-8.2" />
    </svg>
  );
}

function QualificationPanel({ doctor }) {
  const { id, name, specialization, tint, stats, education, certifications } = doctor;
  const headingId = `qualifications-${id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className={`flex h-full flex-col rounded-[2rem] p-8 md:p-9 lg:p-12 ${tint}`}
    >
      <p className="text-sm font-semibold text-[#26808d]">{specialization}</p>
      <h3
        id={headingId}
        className="mt-2 text-2xl font-bold tracking-tight text-[#14264a] md:text-3xl"
      >
        {name}
      </h3>

      {stats?.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl bg-white/70 px-5 py-4"
            >
              <dt className="sr-only">{label}</dt>
              <dd className="text-2xl font-bold text-[#14264a] md:text-3xl">
                {value}
              </dd>
              <p className="mt-1 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-9 md:mt-10">
        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#14264a]">
          <CapIcon className="h-4 w-4 text-[#26808d]" />
          Education
        </h4>
        <ul className="mt-4 space-y-4 border-l border-[#14264a]/10 pl-5">
          {education.map(({ degree, institution, year }) => (
            <li key={degree}>
              <p className="font-semibold text-[#14264a]">
                {degree}
                {year && (
                  <span className="ml-2 font-normal text-slate-500">
                    &middot; {year}
                  </span>
                )}
              </p>
              <p className="mt-0.5 text-sm text-slate-600">{institution}</p>
            </li>
          ))}
        </ul>
      </div>

      {certifications?.length > 0 && (
        <div className="mt-9 md:mt-10">
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#14264a]">
            <BadgeIcon className="h-4 w-4 text-[#26808d]" />
            Certifications &amp; Memberships
          </h4>
          <ul className="mt-4 space-y-3">
            {certifications.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5ab8c4]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function DoctorQualifications({
  doctors = DEFAULT_DOCTORS,
  badge = "Qualifications & Experience",
  heading = "Trained, certified and experienced",
  intro = "Both doctors continue their training well beyond their degrees, so the care you receive reflects current, evidence-based practice.",
}) {
  return (
    <section
      aria-labelledby="qualifications-heading"
      className="bg-[#f9f9f6] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#14264a]">
            <SparkleIcon className="h-4 w-4 text-[#5ab8c4]" />
            {badge}
          </p>
          <h2
            id="qualifications-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-[#14264a] md:text-4xl lg:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {intro}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:items-stretch">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="flex">
              <QualificationPanel doctor={doctor} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}