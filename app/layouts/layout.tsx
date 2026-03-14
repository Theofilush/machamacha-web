import { Outlet, Scripts, ScrollRestoration } from "react-router";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-green-600 text-white text-center py-2 text-sm dark:bg-green-800">FREE SHIPPING WITH JNE OR J&T 🚚 ON ORDERS RP250.000 AND ABOVE 🚚</div>

      <header className="flex justify-between items-center px-6 py-4 shadow dark:bg-gray-800">
        <div className="text-2xl font-bold text-green-700 dark:text-green-400">MatchaBali</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
            Shop
          </a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
            Recipes
          </a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
            Contact Us
          </a>
          <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
            Matcha for Cafés
          </a>
        </nav>
        <button
          onClick={() => {
            const html = document.documentElement;
            const icon = document.getElementById("darkModeIcon");
            html.classList.toggle("dark");
            if (icon) {
              icon.textContent = html.classList.contains("dark") ? "🌙" : "🌞";
            }
          }}
          className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white flex items-center transition-colors duration-300">
          <span id="darkModeIcon">🌞</span>
          <span className="ml-2">Toggle</span>
        </button>
      </header>

      <section className="relative bg-green-100 py-20 text-center dark:bg-gray-700 transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">GOOD QUALITY MATCHA FOR EVERYONE, EVERY DAY.</h1>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">SHOP NOW</button>
        </div>
      </section>

      {children || <Outlet />}

      <section className="bg-green-100 py-12 text-center dark:bg-gray-700 transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-4">NEWSLETTER SIGNUP</h2>
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded border w-64 dark:bg-gray-800 dark:border-gray-600" />
          <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Subscribe</button>
        </div>
      </section>

      <footer className="bg-green-700 text-white py-12 dark:bg-gray-900 transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-3">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Matcha Powder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bundles
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">
                Instagram
              </a>
              <a href="#" className="hover:text-green-300">
                Facebook
              </a>
              <a href="#" className="hover:text-green-300">
                WhatsApp
              </a>
            </div>
            <div className="mt-4">
              <button className="bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300">Message us 💬</button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 dark:border-gray-700 mt-8 pt-6 text-center text-sm">© 2026 MatchaBali. All rights reserved.</div>
      </footer>
    </div>
  );
}
