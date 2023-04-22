import reactLocationLogo from '../../assets/logo-light-react-location.svg';
import styles from './Technology.module.css';
import './technologies.css';
import { SiReactquery } from 'react-icons/si';

export const ReactLocation = () => {
  return (
    <a
      href='https://react-location.tanstack.com/'
      target='_blank'
      className={styles.technology}
    >
      {/* <img className='logo' src={reactLocationLogo} alt='React Location' /> */}
      <SiReactquery size={50} color='red' className={styles.logo} /> React
      Location
    </a>
  );
};
