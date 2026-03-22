import { Cart as CartPage } from "~/modules/cart/carts";
import type { Route } from "./+types/cart";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Machamacha Cart" }, { name: "description", content: "Machamacha Cart" }];
}

export default function Cart() {
  return <CartPage />;
}
