interface Product {
  id: number;
  name: string;
  img: string;
  year: number;
  author: Author;
  price: number;
}

interface Author {
  name: string;
  authordescription: string;
  authorimg: string;
}
