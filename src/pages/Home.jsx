import { Project } from '../components/projects/Project';
import { Projects } from '../components/projects/Projects';
import { ReactLogo } from '../components/technologies/ReactLogo';
import { Technologies } from '../components/technologies/Tehcnologies';
import { ViteLogo } from '../components/technologies/ViteLogo';
import { DarkOverlay } from '../layout/DarkOverlay';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.home}>
      <DarkOverlay>
        <div className={styles.inner}>
          <Technologies>
            <ViteLogo />
            <ReactLogo />
          </Technologies>

          <Projects>
            <Project
              to='https://react.gcornea.ca'
              name='React'
              description='React.js projects'
            />
            <Project
              to='https://cplus.gcornea.ca'
              name='C++'
              description='C++ projects'
            />
          </Projects>
        </div>
      </DarkOverlay>
    </div>
  );
};
