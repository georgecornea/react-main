import { Project } from '../components/projects/Project';
import { Projects } from '../components/projects/Projects';
import { ReactLocation } from '../components/technologies/ReactLocation';
import { ReactLogo } from '../components/technologies/ReactLogo';
import { Technologies } from '../components/technologies/Tehcnologies';
import { Technology } from '../components/technologies/Tehcnology';
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
            <Technology
              href='https://react.dev/'
              color='#149ECA'
              technology='react'
            />

            <Technology
              href='https://react-location.tanstack.com/'
              color='red'
              technology='react-location'
            />
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
