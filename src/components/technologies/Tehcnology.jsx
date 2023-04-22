import styles from './Technology.module.css';
import { SiReactquery, SiReact } from 'react-icons/si';

export const Technology = ({ technology, href, color }) => {
  return (
    <a href={href} target='_blank' className={styles.technology}>
      {technology === 'react-location' && (
        <>
          <SiReactquery size={50} color={color} className={styles.logo} />
          React Location
        </>
      )}
      {technology === 'react' && (
        <>
          <SiReact size={50} color={color} className={styles.logo} />
          React.js
        </>
      )}
    </a>
  );
};
