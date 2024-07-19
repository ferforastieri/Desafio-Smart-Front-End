import React from 'react';
import { ProductType } from '../types';

interface CartProps {
  cart: ProductType[];
  removeFromCart: (cartId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart-container mt-4">
      <h2 className="text-xl font-semibold mb-2">Carrinho de Compras</h2> {/* Adiciona um texto acessível */}
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.cartId}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              <p>{product.name}</p>
              <p>${product.price.toFixed(2)}</p> {/* Corrigido a formatação do preço */}
              <button
                className="text-red-600 hover:text-red-700"
                onClick={() => removeFromCart(product.cartId)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-semibold">Total: ${totalPrice.toFixed(2)}</p> {/* Corrigido o texto de "Total Points" */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;














