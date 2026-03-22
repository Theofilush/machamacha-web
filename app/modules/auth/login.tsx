import { Link } from "react-router";
import { Leaf } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-emerald-100/50">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-emerald-800 mb-6">
            <Leaf className="h-8 w-8" />
            <span className="font-serif text-2xl font-bold tracking-tight">MatchaAura</span>
          </Link>
          <h1 className="text-2xl font-serif font-bold text-emerald-950">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mt-2">Sign in to your account to continue</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <Input type="email" placeholder="you@example.com" required className="h-12" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700">
                Forgot password?
              </a>
            </div>
            <Input type="password" placeholder="••••••••" required className="h-12" />
          </div>

          <Button type="submit" className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white mt-6">
            Sign In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-emerald-600 font-medium hover:text-emerald-700 hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
