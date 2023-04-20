import styles from './DarkOverlay.module.css';

export const DarkOverlay = ({ children }) => {
  return <div className={styles['dark-overlay']}>{children}</div>;
};
