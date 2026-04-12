import { createCookieSessionStorage } from "react-router";

type SessionData = {
  token: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } = createCookieSessionStorage<SessionData, SessionFlashData>({
  cookie: {
    name: "__session",
    // expires: new Date(Date.now() + 60_000 * 60 * 24 * 7), // 7 days
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
    secrets: [import.meta.env.VITE_COOKIE_SECRET_KEY],
    secure: true,
  },
});

export { getSession, commitSession, destroySession };
