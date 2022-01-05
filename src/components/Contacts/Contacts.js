import React from "react";
import { Section } from "../Section/Section";
import { ContactsItem } from "./ContactsItem";
import s from "./Contacts.module.css";

import PropTypes from "prop-types";
const Contacts = ({ data }) => (
  <Section title="Contacts">
    <ul className={s.list}>
      {data.length === 0 ? (
        <h3>Please add contact</h3>
      ) : (
        data.map(({ name, id, number }) => (
          <ContactsItem id={id} name={name} key={id} number={number} />
        ))
      )}
    </ul>
  </Section>
);
Contacts.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default Contacts;
