import {
  createContext,
  useState,
  useContext,
  FC,
  PropsWithChildren,
} from "react";
import { Product } from "../../interfaces/productinfo";

export interface PaintingContextType {
  paintings: Product[];
  setPaintings: Function;
}

const painting = createContext({} as PaintingContextType);

export const PaintingsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [paintings, setPaintings] = useState([]);
  return (
    <painting.Provider value={{ paintings, setPaintings }}>
      {children}
    </painting.Provider>
  );
};

export function usePaintingsContext() {
  const context = useContext(painting);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}
