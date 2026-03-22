import { ShoppingBag, Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { Button } from "~/components/ui/button";
import { useCartStore } from "~/lib/store";

export function Cart() {
  const { items, removeItem, updateQuantity, getCartTotal, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
            name: item.name,
          })),
          customerDetails: {
            first_name: "Customer",
            last_name: "Name",
            email: "customer@example.com",
            phone: "08123456789",
          },
        }),
      });

      const data = await response.json();

      if (data.token) {
        // @ts-ignore
        window.snap.pay(data.token, {
          onSuccess: function (result: any) {
            clearCart();
            navigate("/checkout/success");
          },
          onPending: function (result: any) {
            console.log("pending", result);
          },
          onError: function (result: any) {
            console.error("error", result);
            setIsCheckingOut(false);
          },
          onClose: function () {
            setIsCheckingOut(false);
          },
        });
      } else {
        throw new Error("Failed to get payment token");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsCheckingOut(false);
      alert("Checkout failed. Please try again.");
    }
  };

  useEffect(() => {
    // Load Midtrans Snap script
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "SB-Mid-client-YOUR_CLIENT_KEY");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="h-24 w-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
          <ShoppingBag className="h-10 w-10" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Looks like you haven't added any matcha to your cart yet.</p>
        <Link to="/products">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-emerald-950 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl shadow-sm border border-emerald-100/50">
              <div className="h-32 w-32 shrink-0 rounded-xl overflow-hidden bg-emerald-50">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-emerald-950 mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.category.replace("_", " ")}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4 sm:mt-0">
                  <div className="flex items-center border border-emerald-200 rounded-lg h-10 bg-white">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-3 h-full text-emerald-700 hover:bg-emerald-50 rounded-l-lg transition-colors"
                      disabled={item.quantity <= 1}>
                      -
                    </button>
                    <span className="w-10 text-center font-medium text-sm text-emerald-950">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 h-full text-emerald-700 hover:bg-emerald-50 rounded-r-lg transition-colors">
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-emerald-800">Rp {(item.price * item.quantity).toLocaleString("id-ID")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100/50 sticky top-24">
            <h3 className="text-xl font-serif font-bold text-emerald-950 mb-6">Order Summary</h3>

            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium text-emerald-950">Rp {getCartTotal().toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="font-medium text-emerald-950">Calculated at checkout</span>
              </div>
              <div className="border-t border-emerald-100 pt-4 flex justify-between items-center">
                <span className="font-semibold text-base text-emerald-950">Total</span>
                <span className="font-bold text-xl text-emerald-800">Rp {getCartTotal().toLocaleString("id-ID")}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              {!isCheckingOut && <ArrowRight className="h-5 w-5" />}
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Secure checkout powered by Midtrans</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
