import { Cart as CartPage } from "~/modules/cart/carts";
import type { Route } from "./+types/cart";
import { redirect } from "react-router";
import { authClient } from "~/lib/auth-client";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Cart" }, { name: "description", content: "MachaMacha Cart" }];
}

export async function loader() {
  return {};
}

export async function clientLoader() {
  const { data: session } = await authClient.getSession();
  if (!session) {
    return redirect("/login");
  }
  return null;
}

export default function Cart() {
  return <CartPage />;
}
