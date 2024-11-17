import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

function Products() {
    const [activeProduct, setActiveProduct] = useState(0);
  
    const products = [
      {
        id: 1,
        name: "Centralized Control & Monitoring System",
        description:
          "Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.",
        image: "public/centralized-street-light.jpg",
      },
      {
        id: 2,
        name: "NEMA-Mounted VOLC 1160",
        description:
          "Advanced street light controller with NEMA mounting capabilities.",
        image: "public/NEMA.png",
      },
      {
        id: 3,
        name: "Retrofit Street Light Controller VOLC 2160",
        description:
          "Retrofit solution for existing street light infrastructure.",
        image: "public/RetrofitController.png",
      },
      {
        id: 4,
        name: "Retrofit Street Light Controller VOLC 2180",
        description: "Enhanced retrofit controller with advanced features.",
        image: "public/volc-2180.avif",
      },
      {
        id: 5,
        name: "Retrofit Street Light Controller VOLC 4180",
        description: "Premium retrofit solution for smart city applications.",
        image: "public/volc-4180.webp",
      },
    ];
  
    const nextProduct = () => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    };
  
    const previousProduct = () => {
      setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
    };
  
    return (
      <div className="w-full h-full bg-gradient-to-r from-indigo-300 via-indigo-100 to-indigo-200 pb-16">
        <div className="w-full lg:w-[85%] mx-auto p-4 md:p-12">
          {/* Products Label */}
          <div className="inline-block mb-12 mt-10">
            <span className="px-8 py-2 text-xl font-medium bg-gradient-to-r from-indigo-50 via-transparent to-transparent text-sky-900">
              Products
            </span>
          </div>
  
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl font-normal mb-16 max-w-4xl">
            <span className="block mb-4">
              <span className="font-bold">Cutting-edge hardware, </span>offerings
            </span>
            <span className="block mb-4">helping cities optimize resources and</span>
            <span className="block mb-10">achieve smart development goals</span>
          </h1>
  
          {/* Product Navigation */}
          <div className="flex flex-wrap gap-3 mb-8">
            {products.map((product, index) => (
              <Button
                key={product.id}
                variant={index === activeProduct ? "secondary" : "outline"}
                className={`rounded-none text-xs text-gray-500 border-gray-400 border-2${
                  index === activeProduct ? " bg-gradient-to-r from-blue-400 via-transparent to-blue-400 hover:bg-blue-100 border-2 border-indigo-300" : ""
                }`}
                onClick={() => setActiveProduct(index)}
              >
                {product.name}
              </Button>
            ))}
          </div>
  
          {/* Product Showcase */}
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-none overflow-hidden">
            {/* Image Section */}
            <div className="relative aspect-[4/3] sm:aspect-auto bg-black">
              <img
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                className="object-fill w-full h-full"
              />
              {/* Navigation Arrows */}
              <div className="absolute bottom-0 flex right-0 justify-between w-full sm:w-auto gap-0 sm:-right-10">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-opacity-60 bg-white hover:bg-gray-100 rounded-none "
                  onClick={previousProduct}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white hover:bg-gray-300 rounded-none bg-opacity-60 sm:bg-opacity-0"
                  onClick={nextProduct}
                >
                  <ArrowRight className="h-4 w-4 sm:text-sky-900 " />
                </Button>
              </div>
            </div>
  
            {/* Content Section */}
            <div className="p-8">
              <div className="text-sm text-gray-600 mb-3">
                Products {activeProduct + 1}/{products.length}
              </div>
              <h2 className="text-xl font-bold mb-3">
                {products[activeProduct].name}
              </h2>
              <p className="text-gray-600 mb-8 text-sm">
                {products[activeProduct].description}
              </p>
              <Button className="rounded-full gap-2">
                Know More
                <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Products