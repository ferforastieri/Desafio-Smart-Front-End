import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { ProductType } from '../types';

const mockAddToCart = jest.fn();

jest.mock('../components/ProductList', () => {
  return (props: { addToCart: (product: ProductType) => void }) => (
    <button
      onClick={() =>
        props.addToCart({
          id: 1,
          name: 'Produto Teste',
          price: 10.99,
          cartId: 'mock-cart-id',
          imageUrl: '/images/product-mock.jpg'
        })
      }
    >
      Add Product
    </button>
  );
});

jest.mock('../components/Cart', () => {
  return (props: { cart: ProductType[]; removeFromCart: (cartId: string) => void }) => (
    <div>
      {props.cart.map((item) => (
        <div key={item.id}>
          {item.name} <button onClick={() => props.removeFromCart(item.cartId)}>Remove</button>
        </div>
      ))}
    </div>
  );
});

test('removes a product from the cart', () => {
  render(<App />);

  const addButton = screen.getByText(/Add Product/i);
  fireEvent.click(addButton);

  const removeButton = screen.getByText(/Remove/i);
  fireEvent.click(removeButton);

  expect(screen.queryByText(/Produto Teste/i)).toBeNull();
});

test('adds and removes a product from the cart sequentially', () => {
  render(<App />);

  const addButton = screen.getByText(/Add Product/i);
  fireEvent.click(addButton);

  const removeButton = screen.getByText(/Remove/i);
  fireEvent.click(removeButton);

  expect(screen.queryByText(/Produto Teste/i)).toBeNull();
});





