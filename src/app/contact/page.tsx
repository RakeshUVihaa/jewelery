export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We’d love to hear from you. Get in touch for orders, support, or custom jewelry inquiries.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="button"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Our Address</h3>
            <p className="text-gray-600 mt-2">
              123 Jewelry Street, Ahmedabad, Gujarat, India
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 mt-2">
              support@yourjewelrybrand.com
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600 mt-2">
              +91 98765 43210
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Working Hours</h3>
            <p className="text-gray-600 mt-2">
              Mon - Sat: 10:00 AM - 7:00 PM
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold">
          Need Custom Jewelry?
        </h2>
        <p className="text-gray-600 mt-2">
          We create personalized designs just for you.
        </p>

        <a href="/products">
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Explore Collection
          </button>
        </a>
      </section>

    </div>
  );
}