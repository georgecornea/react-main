import { Link } from '@tanstack/react-location';
import styles from './Navbar.module.css';
import gcorneaLogo from '../assets/gcornea.png';

export const Navbar = () => {
  const activeLink = () => {
    return {
      style: {
        borderBottom: '2px solid #fff',
      },
    };
  };

  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <img src={gcorneaLogo} alt='gcornea logo' />
      </Link>
      <nav>
        <Link to='/' className={styles.link} getActiveProps={activeLink}>
          Home
        </Link>
        <Link to='/react' className={styles.link} getActiveProps={activeLink}>
          React
        </Link>
        <Link to='/cplus' className={styles.link} getActiveProps={activeLink}>
          C++
        </Link>
        <Link to='/about' className={styles.link} getActiveProps={activeLink}>
          About
        </Link>
      </nav>
    </div>
  );
};
