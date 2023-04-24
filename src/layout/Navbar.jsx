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
        <a
          href='https://react.gcornea.ca'
          className={styles.link}
          target='_blank'
        >
          React
        </a>
        <a
          href='https://cplus.gcornea.ca'
          className={styles.link}
          target='_blank'
        >
          C++
        </a>
        <Link to='/about' className={styles.link} getActiveProps={activeLink}>
          About
        </Link>
      </nav>
    </div>
  );
};
