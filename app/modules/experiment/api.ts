import createClient from "openapi-fetch";
import type { paths } from "~/schema";

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_URL });

const { data, error } = await client.GET("/products");

await client.PUT("/products/{id}", {
  params: {
    path: { id: "123" },
  },
  body: {
    name: "My New Post",
    slug: "my-new-post",
    price: 10000,
    imageUrl: "https://example.com/images/products/my-new-post.jpg",
    description: "My new post description",
    category: "post",
    stock: 10,
    tags: ["post", "new", "example"],
  },
});

export async function getProducts() {
  const { data: products, error } = await client.GET("/products");
  console.log(products, error);
  return { data, error };
}
