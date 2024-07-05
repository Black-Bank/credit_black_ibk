import './App.css';
import { AppRoutes } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div>
			<ToastContainer />
			<AppRoutes />
		</div>
	);
}

export default App;
