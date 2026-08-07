import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FaceDent Hospital, Ahmedabad. Call, email, or visit us at Iscon Centre, Shivranjani Cross Road, Satellite.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMap />  
    </>
  );
}