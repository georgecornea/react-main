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
      {technology === 'vite' && (
        <>
          <img src='https://vitejs.dev/logo.svg' alt='vite-logo' width='50px' />
          Vite
        </>
      )}
      {technology === 'zustand' && (
        <>
          <img
            src='https://raw.githubusercontent.com/github/explore/990a9efe0b9529eca38ca9e081bc7a97b18dff45/topics/zustand/zustand.png'
            alt='zustand-logo'
            width='50px'
          />
          Zustand
        </>
      )}
    </a>
  );
};
