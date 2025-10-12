import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { Provider } from './components/ui/provider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
