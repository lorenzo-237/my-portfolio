import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <div>
    <p>Prénom : {name}</p>
    <p>From : {email}</p>
    <p>{message}</p>
  </div>
);
