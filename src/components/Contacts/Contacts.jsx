import PropTypes from 'prop-types';
import style from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const handleDeleteContact = e => {
    dispatch(deleteContact(e.target.value));
  };
  return (
    <ul className={style.contacts_list}>
      {contacts
        .filter(i => i.name.includes(filterTerm))
        .map(item => {
          const { name, id, number } = item;
          return (
            <li key={id} className={style.contacts_item}>
              <p className={style.contacts_info}>
                {name} : {number}
              </p>
              <button
                className={style.contacts_btn}
                type="button"
                onClick={handleDeleteContact}
                value={id}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filterTerm: PropTypes.string,
  onClick: PropTypes.func,
};
