import ServicesGrid from "@/components/services/ServicesGrid";
import { services } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "Explore FaceDent's dental and facial treatments, from general dentistry and cosmetic dentistry to oral & maxillofacial surgery, TMJ care, and emergency dental services.",
};

export default function ServicesPage() {
  return <ServicesGrid services={services} />;
}