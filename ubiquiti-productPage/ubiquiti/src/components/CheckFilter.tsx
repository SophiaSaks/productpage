import React from 'react';
import './CheckFilter.css';

interface Props {
  line: string;
  handleOnChange: (event: React.FormEvent) => void;
}

export const CheckFilter: React.FC<Props> = ({lines, handleOnChange}) => {

    return (
        <div className='CheckFilter'>
          <h4 className='CheckFilter__title'>Product Lines</h4>
          {
            lines.map(function (line) {
              return (
              <form key={line}>
                <input onChange={handleOnChange} className='CheckFilter__checkboxInput' id="CheckFilter__inputName" type="checkbox" value={line} name="CheckFilter__inputName"/>
                <label htmlFor="CheckFilter__inputName">{line}</label>
              </form>
              )
            })
          }
      </div>
    );
  }