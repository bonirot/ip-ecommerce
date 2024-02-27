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

const Painting = createContext({} as PaintingContextType);

export const PaintingsContextProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const [paintings, setPaintings] = useState([]);
	console.log({ paintings });
	return (
		<Painting.Provider value={{ paintings, setPaintings }}>
			{children}
		</Painting.Provider>
	);
};

export function usePaintingsContext() {
	const context = useContext(Painting);
	if (!context) {
		throw new Error("Error");
	}
	return context;
}
