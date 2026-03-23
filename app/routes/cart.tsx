import { Cart as CartPage } from "~/modules/cart/carts";
import type { Route } from "./+types/cart";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Cart" }, { name: "description", content: "MachaMacha Cart" }];
}

export default function Cart() {
  return <CartPage />;
}
