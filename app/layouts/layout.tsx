import { Layout as LayoutPage } from "~/modules/layout/layout";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Machamacha Layout" }, { name: "description", content: "Machamacha Layout" }];
}

export default function Layout() {
  return <LayoutPage />;
}
