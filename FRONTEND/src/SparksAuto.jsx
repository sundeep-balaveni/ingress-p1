// src/App.jsx

import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaUser,
  FaBars,
  FaCar,
  FaTools,
  FaCog,
} from "react-icons/fa";

const categories = [
  "Wheels & Tires",
  "Brakes",
  "Suspension",
  "Exhaust Systems",
  "Performance Parts",
  "Engine Parts",
  "Exterior Accessories",
  "Interior Accessories",
  "Lighting",
  "Electronics",
  "Tools & Garage",
  "Fluids & Chemicals",
  "Body Parts",
  "Racing Equipment",
  "Maintenance",
];

const products = [
  {
    id: 1,
    name: "Vossen HF-5 Wheel",
    category: "Wheels",
    price: 899,

    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200",
  },

  {
    id: 2,
    name: "Brembo GT Brake Kit",
    category: "Brakes",
    price: 1499,

    image:
      "https://images.unsplash.com/photo-1613214150384-df1c124c2a5f?q=80&w=1200",
  },

  {
    id: 3,
    name: "Akrapovic Exhaust",
    category: "Exhaust",
    price: 2199,

    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200",
  },

  {
    id: 4,
    name: "KW V3 Coilovers",
    category: "Suspension",
    price: 1899,

    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200",
  },

  {
    id: 5,
    name: "AEM Cold Air Intake",
    category: "Performance",
    price: 349,

    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
  },

  {
    id: 6,
    name: "Motul Racing Oil",
    category: "Fluids",
    price: 89,

    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200",
  },
];

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600 transition-all"
    >
      <div className="overflow-hidden">

        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={product.image}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-5">

        <p className="text-red-500 uppercase text-xs mb-2 tracking-widest">
          {product.category}
        </p>

        <h2 className="text-2xl font-bold mb-5">
          {product.name}
        </h2>

        <div className="flex justify-between items-center">

          <span className="text-4xl font-black">
            ${product.price}
          </span>

          <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition-all">
            Add To Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      {/* TOP HEADER */}

      <div className="bg-zinc-950 border-b border-zinc-800 px-8 py-3 flex justify-between items-center text-sm text-zinc-400">

        <div className="flex gap-8">
          <span>+1 (888) 123-4567</span>
          <span>Free Shipping On Orders Over $199</span>
        </div>

        <div className="flex gap-8">
          <span>Track Order</span>
          <span>Help Center</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}

      <div className="bg-black border-b border-zinc-800 px-8 py-5 flex justify-between items-center sticky top-0 z-50">

        <div className="flex items-center gap-14">

          <div>
            <h1 className="text-5xl font-black tracking-widest">
              <span className="text-white">SPARK</span>
              <span className="text-red-600">STORE</span>
            </h1>

            <p className="text-zinc-500 text-xs tracking-[5px] uppercase mt-1">
              Performance Parts
            </p>
          </div>

          <div className="hidden xl:flex gap-8 uppercase text-sm font-semibold text-zinc-300">
            <a href="#" className="text-red-600">Home</a>
            <a href="#">Performance</a>
            <a href="#">Wheels & Tires</a>
            <a href="#">Exterior</a>
            <a href="#">Interior</a>
            <a href="#">Lighting</a>
            <a href="#">Tools & Garage</a>
            <a href="#">Brands</a>
          </div>
        </div>

        {/* SEARCH */}

        <div className="hidden xl:flex items-center bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden w-[450px]">

          <input
            type="text"
            placeholder="Search performance parts..."
            className="bg-transparent outline-none px-5 py-4 flex-1"
          />

          <button className="bg-red-600 px-5 py-4">
            <FaSearch />
          </button>
        </div>

        {/* ICONS */}

        <div className="flex items-center gap-8 text-2xl">

          <FaHeart className="cursor-pointer hover:text-red-500 transition-all" />

          <FaUser className="cursor-pointer hover:text-red-500 transition-all" />

          <div className="relative cursor-pointer">

            <FaShoppingCart className="hover:text-red-500 transition-all" />

            <span className="absolute -top-2 -right-2 bg-red-600 text-xs px-2 py-1 rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}

      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-[320px] bg-zinc-950 border-r border-zinc-800 min-h-screen">

          <div className="bg-red-600 px-6 py-5 flex items-center gap-4 font-bold uppercase tracking-wider">

            <FaBars />

            <span>Shop By Category</span>
          </div>

          <div className="py-4">

            {categories.map((cat, index) => (
              <div
                key={index}
                className="px-6 py-4 border-b border-zinc-900 hover:bg-zinc-900 cursor-pointer flex items-center justify-between transition-all"
              >

                <div className="flex items-center gap-4">

                  <FaCog className="text-red-500" />

                  <span>{cat}</span>
                </div>

                <span className="text-zinc-500">›</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}

        <div className="flex-1">

          {/* HERO */}

          <div className="relative h-[600px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000"
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 flex items-center h-full px-20">

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >

                <p className="uppercase tracking-[8px] text-red-500 mb-5">
                  Premium Automotive Performance
                </p>

                <h1 className="text-8xl font-black leading-tight max-w-5xl">
                  Performance
                  <span className="text-red-600">
                    {" "}That Drives You
                  </span>
                </h1>

                <p className="text-zinc-300 text-2xl mt-8 max-w-3xl leading-10">
                  Premium spare parts engineered for speed,
                  precision, and racing-level performance.
                </p>

                <button className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl font-bold text-lg transition-all">
                  Shop Performance Parts
                </button>
              </motion.div>
            </div>
          </div>

          {/* FEATURED PRODUCTS */}

          <div className="px-14 py-14">

            <div className="flex justify-between items-center mb-12">

              <div>

                <h2 className="text-5xl font-black mb-4">
                  Featured Products
                </h2>

                <p className="text-zinc-400 text-lg">
                  Explore premium automotive spare parts.
                </p>
              </div>

              <button className="border border-red-600 px-6 py-3 rounded-xl hover:bg-red-600 transition-all">
                View All Products
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>

          {/* BANNER */}

          <div className="px-14 pb-20">

            <div className="relative rounded-3xl overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000"
                className="w-full h-[350px] object-cover"
              />

              <div className="absolute inset-0 bg-black/70" />

              <div className="absolute inset-0 flex items-center px-20">

                <div>

                  <p className="uppercase tracking-[8px] text-red-500 mb-4">
                    Racing Collection
                  </p>

                  <h2 className="text-6xl font-black leading-tight max-w-4xl">
                    Upgrade Your Ride
                    <br />
                    With Premium Exhaust Systems
                  </h2>

                  <button className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-5 rounded-xl font-bold text-lg">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}

          <div className="border-t border-zinc-800 px-14 py-12 flex justify-between items-center">

            <div>

              <h2 className="text-4xl font-black">
                <span className="text-white">SPARK</span>
                <span className="text-red-600">STORE</span>
              </h2>

              <p className="text-zinc-500 mt-3">
                Premium automotive performance marketplace.
              </p>
            </div>

            <div className="flex gap-10 text-zinc-500">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}