import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { AppProvider } from "./context/appContext";

const App = () => {
	return (
		<AppProvider>
			<Navbar></Navbar>
			<MainSection></MainSection>
		</AppProvider>
	);
};

export default App;
