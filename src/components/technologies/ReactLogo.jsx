import reactLogo from '../../assets/react.svg';
import './technologies.css';

export const ReactLogo = () => {
  return (
    <div>
      <a href='https://reactjs.org' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </div>
  );
};
