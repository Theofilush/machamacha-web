import { Products as ProductPage } from "~/modules/product/products";
import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Products" }, { name: "description", content: "MachaMacha Products" }];
}

export default function Products() {
  return <ProductPage />;
}
