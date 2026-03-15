export function Products() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-8 text-center">OUR PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="border p-4 rounded shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <img src="https://via.placeholder.com/200" alt="Ajisai Midori" className="mx-auto mb-4" />
            <h3 className="font-semibold">Ajisai Midori - Premium Culinary Matcha</h3>
            <p className="text-green-600 dark:text-green-400">From Rp 540.000,00</p>
          </div>
          <div className="border p-4 rounded shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <img src="https://via.placeholder.com/200" alt="Bamboo Whisk" className="mx-auto mb-4" />
            <h3 className="font-semibold">Bamboo Whisk - Matcha Whisk</h3>
            <p className="text-green-600 dark:text-green-400">Rp 150.000,00</p>
          </div>
          <div className="border p-4 rounded shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <img src="https://via.placeholder.com/200" alt="Glass Measuring Cup" className="mx-auto mb-4" />
            <h3 className="font-semibold">Glass Measuring Cup - 50ml</h3>
            <p className="text-green-600 dark:text-green-400">Rp 35.000,00</p>
          </div>
          <div className="border p-4 rounded shadow-sm dark:border-gray-600 dark:bg-gray-800">
            <img src="https://via.placeholder.com/200" alt="Lovina Pink Glaze Bowl" className="mx-auto mb-4" />
            <h3 className="font-semibold">Lovina Pink Glaze Matcha Bowl Set</h3>
            <p className="text-green-600 dark:text-green-400">Rp 270.000,00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
