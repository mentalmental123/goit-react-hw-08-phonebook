import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { setFilterValue } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <section className={style.filter_section}>
      <h2>Find contact by name</h2>
      <input
        className={style.filter_input}
        type="text"
        name="filter"
        onChange={filterValue}
        placeholder="Enter name"
      />
    </section>
  );
};
