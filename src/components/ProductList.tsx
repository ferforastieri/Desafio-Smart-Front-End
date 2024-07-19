import React, { useState } from 'react';
import Product from './Product';
import { ProductType } from '../types';

interface ProductListProps {
  addToCart: (product: ProductType) => void;
}

const mockProductsData: ProductType[] = [
  { id: 1, name: 'Produto 1', price: 10, cartId: '1', imageUrl: '/assets/product1.jpg' },
  { id: 2, name: 'Produto 2', price: 27, cartId: '2', imageUrl: '/assets/product2.jpg' },
  { id: 3, name: 'Produto 3', price: 35.5, cartId: '3', imageUrl: '/assets/product3.jpg' },
  { id: 4, name: 'Produto 4', price: 45, cartId: '4', imageUrl: '/assets/product4.jpg' },
  { id: 5, name: 'Produto 5', price: 56, cartId: '5', imageUrl: '/assets/product5.jpg' },
  { id: 6, name: 'Produto 6', price: 12.5, cartId: '6', imageUrl: '/assets/product6.jpg' },
  { id: 7, name: 'Produto 7', price: 599, cartId: '7', imageUrl: '/assets/product7.jpg' },
  { id: 8, name: 'Produto 8', price: 9.99, cartId: '8', imageUrl: '/assets/product8.jpg' },
  { id: 9, name: 'Produto 9', price: 19, cartId: '9', imageUrl: '/assets/product9.jpg' },
  { id: 10, name: 'Produto 10', price: 78, cartId: '10', imageUrl: '/assets/product10.jpg' },
  { id: 11, name: 'Produto 11', price: 9.45, cartId: '11', imageUrl: '/assets/product11.jpg' },
];

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const [products] = useState<ProductType[]>(mockProductsData);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(mockProductsData);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'priceAsc' | 'priceDesc'>('priceAsc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(5);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
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
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Procurar por nome..."
          className="px-3 py-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={handleSort}
        >
          Ordenar por preço {sortBy === 'priceAsc' ? '↑' : '↓'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProducts.map((product) => (
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
















