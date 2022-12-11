import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home.tsx';
import { ProductPage } from './pages/ProductPage.tsx';
import {useState, useEffect} from 'react';
import axios from 'axios';


export const App: React.FC = () => {
  const [devices, setDevices ] = useState<string[]>([]);
  let linesSet: Set<string>  = new Set<string>();
  devices.map( dev => linesSet.add(dev.line.name));
  const lines: Array<string> = Array.from(linesSet);

  const getDevices: Never = () => {
      axios.get('https://static.ui.com/fingerprint/ui/public.json')
          .then(res => {
              setDevices(res.data.devices)
              console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
  }

  useEffect(() => {
      getDevices();
    }, []);
  return (
    <Routes>
            <Route path='/' element={<Home devices={devices} setDevices={setDevices} lines={lines}/>} />
            <Route path='/device/:deviceId' element={<ProductPage getDevices={getDevices} devices={devices} />} />
     </Routes>
  );
};
