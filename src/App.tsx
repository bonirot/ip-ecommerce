import "./App.css";
import { AuthProvider } from "./context/authctxt";
import { PaintingsContextProvider } from "./context/paitingsctxt";
import { CartContextProvider, UsersContextProvider } from "./context/userctxt";
import AppRoutes from "./router/app.router";

function App() {
	return (
		<>
			<PaintingsContextProvider>
				<AuthProvider>
					<UsersContextProvider>
						<CartContextProvider>
							<AppRoutes />
						</CartContextProvider>
					</UsersContextProvider>
				</AuthProvider>
			</PaintingsContextProvider>
		</>
	);
}

export default App;
