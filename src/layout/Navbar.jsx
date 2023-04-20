import { Link } from '@tanstack/react-location';

export const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/react'>React</Link>
        <Link to='/cplus'>C++</Link>
        <Link to='/about'>About</Link>
      </nav>
    </div>
  );
};
