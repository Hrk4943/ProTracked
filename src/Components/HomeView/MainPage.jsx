import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import ProductCards from "./ProductCards";

export default function MainPage({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Banner />
      <div>
        <h2 className="text-2xl flex justify-center mt-14 font-semibold mb-4">
          Products
        </h2>
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search by product name"
            className="px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredProducts.map((product) => (
            <ProductCards key={product.id} products={product} />
          ))}
        </div>
      </div>
    </>
  );
}
