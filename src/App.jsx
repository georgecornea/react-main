import { Router, Outlet, ReactLocation } from '@tanstack/react-location';
import { Main } from './layout/Main';
import { Navbar } from './layout/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Footer } from './layout/Footer';
import { NotFound } from './pages/NotFound';

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
  {
    path: '/*',
    element: <NotFound />,
  },
];

function App() {
  return (
    <Router routes={routes} location={location}>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
