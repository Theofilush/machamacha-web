import { Leaf, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="h-24 w-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 text-emerald-600">
        <Leaf className="h-12 w-12" />
      </div>

      <h1 className="text-6xl font-serif font-bold text-emerald-950 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-emerald-900 mb-4">Page Not Found</h2>

      <p className="text-muted-foreground max-w-md mb-8">Oops! The page you are looking for seems to have wandered off into the tea fields. It might have been moved or no longer exists.</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button className="w-full sm:w-auto h-12 px-8 bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>
        <Link to="/products">
          <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-emerald-200 text-emerald-800 hover:bg-emerald-50">
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
