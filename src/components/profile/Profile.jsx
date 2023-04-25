import styles from './Profile.module.css';
import profilePic from '../../assets/gc.jpg';

export const Profile = () => {
  return (
    <figure className={styles.profile}>
      <div className={styles.info}>
        <img src={profilePic} alt='profile-photo' />
        <div>
          <p>George Cornea</p>
          <a
            target='_blank'
            href='https://www.bcit.ca/programs/computer-systems-diploma-part-time-5500pdiplt/?gclid=CjwKCAjw0ZiiBhBKEiwA4PT9zwerKJ8pgS6gvd-cOQEGU2S0J_zvwWBeOFKAtlrGJJRbnJIQ4NKPYRoC_iEQAvD_BwE&gclsrc=aw.ds#courses'
          >
            Computer Systems Diploma at <span>BCIT</span>{' '}
          </a>
        </div>
      </div>
      <div>Description</div>
    </figure>
  );
};
