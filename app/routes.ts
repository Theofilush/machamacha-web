import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  route("login", "./routes/login.tsx"),
  route("register", "./routes/register.tsx"),
  layout("./routes/layout.tsx", [
    // route("/", "./routes/home.tsx"),
    index("./routes/home.tsx"),
    route("products", "./routes/products.tsx"),
    route("cart", "./routes/cart.tsx"),
    // route("product/:id", "./routes/product.tsx"),
    // route("checkout", "./routes/checkout.tsx"),
    // route("order-confirmation", "./routes/order-confirmation.tsx"),
    // route("order-history", "./routes/order-history.tsx"),
    // route("order-details/:id", "./routes/order-details.tsx"),
    // route("order-tracking/:id", "./routes/order-tracking.tsx"),
    // route("order-tracking/:id", "./routes/order-tracking.tsx"),
  ]),
] satisfies RouteConfig;
