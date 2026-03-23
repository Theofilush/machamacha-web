import { NotFound as NotFoundPage } from "~/modules/others/not-found";
import type { Route } from "./+types/not-found";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Page Not Found" }, { name: "description", content: "Page Not Found" }];
}

export default function NotFound() {
  return <NotFoundPage />;
}
