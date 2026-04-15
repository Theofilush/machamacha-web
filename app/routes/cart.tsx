import { Cart as CartPage } from "~/modules/cart/carts";
import type { Route } from "./+types/cart";
import { destroySession, getSession } from "~/sessions.server";
import { redirect } from "react-router";
import { fetchClient } from "~/lib/api";
import type { User } from "~/lib/types";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Cart" }, { name: "description", content: "MachaMacha Cart" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("token")) {
    return redirect("/login");
  }

  const token = session.get("token");
  console.info("cart:token", token);

  const { data, error } = await fetchClient.GET("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (error || !data) {
    session.flash("error", "Failed to check user");
    return redirect("/login", {
      headers: { "Set-Cookie": await destroySession(session) },
    });
  }

  const userData: User = data;
  console.info({ userData });

  return userData;
}

export default function Cart() {
  return <CartPage />;
}
