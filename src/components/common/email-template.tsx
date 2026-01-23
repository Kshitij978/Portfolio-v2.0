import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Message from {firstName}</h1>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
