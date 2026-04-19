import { Register as RegisterPage } from "~/modules/auth/register";
import type { Route } from "./+types/register";
import { redirect } from "react-router";
import { authClient } from "~/lib/auth-client";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Register" }, { name: "description", content: "Create your MachaMacha account" }];
}

export async function clientLoader() {
  const { data: session } = await authClient.getSession();
  if (session) {
    return redirect("/");
  }
  return null;
}

export default function Register() {
  return <RegisterPage />;
}
