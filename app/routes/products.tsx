import { Products as ProductPage } from "~/modules/product/products";
import type { Route } from "./+types/products";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Machamacha Products" }, { name: "description", content: "Machamacha Products" }];
}

export default function Products() {
  return <ProductPage />;
}
