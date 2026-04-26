import { FAQPage } from "~/modules/faq/faq";
import type { Route } from "./+types/faq";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha - FAQ" }, { name: "description", content: "FAQ - MachaMacha Online Store" }];
}

export default function FAQ() {
  return <FAQPage />;
}
