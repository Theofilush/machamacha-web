import { useQuery } from "@tanstack/react-query";
import { Search, SlidersHorizontal, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { type Product, useCartStore, useWishlistStore } from "~/lib/store";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "featured");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });

  const { addItem } = useCartStore();
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams((prev) => {
      if (searchQuery) prev.set("q", searchQuery);
      else prev.delete("q");
      return prev;
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams((prev) => {
      if (category !== "all") prev.set("category", category);
      else prev.delete("category");
      return prev;
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    setSearchParams((prev) => {
      if (value !== "featured") prev.set("sort", value);
      else prev.delete("sort");
      return prev;
    });
  };

  const filteredProducts = products
    ?.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-emerald-900">Search</h3>
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-emerald-200 focus-visible:ring-emerald-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-emerald-900">Categories</h3>
            <div className="space-y-2">
              {["all", "matcha_powder", "matcha_latte", "accessories"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === category ? "bg-emerald-100 text-emerald-800 font-medium" : "text-muted-foreground hover:bg-emerald-50 hover:text-emerald-700"
                  }`}>
                  {category === "all" ? "All Products" : category.replace("_", " ").replace(/\\b\\w/g, (l) => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-3xl font-serif font-bold text-emerald-950">
              {selectedCategory === "all" ? "All Products" : selectedCategory.replace("_", " ").replace(/\\b\\w/g, (l) => l.toUpperCase())}
            </h1>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select value={sortBy} onChange={handleSortChange} className="text-sm border-none bg-transparent focus:ring-0 text-emerald-800 font-medium cursor-pointer">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden border-none shadow-sm">
                  <Skeleton className="h-64 w-full rounded-none" />
                  <CardContent className="p-4">
                    <Skeleton className="h-4 w-2/3 mb-2" />
                    <Skeleton className="h-4 w-1/3 mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))
            ) : filteredProducts?.length === 0 ? (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                <p className="text-lg">No products found matching your criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    handleCategoryChange("all");
                  }}
                  className="text-emerald-600">
                  Clear filters
                </Button>
              </div>
            ) : (
              filteredProducts?.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col">
                  <div className="relative h-64 overflow-hidden bg-emerald-50">
                    <Link to={`/products/${product.id}`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-emerald-700 transition-colors shadow-sm">
                      <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-emerald-600 text-emerald-600" : ""}`} />
                    </button>
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <Link to={`/products/${product.id}`} className="flex-1">
                      <h3 className="font-medium text-lg mb-1 group-hover:text-emerald-700 transition-colors line-clamp-2">{product.name}</h3>
                      <p className="text-emerald-800 font-semibold mb-4">Rp {product.price.toLocaleString("id-ID")}</p>
                    </Link>
                    <Button onClick={() => addItem(product)} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4" /> Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
