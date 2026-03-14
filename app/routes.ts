import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/layout.tsx", [
    index("./routes/home.tsx"),
    route("product", "./modules/product/products.tsx"),
    //test
  ]),
  //   index("routes/home.tsx"),
  //   layout("layouts/layout.tsx", [route("product", "modules/product/products.tsx")]),
] satisfies RouteConfig;
