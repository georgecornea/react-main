import styles from './PhotoBy.module.css';

export const PhotoBy = ({ name, href, left, right, top, bottom }) => {
  return (
    <a href={href} target='_blank' className={styles['photo-by']}>
      Photo by {name}
    </a>
  );
};
