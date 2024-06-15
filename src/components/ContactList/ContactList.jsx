import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';
import {
	selectError,
	selectFilteredContacts,
	selectLoading,
} from '../../redux/contactsSlice';

import Loader from '../Loader/Loader';
// import { selectNameFilter } from '../../redux/filtersSlice';

// const getFilteredContacts = (contacts, valueOfFilter) =>
// 	contacts.filter((contact) =>
// 		contact.name.toLowerCase().includes(valueOfFilter)
// 	);

const ContactList = () => {
	const loading = useSelector(selectLoading);
	console.log('loading1: ', loading);
	const error = useSelector(selectError);
	const contacts = useSelector(selectFilteredContacts);
	// console.log('contacts: ', contacts);
	// console.log('contacts: ', contacts);
	// const valueOfFilter = useSelector(selectNameFilter);
	// const filteredContacts = getFilteredContacts(contacts, valueOfFilter);

	return (
		<ul className={styles.contactList}>
			{loading && <Loader />}
			{!loading &&
				contacts &&
				!error &&
				contacts.map(({ id, number, name }) => (
					<Contact key={id} id={id} number={number} name={name} />
				))}
		</ul>
	);
};

export default ContactList;
