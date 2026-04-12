import { Login as LoginPage } from "~/modules/auth/login";
import type { Route } from "./+types/login";
import { commitSession, getSession } from "~/sessions.server";
import { data, redirect, useNavigate } from "react-router";
import { fetchClient } from "~/lib/api";

export function meta({}: Route.MetaArgs) {
  return [{ title: "MachaMacha Login" }, { name: "description", content: "Welcome to MachaMacha Login!" }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("token")) {
    return redirect("/");
  }

  console.info("login:token", session.get("token"));

  return data(
    // { error: session.get("error") },
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

  const { data, error } = await fetchClient.POST("/auth/login", {
    body: { email, password },
  });

  if (error) {
    session.flash("error", "Invalid username/password");
    return redirect("/login", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }

  session.set("token", data?.accessToken);

  console.info("login:Set token disini", session.get("token"));

  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

export default function Login() {
  return <LoginPage />;
}
