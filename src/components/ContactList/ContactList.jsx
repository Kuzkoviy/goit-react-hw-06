import Contact from '../Contact/Contact'
import { useSelector } from "react-redux";


export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = () => {
    if (!selectNameFilter) {
      return selectContacts;
    }

    const normalizedFilter = selectNameFilter.toLowerCase();
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {visibleContacts().map((phone) => (
        <li key={phone.id}>
          <Contact phone={phone} />
        </li>
      ))}
    </ul>
  );
};