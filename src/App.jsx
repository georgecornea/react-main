import { Router, Outlet, ReactLocation } from '@tanstack/react-location';
import { Main } from './layout/Main';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';

const location = new ReactLocation();
const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

function App() {
  return (
    <Router routes={routes} location={location}>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </Router>
  );
}

export default App;
