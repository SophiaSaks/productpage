import './ProductPage.css';
import {Nav} from '../components/Nav.tsx'
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export const ProductPage: React.FC = () => {
  const {deviceId} = useParams();
  const location = useLocation();
  const device = location.state;

    return (
       <div className='ProductPage'>
         <Nav />
         <div className='ProductPage__topBar'>
          <Link className='ProductPage__backLink' to='/' />
          <h1 className='ProductPage__sideTitle'>{deviceId}</h1>
          <hr /> 
        </div>

        <div className='ProductPage__card'>
         <img className='ProductPage__device_thumbnail' src={device.thumbnail}/>
         <ul className='ProductPage__list_titles'>
            <li>
            <p>Product line</p>
            <p>{device.model}</p>
            </li>

            <li>
            <p>Id</p>
            <p>{device.id}</p>
            </li>

            <li>
            <p>Short name</p>
            <p>{device.name}</p>
            </li>

            <li>
            <p>Name</p>
            <p>{device.shortName}</p>
            </li>

         </ul>
        </div>
       </div>
    );
  };