'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const words = ['Shatayu Organics', 'Organic Living'];
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setDisplayedText(currentWord.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);

      if (!isDeleting && updatedCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const products = [
    {
      name: 'Awla Juice',
      price: '₹250',
      image: '/images/awla-juice.png',
      images: ['/images/awla-juice.png', '/images/awala-sticker.jpg', '/images/shatayu-logo.png'],
      ingredients: 'Awla Extract, Stevia, Shatavari, Tulsi Ashwagandha, Amruta, Jesht Madha, Hirda, Added Class 2 Preservatives',
      whatsapp: 'https://wa.me/919359231049?text=I would like to order Awla Juice'
    },
    {
      name: 'Sweetol - Sugar free drops',
      price: '₹320',
      image: '/images/awla-juice.png',
      images: ['/images/awla-juice.png'],
      ingredients: 'Stevia Extracts, Natural Sweeteners',
      whatsapp: 'https://wa.me/919359231049?text=I would like to order Sweetol Sugar Free Drops'
    },
    {
      name: 'Cookies',
      price: '₹750',
      image: '/images/awla-juice.png',
      images: ['/images/awla-juice.png'],
      ingredients: 'Whole Wheat Flour, Organic Jaggery, Ghee',
      whatsapp: 'https://wa.me/919359231049?text=I would like to order Cookies'
    },
  ];
  
  const closePopup = () => setSelectedProduct(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="text-gray-100 bg-gray-900">
      {/* Navbar */}

  `    <nav className="fixed top-0 w-full bg-green-800/60 backdrop-blur-sm text-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1
            className="text-xl sm:text-2xl flex items-center space-x-2 cursor-pointer"
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Image src="/images/shatayu-logo.png" alt="Shatayu Logo" width={40} height={40} />
            <span>Shatayu</span>
          </h1>

          {/* Hamburger Icon */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Nav */}
          <div className="hidden sm:flex space-x-6">
            <a className="cursor-pointer" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</a>
            <a className="cursor-pointer" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About Us</a>
            <a className="cursor-pointer" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>Products</a>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {showMenu && (
          <div className="sm:hidden bg-green-900 px-4 pb-4 pt-2 text-sm space-y-2">
            <a className="block cursor-pointer" onClick={() => { setShowMenu(false); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }}>Home</a>
            <a className="block cursor-pointer" onClick={() => { setShowMenu(false); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}>About Us</a>
            <a className="block cursor-pointer" onClick={() => { setShowMenu(false); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>Products</a>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 text-center">
        <div className="absolute inset-0 bg-[url('/images/bg-leaves.webp')] bg-cover bg-center opacity-90"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-amber-100 font-mono mb-4">
            Welcome to <span className="border-r-2 border-amber-100">{displayedText}</span>
          </h1>
          <p className="text-base sm:text-lg mb-6">Pure, organic, and locally sourced products for a healthier life.</p>
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Explore Products
          </button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 bg-green-100 text-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[550px]">
            <Image
              src="/images/shatayu-logo.png"
              alt="Shatayu Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">About Us</h3>
            <p className="text-base sm:text-lg">
              At Shatayu Organics, we believe that true health begins with what we consume.
              Our mission is to make pure, chemical-free, and sustainably sourced food accessible to every home.
              We proudly source our ingredients locally to ensure freshness and support organic living in every bite.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-4 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-10">Our Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} onClick={() => setSelectedProduct(product)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40" onClick={closePopup}>
          <div
            className="bg-white text-gray-900 rounded-lg p-5 sm:p-6 max-w-md w-full relative z-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
              {selectedProduct.name}
            </h2>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
              {selectedProduct.images.map((src, idx) => (
                <div key={idx} className="relative w-full h-48 sm:h-60">
                  <Image src={src} alt={selectedProduct.name} fill className="object-cover rounded" />
                </div>
              ))}
            </Carousel>
            <p className="mt-4 text-sm sm:text-base">
              <strong>Ingredients:</strong> {selectedProduct.ingredients}
            </p>
            <p className="text-green-800 font-medium my-2">
              <strong>Price:</strong> {selectedProduct.price}
            </p>
            <a
              href={selectedProduct.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
            >
              <ShoppingBagIcon className="h-5 w-5 text-white" />
              Order Now on WhatsApp
            </a>
          </div>
        </div>
      )}


      <footer className="bg-green-800 text-white text-center py-6">
        <p>&copy; 2025 Shatayu. All rights reserved.</p>
        <a href="https://wa.me/919359231049" target="_blank" rel="noopener noreferrer" className="underline mt-2 block">Chat with us on WhatsApp</a>
        <a href="https://www.instagram.com/shatayuorganics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="underline mt-2 block">Follow us on Instagram</a>
      </footer>

    <script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js" defer></script>
    <script src="https://files.bpcontent.cloud/2025/06/20/17/20250620171624-KSBC4V86.js" defer></script>
    </main>
  );
}

const ProductCard = ({ name, price, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-lg font-semibold text-green-800">{name}</h4>
        <p className="text-green-600 font-medium">{price}</p>
      </div>
    </div>
  );
};

