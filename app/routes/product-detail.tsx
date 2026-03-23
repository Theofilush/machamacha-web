import { ProductDetail as ProductDetailPage } from "~/modules/product/product-detail";
import type { Route } from "./+types/product-detail";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Product Detail" }, { name: "description", content: "Product Detail" }];
}

export default function ProductDetail() {
  return <ProductDetailPage />;
}
