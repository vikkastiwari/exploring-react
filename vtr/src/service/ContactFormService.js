import { ApiPath } from '../environment/ApiPath';

export const SubmitForm = async ({fullName, emailId, phone, subject, message}) => {
    return await fetch(
      process.env.REACT_APP_DB_BASE_URL+ApiPath.USER_CONTACT_DATA,
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({fullName, emailId, phone, subject, message})
      }
    );
};

export const SubscribeNewsletter = async ({ email }) => {
  return await fetch(
    process.env.REACT_APP_DB_BASE_URL+ApiPath.USER_SUBSCRIBE_DATA,
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({ email })
    }
  );
};