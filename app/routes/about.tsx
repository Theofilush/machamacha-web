import { AboutPage } from "~/modules/about/about";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha - About" }, { name: "description", content: "About Us - MachaMacha Online Store" }];
}

export default function About() {
  return <AboutPage />;
}
