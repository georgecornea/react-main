import styles from './Project.module.css';

export const Project = ({ name, description, to }) => {
  return (
    <a className={styles.project} href={to} target='_blank'>
      <h1>{name}</h1>
      <p>{description}</p>
    </a>
  );
};
