'use client';
import Image from 'next/image';
// import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <nav className="fixed top-0 w-full bg-green-800 text-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shatayu</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#products" className="hover:underline">Products</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        {/* Background image layer */}
        <div className="absolute inset-0 bg-[url('/images/bg-leaves.webp')] bg-cover bg-center opacity-90 z-0"></div>
        {/* Content layer */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl  text-amber-100 mb-4">Welcome to Shatayu</h1>
          <p className="text-xl mb-6">Pure, organic, and locally sourced products for a healthier life.</p>
          <button
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 cursor-pointer"
          >
            Explore Products
          </button>

        </div>
      </section>


      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-6">About Us</h3>
          <p className="text-lg text-gray-700">
            Shatayu is a family-run business rooted in the belief that health starts with what we consume.
            Our mission is to make pure, chemical-free, and sustainably sourced food accessible to every home.
          </p>
        </div>
      </section>

      <section id="products" className="py-20 bg-green-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-10">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ProductCard image="/images/awla-juice.png" name="Awla Juice" price="₹250" />
            <ProductCard image="/images/awla-juice.png" name="Sweetol - Sugar free drops" price="₹320" />
            <ProductCard image="/images/awla-juice.png" name="Cookies" price="₹750" />
          </div>
        </div>
      </section>

      <footer className="bg-green-800 text-white text-center py-6">
        <p>&copy; 2025 Shatayu. All rights reserved.</p>
        <a href="https://wa.me/919421022555" target="_blank" rel="noopener noreferrer" className="underline mt-2 block">
          Chat with us on WhatsApp
        </a>
      </footer>
    </main>
  );
}


const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Product image on top */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Name and price below */}
      <div className="p-4 text-center">
        <h4 className="text-lg font-semibold text-green-800">{name}</h4>
        <p className="text-green-600 font-medium">{price}</p>
      </div>
    </div>
  );
};
