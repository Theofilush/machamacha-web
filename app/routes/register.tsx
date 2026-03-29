import { Register as RegisterPage } from "~/modules/auth/register";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Register" }, { name: "description", content: "Welcome to MachaMacha Register!" }];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const registerUserData = {
    email,
    password,
  };

  console.log({ registerUserData });
  return null;
}

export default function Register({ actionData }: Route.ComponentProps) {
  return <RegisterPage />;
}
