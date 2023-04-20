import { ReactLogo } from '../components/technologies/ReactLogo';
import { ViteLogo } from '../components/technologies/ViteLogo';
import { DarkOverlay } from '../layout/DarkOverlay';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.home}>
      <DarkOverlay>
        <div className={styles.inner}>
          HOME
          <ViteLogo />
          <ReactLogo />
        </div>
      </DarkOverlay>
    </div>
  );
};
