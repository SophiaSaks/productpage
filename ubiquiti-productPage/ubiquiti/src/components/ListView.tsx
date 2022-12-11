import './ListView.css';
import { Link } from 'react-router-dom';

interface Props {
  device: string;
  higherResThumbURL: string;
}

export const ListView: React.FC<Props> = ({ device, higherResThumbURL}) => {
    return (
      <div className="ListView">
         <Link to={`/device/${device.product.name}`} state={{thumbnail: higherResThumbURL, model: device.line.name, name: device.product.name, id: device.line.id, shortName: device.shortnames[0] }}>
              <div key={device.product.name} className='ListView__deviceList'>
                <img className='ListView__device_thumbnail' src={higherResThumbURL}/>
                <li>
                <h4>Name: </h4>
                {device.product.name}
                </li>

                <li>
                <h4>Product Line: </h4>
                {device.line.name}
                </li>
                </div>
                </Link>
      </div>
    );
  };