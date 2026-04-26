import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-8 text-center">Our Story</h1>

      <div className="prose prose-emerald lg:prose-lg mx-auto text-gray-700 space-y-6">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop"
          alt="Matcha farm"
          className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-sm"
          referrerPolicy="no-referrer"
        />

        <p className="lead text-xl text-emerald-800 font-medium text-center mb-8">
          MatchaAura was born from a simple desire: to bring the authentic, vibrant, and transformative power of Japanese ceremonial matcha to your daily routine.
        </p>

        <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-12 mb-4">The Origin</h2>
        <p>
          Our journey began in the lush, rolling hills of Uji, Kyoto—the birthplace of Japanese green tea. We partnered directly with multi-generational tea farmers who have dedicated their lives to
          perfecting the art of cultivating tencha, the shade-grown tea leaves used to make matcha.
        </p>

        <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-12 mb-4">Our Commitment</h2>
        <p>
          We believe that true quality cannot be rushed. Our matcha is shade-grown for 30 days before harvest to boost chlorophyll and L-theanine levels, resulting in a vibrant green color and a
          smooth, umami-rich flavor profile without the bitterness often found in lower-grade teas.
        </p>
        <p>Every batch is carefully stone-ground using traditional granite mills, a slow process that prevents heat from degrading the delicate nutrients and flavor compounds.</p>

        <h2 className="text-2xl font-serif font-bold text-emerald-900 mt-12 mb-4">Beyond the Tea</h2>
        <p>
          Matcha is more than just a beverage; it's a ritual. That's why we also offer a curated selection of handcrafted accessories, from bamboo chasens (whisks) to ceramic chawans (bowls), designed
          to elevate your preparation experience and help you find a moment of mindful calm in your busy day.
        </p>
      </div>

      <div className="mt-16 text-center">
        <Link to="/products">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8">
            Explore Our Collection
          </Button>
        </Link>
      </div>
    </div>
  );
}
