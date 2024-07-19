import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ProductType } from './types';
import { v4 as uuidv4 } from 'uuid';

const App: React.FC = () => {
  const [cart, setCart] = useState<ProductType[]>([]);

  const handleAddToCart = (product: ProductType) => {
    const productWithUuid = {...product, cartId: uuidv4() };
    setCart((prevCart) => [...prevCart, productWithUuid]);
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.cartId!== cartId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-orange-500 text-white p-6 rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-bold tracking-wide shadow-md">Smart Vendas</h1>
        <p className="text-lg text-gray-200">Seu destino para compras inteligentes</p>
      </header>
      <main className="container mx-auto bg-gray-200 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="bg-white border border-gray-400 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold mb-6">Catálogo de Produtos</h2>
            <ProductList addToCart={handleAddToCart} />
          </div>
          <div className="bg-white border border-gray-400 rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold mb-6">Meu Carrinho</h2>
            <Cart cart={cart} removeFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 p-6 rounded-lg shadow-lg mt-12">
        <p className="text-lg text-gray-600">Copyright 2023 Smart Vendas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;















