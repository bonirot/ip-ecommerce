export interface User {
  name: string;
  username: string;
  mail: string;
  password: string;
  cart: Cart[];
  wishlist: [];
}

interface Cart {
  id: number;
  quantity: number;
}
