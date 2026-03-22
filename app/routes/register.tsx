import { Register as RegisterPage } from "~/modules/auth/register";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Machamacha Register" }, { name: "description", content: "Welcome to Machamacha Register!" }];
}

export default function Register() {
  return <RegisterPage />;
}
