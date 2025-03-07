import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../redux/contactsSlice";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Number:
        <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
