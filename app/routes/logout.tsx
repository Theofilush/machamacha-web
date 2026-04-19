import { useEffect } from "react";
import { useNavigate } from "react-router";
import { authClient } from "~/lib/auth-client";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleLogout() {
      try {
        await authClient.signOut();
        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
        navigate("/login");
      }
    }
    handleLogout();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      <p className="text-emerald-800 font-medium">Signing you out...</p>
    </div>
  );
}
