import { Login as LoginPage } from "~/modules/auth/login";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Login" }, { name: "description", content: "Welcome to MachaMacha Login!" }];
}

export default function Login() {
  return <LoginPage />;
}
