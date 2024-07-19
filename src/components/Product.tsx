import React from 'react';
import { ProductType } from '../types';

interface ProductProps extends ProductType {
  onAddToCart: (product: ProductType) => void;
}

const Product: React.FC<ProductProps> = ({ id, name, price, cartId, imageUrl, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ id, name, price, cartId, imageUrl });
  };

  return (
    <div className="product m-4 p-4 border border-gray-200 rounded-lg shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">Preço: {price} pontos</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-2 rounded-md"
        onClick={handleAddToCart}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default Product;














