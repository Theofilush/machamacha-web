import { Menu, Leaf, Search, Heart, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Button } from "~/components/ui/button";
import { useCartStore, useWishlistStore } from "~/lib/store";

export function Layout() {
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2 text-emerald-800">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-xl font-bold tracking-tight">MachaMacha</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/products" className="hover:text-emerald-700 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="hover:text-emerald-700 transition-colors">
              About Us
            </Link>
            <Link to="/blog" className="hover:text-emerald-700 transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="hover:text-emerald-700 transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-emerald-600 text-[10px] font-medium text-white flex items-center justify-center">{wishlistItems.length}</span>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-emerald-600 text-[10px] font-medium text-white flex items-center justify-center">{cartCount}</span>}
              </Button>
            </Link>
            <Link to="/profile" className="hidden sm:block">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white p-4">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
                Profile
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-emerald-950 text-emerald-50 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-emerald-400 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-xl font-bold">MachaMacha</span>
            </Link>
            <p className="text-sm text-emerald-200/80">Premium ceremonial grade matcha and handcrafted accessories for your daily ritual.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-100">Shop</h4>
            <ul className="space-y-2 text-sm text-emerald-200/80">
              <li>
                <Link to="/products?category=matcha_powder" className="hover:text-emerald-400">
                  Matcha Powder
                </Link>
              </li>
              <li>
                <Link to="/products?category=matcha_latte" className="hover:text-emerald-400">
                  Matcha Latte
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="hover:text-emerald-400">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/promo" className="hover:text-emerald-400">
                  Promos & Discounts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-100">Support</h4>
            <ul className="space-y-2 text-sm text-emerald-200/80">
              <li>
                <Link to="/faq" className="hover:text-emerald-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-emerald-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-100">Newsletter</h4>
            <p className="text-sm text-emerald-200/80 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-emerald-900 border-emerald-800 text-sm rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <Button variant="default" className="bg-emerald-600 hover:bg-emerald-500 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-emerald-900/50 text-center text-sm text-emerald-200/60">
          &copy; {new Date().getFullYear()} MachaMacha. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
