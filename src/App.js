import { AppProvider } from './AppContext.js';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import PageWelcome from './pages/PageWelcome';
import PageRegister from './pages/PageRegister';
import PageLogin from './pages/PageLogin';

function App() {
	return (
		<AppProvider>
			<div className="App">
				<Nav />
				<div className="content">
					<Routes>
						<Route path="/" element={<PageWelcome />} />
						<Route path="register" element={<PageRegister />} />
						<Route path="login" element={<PageLogin />} />
					</Routes>
				</div>
			</div>
		</AppProvider>
	);
}

export default App;