import { Profile } from '../components/profile/Profile';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.about}>
      <Profile />
    </div>
  );
};
