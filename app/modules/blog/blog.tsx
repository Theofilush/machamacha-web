import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Art of Whisking: A Guide to Perfect Matcha",
      excerpt: "Master the traditional technique of whisking matcha to achieve that perfect, creamy froth every time.",
      image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1000&auto=format&fit=crop",
      date: "March 15, 2026",
      category: "Guides",
    },
    {
      id: 2,
      title: "Matcha vs. Coffee: The Science of Sustained Energy",
      excerpt: "Discover why the combination of caffeine and L-theanine in matcha provides a calmer, longer-lasting energy boost.",
      image: "https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?q=80&w=1000&auto=format&fit=crop",
      date: "March 10, 2026",
      category: "Wellness",
    },
    {
      id: 3,
      title: "5 Delicious Iced Matcha Latte Recipes for Summer",
      excerpt: "Cool down with these refreshing and easy-to-make iced matcha latte variations.",
      image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1000&auto=format&fit=crop",
      date: "March 5, 2026",
      category: "Recipes",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-4">The Matcha Journal</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore recipes, wellness tips, and the rich history of Japanese green tea.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col">
            <div className="relative h-64 overflow-hidden bg-emerald-50">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wider">{post.category}</div>
            </div>
            <CardContent className="p-6 flex flex-col flex-1">
              <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
              <h3 className="font-serif text-xl font-bold text-emerald-950 mb-3 line-clamp-2 hover:text-emerald-700 transition-colors cursor-pointer">{post.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto">
                <Button variant="link" className="text-emerald-600 p-0 h-auto font-semibold hover:text-emerald-800">
                  Read Article &rarr;
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
