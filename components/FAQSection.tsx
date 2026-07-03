import FAQ from "./FAQ";
import { getFaqs } from "@/services/faq";

export default async function FAQSection() {
  const faqs = await getFaqs();

  return <FAQ faqs={faqs} />;
}
