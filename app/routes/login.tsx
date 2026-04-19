import { Login as LoginPage } from "~/modules/auth/login";
import type { Route } from "./+types/login";
import { redirect } from "react-router";
import { authClient } from "~/lib/auth-client";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Login" }, { name: "description", content: "Welcome to MachaMacha Login!" }];
}

export async function clientLoader() {
  const { data: session } = await authClient.getSession();
  if (session) {
    return redirect("/");
  }
  return null;
}

export default function Login() {
  return <LoginPage />;
}
