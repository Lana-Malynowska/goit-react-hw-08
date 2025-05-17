import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return (
      <p>
        <strong>Looks like your contact list is feeling a bit lonely...</strong>
      </p>
    );
  }

  return (
    <ul className={s.contacts}>
      {contacts.map((contact) => (
        <li className={s.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
