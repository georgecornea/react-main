import { PhotoBy } from '../components/misc/PhotoBy';
import { Project } from '../components/projects/Project';
import { Projects } from '../components/projects/Projects';
import { Technologies } from '../components/technologies/Tehcnologies';
import { Technology } from '../components/technologies/Tehcnology';
import { DarkOverlay } from '../layout/DarkOverlay';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.home}>
      <DarkOverlay>
        <div className={styles.inner}>
          <Technologies>
            <Technology
              href='https://react.dev/'
              color='#149ECA'
              technology='react'
            />
            <Technology href='https://vitejs.dev/' technology='vite' />
            <Technology
              href='https://react-location.tanstack.com/'
              color='red'
              technology='react-location'
            />
            <Technology
              href='https://docs.pmnd.rs/zustand/getting-started/introduction'
              technology='zustand'
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
      <PhotoBy
        name='Ingnio Studio'
        href='https://www.pexels.com/photo/turned-on-black-laptop-computer-665214/'
        left={10}
        bottom='100'
      />
    </div>
  );
};
