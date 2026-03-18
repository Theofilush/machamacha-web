import { $api } from "../experiment/api";

export function Homepage() {
  const { data: products, error, isLoading } = $api.useQuery("get", "/products");

  if (isLoading || !products) return <p>Loading products...</p>;

  if (error) return <p>Failed to load products: {error.error}</p>;

  console.log(products);
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-8 text-center">OUR BEST-SELLING MATCHA</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 text-center dark:border-gray-600 dark:bg-gray-800">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-green-600 dark:text-green-400">From Rp {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-12 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-8 text-center">WHY MATCHA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow rounded dark:bg-gray-700">
              <h3 className="font-semibold">ANTIOXIDANT POWER</h3>
              <p>Matcha is like a cell superhero, keeping you healthy and radiant!</p>
            </div>
            <div className="p-4 bg-white shadow rounded dark:bg-gray-700">
              <h3 className="font-semibold">BRAINPOWER BOOST</h3>
              <p>Sharper focus with a side of calm. It’s like a chill pill and a brain gym in a cup!</p>
            </div>
            <div className="p-4 bg-white shadow rounded dark:bg-gray-700">
              <h3 className="font-semibold">METABOLISM MAGIC</h3>
              <p>Rev up your inner engine! Burn, baby, burn – in the best way!</p>
            </div>
            <div className="p-4 bg-white shadow rounded dark:bg-gray-700">
              <h3 className="font-semibold">HEART’S BEST FRIEND</h3>
              <p>Like a cozy hug for your heart – keeping it strong and loved with every sip.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl font-bold mb-8 text-center">EXPLORE RECIPES</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="border p-4 dark:border-gray-600 dark:bg-gray-800">ICED MATCHA LATTE</div>
            <div className="border p-4 dark:border-gray-600 dark:bg-gray-800">COCONUT MATCHA</div>
            <div className="border p-4 dark:border-gray-600 dark:bg-gray-800">MATCHARICANO</div>
            <div className="border p-4 dark:border-gray-600 dark:bg-gray-800">ICED HOJICHA LATTE</div>
          </div>
        </div>
      </section>
    </>
  );
}
