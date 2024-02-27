import {
	createContext,
	useState,
	useContext,
	useEffect,
	PropsWithChildren,
	FC,
} from "react";
import { User } from "../../interfaces/user";
import { Product } from "../../interfaces/productinfo";

export interface UserContextType {
	user: User;
	setUser: Function;
}

export const userContext = createContext({} as UserContextType);

export const UsersContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState({} as User);
	// console.log({ cart });
	// console.log({ cartProducts });

	useEffect(() => {
		setUser(user);
	}, [user, setUser]);

	return (
		<userContext.Provider value={{ user, setUser }}>
			{children}
		</userContext.Provider>
	);
};

export function useUsersContext() {
	const context = useContext(userContext);
	if (!context) {
		throw new Error("Error");
	}
	return context;
}

interface CartContextType {
	cartProducts: Product[];
	setCartProducts: any;
}

export const cartContext = createContext<CartContextType>({
	cartProducts: [],
	setCartProducts: () => {},
});

export const CartContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);
	console.log({ cartProducts });

	useEffect(() => {
		setCartProducts(cartProducts);
	}, [cartProducts, setCartProducts]);

	return (
		<cartContext.Provider value={{ cartProducts, setCartProducts }}>
			{children}
		</cartContext.Provider>
	);
};

export function useCartContext() {
	const context = useContext(cartContext);
	if (!context) {
		throw new Error("Error");
	}
	return context;
}
