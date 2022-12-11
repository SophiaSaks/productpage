import './SearchBar.css';

export interface Props {
  setQuery: string;
}

export const SearchBar: React.FC<Props> = ({ setQuery}) => {

  const clearField = () => {
    document.getElementById('searchInput').value = '';
  }

    return (
      <div className='SearchBar' data-testid='search-1'>
        <form className="SearchBar__form">
          <input type="text" placeholder="Search" className="SearchBar__input" id='searchInput' onChange={(e) => setQuery(e.target.value)} />
          <button className='SearchBar_btn' onClick={clearField}></button>
        </form>
      </div>
    );
  }
  