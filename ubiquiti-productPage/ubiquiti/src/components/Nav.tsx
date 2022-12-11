import './Nav.css';
import Logo from '../assets/Ubiquiti_logo.png';

interface Props {
  text?: string; 
}

export const Nav: React.FC<Props> = () => {
    return (
      <section className="Nav">
        <img src={Logo} alt="Ubiquiti Logo" className="Nav__logo" />
        <h1 className="Nav__h1">Devices</h1>
        <h2 className="Nav__h2">Author/Developer Name</h2>
      </section>
    );
  };