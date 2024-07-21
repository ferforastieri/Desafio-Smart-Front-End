export interface ProductType {
  id: number;
  name: string;
  price: number;
  cartId?: string; // Identificador único para cada produto no carrinho
}



