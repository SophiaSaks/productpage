import {Nav} from '../components/Nav.tsx';
import './Home.css';
import {SearchBar} from '../components/SearchBar.tsx'
import {ListView} from '../components/ListView.tsx';
import {GridView} from '../components/GridView.tsx';
import {CheckFilter} from '../components/CheckFilter.tsx';
import {useState} from 'react';


export const Home: React.FC = ({devices, setDevices, lines}) => {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [checked, setChecked] = useState<CheckFilter[]>([]);
  const [query, setQuery] = useState<string>('');

  let devsMatched: Array<string> = devices.filter(device => device.product.name.toLowerCase().includes(query) || device.line.name.toLowerCase().includes(query))

  let devsToDisplay: Array<string> = devsMatched

  const filterByLineName: Array<string> = (filterLines) => {
    let filteredDevs = []
    if (filterLines.length == 0)
      filteredDevs = devsToDisplay
    else
    {
    filterLines.map((filterLine) => {
      filteredDevs = filteredDevs.concat(devsMatched.filter(d => d.line.name.toLowerCase().includes(filterLine.toLowerCase())))
    })
    }
    return filteredDevs
  }

  devsToDisplay = filterByLineName(checked)

  const handleOnChange: never = (event: React.FormEvent) => {
    var updatedList: Array<string> = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  return (
    <div className="Home">
        <Nav />
        <div className='SearchAndFilter'>
          <SearchBar query={query} setQuery={setQuery}/>
          
          {
            toggleSwitch === true ? 
            <>
            <button onClick={() => setToggleSwitch(false)} className='gridBtn'></button>
            </> : 
            <>
            <button onClick={() => setToggleSwitch(true)} className='listBtn'></button>
            </>
          }
          <div className='Collapsible__card'>
            <input id='Collapsible' className='Collapsible__toggle' type='checkbox'></input>
            <label htmlFor='Collapsible' className='Collapsible__label'>Filter</label>
            <div className='Collapsible__content'>
              <div className='Collapsible__content-inner'>
               <CheckFilter lines={lines} checkedState={checked} handleOnChange={handleOnChange}/>
              </div>
            </div>
          </div>

          </div>
        
        
          <hr />
          <p>{devices.length} devices</p>        

        {
          toggleSwitch === true ? 
          <div>
            {devsToDisplay.map((device) =>  {
              const thumbURL = 'https://static.ui.com/fingerprint/ui/icons/'+device.icon.id+'_'+device.icon.resolutions[1][0]+'x'+device.icon.resolutions[1][1]+'.png';
              const higherResThumbURL = 'https://static.ui.com/fingerprint/ui/icons/'+device.icon.id+'_'+device.icon.resolutions[2][0]+'x'+device.icon.resolutions[2][1]+'.png';
              return (
              <ListView query={query} key={device.name} devices={devices} setDevices={setDevices} device={device} thumbURL={thumbURL} higherResThumbURL={higherResThumbURL}/>)
        })
        }
          </div> : 
          <div>
          {devsToDisplay.map((device) =>  {
          const thumbURL = 'https://static.ui.com/fingerprint/ui/icons/'+device.icon.id+'_'+device.icon.resolutions[1][0]+'x'+device.icon.resolutions[1][1]+'.png';
          const higherResThumbURL = 'https://static.ui.com/fingerprint/ui/icons/'+device.icon.id+'_'+device.icon.resolutions[2][0]+'x'+device.icon.resolutions[2][1]+'.png';
          return (
          <GridView handleOnChange={handleOnChange} query={query} setQuery={setQuery} devices={devices} setDevices={setDevices} device={device} thumbURL={thumbURL} higherResThumbURL={higherResThumbURL}/>)
          })
          }
          </div>
        }
    </div>
  );
};