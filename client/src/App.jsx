import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
