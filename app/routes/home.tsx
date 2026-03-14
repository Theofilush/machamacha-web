import { Homepage } from "~/modules/home/homepage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Machamacha Online Store" }, { name: "description", content: "Welcome to Machamacha Online Store!" }];
}

export default function Home() {
  return <Homepage />;
}
