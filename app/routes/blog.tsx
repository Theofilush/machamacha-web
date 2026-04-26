import { BlogPage } from "~/modules/blog/blog";
import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha - Blog" }, { name: "description", content: "Blog - MachaMacha Online Store" }];
}

export default function Blog() {
  return <BlogPage />;
}
