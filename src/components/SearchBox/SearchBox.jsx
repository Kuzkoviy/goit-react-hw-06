import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch()
  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
};