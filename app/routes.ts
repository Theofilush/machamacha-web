import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  route("login", "./routes/login.tsx"),
  route("register", "./routes/register.tsx"),
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("products", "./routes/products.tsx"),
    route("cart", "./routes/cart.tsx"),
    route("products/:slug", "./routes/product-detail.tsx"),
    route("*", "./routes/not-found.tsx"),
    // TODO: route("checkout", "./routes/checkout.tsx"),
    // TODO: route("order-confirmation", "./routes/order-confirmation.tsx"),
    // TODO: route("order-history", "./routes/order-history.tsx"),
    // TODO: route("order-details/:id", "./routes/order-details.tsx"),
    // TODO: route("order-tracking/:id", "./routes/order-tracking.tsx"),
    // TODO: route("order-tracking/:id", "./routes/order-tracking.tsx"),
  ]),
] satisfies RouteConfig;
