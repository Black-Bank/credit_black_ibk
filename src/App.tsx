import { AppRoutes } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} theme="colored" pauseOnHover={false} />
      <AppRoutes />
    </div>
  );
}

export default App;
