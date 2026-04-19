import { Leaf, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { fetchClient } from "~/lib/api";

export function Homepage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      const { data, error } = await fetchClient.GET("/products");
      if (!error && data) {
        setProducts(data);
      }
      setIsLoading(false);
    }
    load();
  }, []);

  const featuredProducts = products?.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2000&auto=format&fit=crop" alt="Matcha preparation" className="w-full h-full object-cover brightness-[0.6]" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">Elevate Your Daily Ritual</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-emerald-50/90">Discover premium ceremonial grade matcha sourced directly from the finest tea farms in Uji, Japan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-emerald-600 hover:bg-emerald-500">
                Shop Matcha
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 border-white text-white hover:bg-white/20 hover:text-white bg-transparent">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-emerald-100/50">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-700">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Organic</h3>
            <p className="text-muted-foreground text-sm">Sustainably grown and harvested without pesticides.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-emerald-100/50">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-700">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-muted-foreground text-sm">Stone-ground to preserve nutrients and vibrant color.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-emerald-100/50">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-700">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
            <p className="text-muted-foreground text-sm">Free delivery on orders over Rp 500.000.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Featured Collection</h2>
            <p className="text-muted-foreground">Our most loved matcha essentials.</p>
          </div>
          <Link to="/products" className="hidden sm:flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition-colors">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-sm">
                  <Skeleton className="h-64 w-full rounded-none" />
                  <CardContent className="p-4">
                    <Skeleton className="h-4 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-1/3 mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))
            : featuredProducts?.map((product) => (
                <Link key={product.id} to={`/products/${product.slug}`} className="group">
                  <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                    <div className="relative h-64 overflow-hidden bg-emerald-50">
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg mb-1 group-hover:text-emerald-700 transition-colors">{product.name}</h3>
                      <p className="text-emerald-800 font-semibold mb-4">Rp {product.price.toLocaleString("id-ID")}</p>
                      <Button variant="outline" className="w-full border-emerald-200 text-emerald-800 hover:bg-emerald-50">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
        </div>
        <div className="mt-8 sm:hidden flex justify-center">
          <Link to="/products">
            <Button variant="outline" className="border-emerald-200 text-emerald-800">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter / Promo Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-emerald-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img src="https://picsum.photos/seed/matcha-texture/2000/1000?blur=2" alt="Matcha Texture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Join the Matcha Club</h2>
            <p className="text-emerald-100 mb-8 text-lg">Subscribe to our newsletter and get 10% off your first order. Plus, receive exclusive recipes and early access to new products.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 bg-white text-emerald-950 placeholder:text-emerald-900/50 border-white/20 focus:ring-emerald-400 focus:border-emerald-400"
                required
              />
              <Button type="submit" size="lg" className="h-12 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-200">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
