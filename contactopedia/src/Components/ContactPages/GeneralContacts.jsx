import React from "react";
import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} />
      ))}
    </div>
  );
};

export default GeneralContacts
