const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = recipients => {
  const invalidEmails = recipients
    .split(',')
    .map(email => email.trim())
    .filter(email => !regex.test(email));

  if (invalidEmails.length) return `Invalid Emails: ${invalidEmails}`;
  return;
};

export default validateEmail;
