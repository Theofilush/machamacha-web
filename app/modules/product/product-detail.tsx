import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Heart, Star, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { $api } from "~/lib/api";
import { type Product, useCartStore, useWishlistStore } from "~/lib/store";
import { formatIDRCurrency } from "~/lib/utils";

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);

  const {
    data: rawProduct,
    isLoading,
    error,
  } = $api.useQuery("get", "/products/{slug}", {
    params: {
      path: { slug: slug as string },
    },
  });

  const product = rawProduct as Product;

  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="h-[500px] w-full rounded-2xl" />
          <div className="space-y-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-1/3" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 flex-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products">
          <Button className="bg-emerald-600 hover:bg-emerald-500">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative rounded-3xl overflow-hidden bg-emerald-50 aspect-square md:aspect-auto md:h-[600px]">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          <button onClick={() => toggleWishlist(product)} className="absolute top-6 right-6 p-3 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-emerald-700 transition-colors shadow-sm">
            <Heart className={`h-6 w-6 ${isInWishlist(product.id) ? "fill-emerald-600 text-emerald-600" : ""}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2 text-sm text-emerald-600 font-medium uppercase tracking-wider">{product.category.replace("_", " ")}</div>
          <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-4 leading-tight">{product.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-amber-500">
              <Star className="h-5 w-5 fill-current" />
              <span className="ml-1 font-medium text-gray-700">{product.rating ?? 0}</span>
            </div>
            <span className="text-muted-foreground text-sm">({product.reviews ?? 0} reviews)</span>
          </div>

          <p className="text-3xl font-semibold text-emerald-800 mb-8">{formatIDRCurrency(product.price)}</p>

          <div className="prose prose-emerald mb-8 text-gray-600">
            <p>{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="flex items-center border border-emerald-200 rounded-lg h-14 bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 h-full text-emerald-700 hover:bg-emerald-50 rounded-l-lg transition-colors" disabled={quantity <= 1}>
                -
              </button>
              <span className="w-12 text-center font-medium text-emerald-950">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 h-full text-emerald-700 hover:bg-emerald-50 rounded-r-lg transition-colors">
                +
              </button>
            </div>
            <Button
              size="lg"
              className="flex-1 h-14 text-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg transition-all"
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addItem(product);
                }
              }}>
              <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-emerald-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-50 rounded-full text-emerald-600 shrink-0">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-emerald-950 text-sm">Free Shipping</h4>
                <p className="text-xs text-muted-foreground mt-1">On orders over Rp 500.000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-50 rounded-full text-emerald-600 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-emerald-950 text-sm">Secure Payment</h4>
                <p className="text-xs text-muted-foreground mt-1">100% secure checkout via Midtrans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
