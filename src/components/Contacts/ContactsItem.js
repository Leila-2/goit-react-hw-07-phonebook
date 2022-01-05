import React from "react";
import { useDeleteContactMutation } from "../../redux/slice";
import PropTypes from "prop-types";

function ContactsItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li key={id} id={id}>
      <p>
        {name}:{number}
      </p>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
}
ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export { ContactsItem };
