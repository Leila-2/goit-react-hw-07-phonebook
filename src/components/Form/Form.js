import PropTypes from "prop-types";
import { Section } from "../Section/Section";
import s from "../Form/Form.module.css";

import { useCreateContactMutation } from "../../redux/slice";

function Form() {
  const [createContact, { isLoading }] = useCreateContactMutation();
  //const { data } = useFetchContactsQuery()

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact({
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    });
    e.currentTarget.reset();
  };

  return (
    <Section title="Phonebook">
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="input-name">Name</label>
        <input
          type="text"
          name="name"
          id="input-name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="input-number">Number</label>
        <input
          type="tel"
          name="number"
          id="input-number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">
          {isLoading ? "Loading..." : "Add contact"}
        </button>
      </form>
    </Section>
  );
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
