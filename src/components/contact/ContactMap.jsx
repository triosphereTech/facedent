import { HiOutlineMapPin, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const DIRECTIONS_URL =
  "https://www.google.com/maps/place/Facedent+Hospital/@23.0240103,72.5299416,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e850022be83db:0xb8e817d703085514!8m2!3d23.0240103!4d72.5299416!16s%2Fg%2F11yscpf0hx?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D";

const EMBED_URL = "https://www.google.com/maps?q=23.0240103,72.5299416&z=16&output=embed";

const ContactMap = () => {
  return (
    <section className="bg-[#fbfaf8] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_18px_60px_rgba(32,24,29,0.06)] lg:grid-cols-2">
          {/* Left map */}
          <div className="relative h-[320px] w-full lg:h-auto lg:min-h-[420px]">
            <iframe
              src={EMBED_URL}
              title="FaceDent Hospital location"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Right address */}
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#207589]/10 text-[#207589]">
              <HiOutlineMapPin className="h-5 w-5" />
            </span>

            <h2 className="mt-5 text-[22px] font-semibold leading-snug text-[#20181d] sm:text-[24px]">
              Visit FaceDent Hospital
            </h2>

            <p className="mt-3 max-w-sm text-[15px] leading-7 text-black/60 sm:text-[15.5px]">
              A, Iscon Centre, Block 415-416, Shivranjani Cross Rd,
              Shivranjani, Satellite, Ahmedabad, Gujarat 380015
            </p>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#207589] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#185c6b]"
            >
              Get Directions
              <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;