import { Register as RegisterPage } from "~/modules/auth/register";
import type { Route } from "./+types/register";
import { commitSession, getSession } from "~/sessions.server";
import { data, redirect } from "react-router";
import { fetchClient } from "~/lib/api";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Register" }, { name: "description", content: "Create your MachaMacha account" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("token")) {
    return redirect("/");
  }

  return data(
    { error: session.get("error") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const form = await request.formData();
  const email = form.get("email") as string;
  const password = form.get("password") as string;

  if (!email || !password) {
    session.flash("error", "Email and password are required");
    return redirect("/register", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }

  const { data: responseData, error } = await fetchClient.POST("/auth/register", {
    body: { email, password },
  });

  if (error) {
    let errorMessage = "Registration failed. Please try again.";

    if (typeof error?.error === "string") {
      errorMessage = error.error;
    } else if (Array.isArray((error as any)?.errors)) {
      errorMessage = (error as any).errors.join(", ");
    }

    session.flash("error", errorMessage);
    return redirect("/register", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }

  session.flash("success", "Account created successfully! Please sign in.");
  return redirect("/login", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

export default function Register({ loaderData }: Route.ComponentProps) {
  return <RegisterPage errorMessage={loaderData?.error as string} />;
}
