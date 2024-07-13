
import React, { useEffect, useState } from "react";
import { fetchData } from "../api/products/getProducts";
import ProductModal from "../components/Modal";
import Lenis from "lenis";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData();
        setProducts(data);
        console.log(data)
      } catch (error) {
        setError(error.message);
      }
    };

    getProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-8xl">All products</h1>
      {products.length > 0 ? (
        <div className="h-full w-full flex flex-col gap-5 mt-10">
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 border-b p-3 gap-3 mb-4">
              <div className="flex flex-col gap-6">
                <h1 className="font-bold text-3xl">{product.title}</h1>
                <p>{product.description}</p>

                <span>{product.price}$</span>
                <button onClick={() => openModal(product)} className="border px-5 py-5 rounded w-4/5">View Details</button>
              </div>
              <img src={product.image} alt="Product" className="h-[35vh] lg:h-[50vh] w-full object-contain" />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default AllProducts;
