import './GridView.css';
import { Link } from 'react-router-dom';

interface Props {
  device: string;
  higherResThumbURL: string;
}

export const GridView: React.FC<Props> = ({device, higherResThumbURL}) => {
    return (
        <div className="GridView">
          <Link to={`/device/${device.product.name}`} state={{thumbnail: higherResThumbURL, model: device.line.name, name: device.product.name, id: device.line.id, shortName: device.shortnames[0]}} className="GridView__link">
              <div key={device.model_id} className='GridView__deviceCard'>
          
                <img className='GridView__device_thumbnail' src={higherResThumbURL}/>
  
                <ul key={device.line.name} className='GridView__list'>
                <li className='GridView__productLineName'>
                {device.product.name}
                </li>
                <li className='GridView__deviceName'>
                {device.line.name}
                </li>
                </ul>
                </div>
            </Link>
        </div>
    );
  };