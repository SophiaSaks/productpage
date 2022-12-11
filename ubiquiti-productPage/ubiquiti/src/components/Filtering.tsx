import './Filtering.css';
import { Link } from 'react-router-dom';


export const Filtering: React.FC = () => {
    return (
    <div className='Filtering'>
        <h2>Filter</h2>
        <Link className="userProfile__listLink" to='/'>
        <span className="material-symbols-outlined back-icon">arrow_back_ios_new</span>
        </Link>
    </div>
    );
  };