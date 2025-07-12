'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
      description: 'A nourishing herbal drink infused with Awla and Ayurvedic botanicals, designed to energize your mornings and support immunity from the inside out.',
      price: '₹200 (500ml)',
      image: '/images/awla-juice.png',
      images: ['/images/awla-juice.png', '/images/awla-sticker.jpg', '/images/shatayu-logo.png'],
      variants: '500ml and 1000ml',
      whatsapp: 'https://wa.me/9421022555?text=I would like to order Awla Juice'
    },
    {
      name: 'Sweetol',
      description: 'Diabetic-friendly and heat-stable, Sweetol the Sugar Free Drops makes healthy living just a little sweeter.',
      price: '₹200',
      image: '/images/sweetol.png',
      images: ['/images/sweetol.png', '/images/shatayu-logo.png'],
      variants: '30ml',
      whatsapp: 'https://wa.me/9421022555?text=I would like to order Sweetol'
    },
    {
      name: 'Cookies',
      description: 'We have a range of wholesome, easy-to-digest cookies, crafted so you can indulge without the guilt',
      price: '₹170 (250 gms)',
      image: '/images/image.png',
      images: ['/images/cookies.png', '/images/shatayu-logo.png'],
      variants:'Raagi/Multigrain/Wheat/Oats',
      whatsapp: 'https://wa.me/9421022555?text=I would like to order Cookies'
    },
    {
      name: 'Awla Candy',
      description: 'A tangy-sweet treat perfect for a flavorful antioxidant-rich snack on the go.',
      price: '₹100 (250 gms)',
      image: '/images/awla-candy2.jpg',
      images: ['/images/awla-candy2.jpg', '/images/shatayu-logo.png'],
      variants: 'Sweet/Digestive',
      whatsapp: 'https://wa.me/9421022555?text=I would like to order Awla Candy'
    }
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
          className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition cursor-pointer"
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
            We proudly source our variants locally to ensure freshness and support organic living in every bite.
          </p>
        </div>
      </div>
    </section>

    {/* Products */}
    <section id="products" className="py-20 px-4 bg-green-50 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-green-700 mb-10">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
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
          className="bg-white text-gray-900 rounded-xl p-6 max-w-3xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left: Carousel */}
          <div className="w-full md:w-1/2">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={2000}>
              {selectedProduct.images.map((src, idx) => (
                <div key={idx} className="relative w-full h-64">
                  <Image src={src} alt={selectedProduct.name} fill className="object-contain rounded" />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-2">{selectedProduct.name}</h2>
              <p className='mb-3 '>
                {selectedProduct.description}
              </p>
              <p className="text-sm sm:text-base mb-3">
                <strong>Variants:</strong> {selectedProduct.variants}
              </p>
              <p className="text-green-700 font-semibold text-lg mb-4">
                <strong>Price:</strong> {selectedProduct.price}
              </p>
            </div>
            <a
              href={selectedProduct.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-center flex items-center justify-center gap-2"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              Order Now on WhatsApp
            </a>
            <button
              onClick={closePopup}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    )}


    <footer className="bg-green-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/images/shatayu-logo.png" alt="Shatayu Logo" width={60} height={60} />
          <h2 className="text-2xl font-semibold mt-2">Shatayu Organics</h2>
          <p className="text-sm text-green-200 mt-2">
            Pure. Local. Organic.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-green-200">
            <li>
              <a onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} className="cursor-pointer hover:text-white">
                Products
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-3 text-lg">Contact Us</h3>
          <p className="text-sm text-green-200 mb-2">Email: <a href="mailto:shatayuorganics@gmail.com" className="underline">shatayuorganics@gmail.com</a></p>
          <p className="text-sm text-green-200 mb-4">Phone: <a href="tel:+9421022555" className="underline">+91 9359231049</a></p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://wa.me/9421022555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-500 transition"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size='2x' className="w-6 h-6" />
            </a>

            <a
              href="https://www.instagram.com/shatayuorganics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size='2x' className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-green-300 mt-10 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} Shatayu Organics. All rights reserved.
      </div>
    </footer>



    <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" defer></script>
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
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 text-center bg-white">
        <h4 className="text-lg font-semibold text-green-800">{name}</h4>
        <p className="text-green-700 font-medium">{price}</p>
      </div>
    </div>
  );
};

