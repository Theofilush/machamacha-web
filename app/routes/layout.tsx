import { Layout as LayoutPage } from "~/modules/layout/layout";
import type { Route } from "./+types/layout";
import { getSession } from "~/sessions.server";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  return {
    isLoggedIn: session.has("token"),
  };
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return <LayoutPage isLoggedIn={loaderData?.isLoggedIn} />;
}
