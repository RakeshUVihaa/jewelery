export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About Our Jewelry Brand
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Crafting timeless elegance with passion, precision, and purity.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-gray-100 h-80 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">Brand Image</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            We started with a simple vision — to create jewelry that represents
            love, elegance, and timeless beauty. Every piece is carefully designed
            and handcrafted using high-quality materials to ensure perfection.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            From traditional designs to modern aesthetics, we blend art and
            craftsmanship to create jewelry that tells your story.
          </p>
        </div>

      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">Premium Quality</h3>
              <p className="text-gray-600 mt-2">
                We use only certified materials and expert craftsmanship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">Unique Designs</h3>
              <p className="text-gray-600 mt-2">
                Every piece is thoughtfully designed with elegance in mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">Trusted Brand</h3>
              <p className="text-gray-600 mt-2">
                Loved by thousands of customers for quality and trust.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold">
          Let’s Create Something Beautiful Together
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our latest collection and find your perfect piece.
        </p>

        <a href="/products">
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Shop Now
          </button>
        </a>
      </section>

    </div>
  );
}