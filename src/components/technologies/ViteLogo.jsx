import viteLogo from '/vite.svg';
import './technologies.css';

export const ViteLogo = () => {
  return (
    <div>
      <a href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
    </div>
  );
};
