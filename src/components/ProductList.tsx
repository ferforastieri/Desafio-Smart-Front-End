import React, { useState, useEffect } from 'react';
import Product from './Product';
import { ProductType } from '../types';

interface ProductListProps {
  addToCart: (product: ProductType) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'priceAsc' | 'priceDesc'>('priceAsc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(5);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    const sorted = [...filteredProducts].sort((a, b) =>
      sortBy === 'priceAsc' ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted);
    setSortBy(sortBy === 'priceAsc' ? 'priceDesc' : 'priceAsc');
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Procurar por nome..."
          className="px-3 py-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={handleSort}
        >
          Ordenar por preço {sortBy === 'priceAsc' ? '↑' : '↓'}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map(product => (
          <Product
            key={product.id}
            {...product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <div className="mt-4">
        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 mx-1 border border-gray-300 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;













