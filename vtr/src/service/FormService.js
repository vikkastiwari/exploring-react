import { ref, set } from 'firebase/database';

import { ApiPath } from '../environment/ApiPath';
import { databaseInstance } from './FirebaseService';

const db = databaseInstance;

export const SubscribeNewsletter = (data) => {
  const userName = data?.email?.split('@')[0];
  const reference = ref(db,ApiPath.USER_SUBSCRIBE_DATA+userName);
  return set(reference, data);
}

export const SubmitForm = (data) => {
  const reference = ref(db,ApiPath.USER_CONTACT_DATA+data?.fullName);
  return set(reference, data);
}