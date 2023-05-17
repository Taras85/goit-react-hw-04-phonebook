import PropTypes from 'prop-types';
import s from './ContactList.module.css'





export function ContactList({ contacts, onDeleteContact}) {

  return (
    <ul className={s.contactList}>
      {contacts.map(({id, name, number})=>(
          <li key={id} className={s.contactItem}>
            <span className={s.contactName} >{name}:</span>
            <span >{number}</span>
            <button className={s.contactButton}
              type="button"
              id={id}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
      }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};