import { Leaf, LoaderIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { authClient } from "~/lib/auth-client";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message || "Failed to create account.");
      setIsLoading(false);
    } else {
      navigate("/login");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-emerald-100/50">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-emerald-800 mb-6">
            <Leaf className="h-8 w-8" />
            <span className="font-serif text-2xl font-bold tracking-tight">MachaMacha</span>
          </Link>
          <h1 className="text-2xl font-serif font-bold text-emerald-950">Create Account</h1>
          <p className="text-muted-foreground text-sm mt-2">Join us to experience premium matcha</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full h-12 flex items-center justify-center gap-2 border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleEmailSignUp}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input name="name" type="text" placeholder="John Doe" required className="h-12" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input name="email" type="email" placeholder="you@example.com" required className="h-12" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <Input name="password" type="password" placeholder="••••••••••••" required className="h-12" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {errorMsg && <div className="p-3 rounded-lg text-sm mt-4 border bg-red-50 text-red-700 border-red-200">{errorMsg}</div>}

            <Button type="submit" disabled={isLoading} className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white mt-6 flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <LoaderIcon className="h-5 w-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 font-medium hover:text-emerald-700 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
