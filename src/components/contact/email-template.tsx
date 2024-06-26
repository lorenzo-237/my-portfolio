import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email, message }) => (
  <div>
    <ul>
      <li>{email}</li>
    </ul>
    <p>{message}</p>
  </div>
);
