import React from 'react';

import classes from '../../profile-info.module.scss';

const ContactItem: React.FC<{ contactTitle: string; contactValue: string }> = ({ contactTitle, contactValue }) => (
  <div className={classes.contact}>
    <b>{contactTitle}</b>: {contactValue}
  </div>
);

export default ContactItem;
