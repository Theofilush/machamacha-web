import { Leaf, LoaderIcon } from "lucide-react";
import { Form, Link, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function Login({ errorMessage }: { errorMessage?: string | null }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-emerald-100/50">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="flex items-center gap-2 text-emerald-800 mb-6">
            <Leaf className="h-8 w-8" />
            <span className="font-serif text-2xl font-bold tracking-tight">MachaMacha</span>
          </Link>
          <h1 className="text-2xl font-serif font-bold text-emerald-950">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mt-2">Sign in to your account to continue</p>
        </div>

        {/* <form className="space-y-4" onSubmit={handleSubmit}> */}
        {/* <form className="space-y-4" onSubmit={(e) => e.preventDefault()}></form> */}
        <Form className="space-y-4" method="POST">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <Input name="email" type="email" placeholder="you@example.com" required className="h-12" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-xs text-emerald-600 hover:text-emerald-700">
                Forgot password?
              </a>
            </div>
            <Input name="password" type="password" placeholder="••••••••" required className="h-12" />
          </div>
          {errorMessage && <div className="text-red-600 text-sm mt-2">{errorMessage}</div>}

          <Button type="submit" disabled={isLoading} className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white mt-6 flex items-center justify-center gap-2">
            {isLoading ? (
              <>
                <LoaderIcon className="h-5 w-5 animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </Form>

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
