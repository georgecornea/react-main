import { Router, Outlet, ReactLocation } from '@tanstack/react-location';
import { Main } from './layout/Main';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';

const location = new ReactLocation();
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
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
