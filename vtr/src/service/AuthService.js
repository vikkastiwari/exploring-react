import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth();
if (process.env.REACT_APP_ENV !== "local") {
  signInAnonymously(auth)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    }
  );
}