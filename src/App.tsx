import { ExtractProvider } from 'context/extract.context';
import { AppRoutes } from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} theme="colored" pauseOnHover={false} />
      <ExtractProvider>
        <AppRoutes />
      </ExtractProvider>
    </div>
  );
}

export default App;
