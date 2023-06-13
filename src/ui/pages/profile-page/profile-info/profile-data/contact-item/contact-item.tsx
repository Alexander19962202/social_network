import React from "react";
import classes from "../../profile-info.module.css";

const ContactItem: React.FC<{ contactTitle: string, contactValue: string }> = ({contactTitle, contactValue}) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ContactItem;
