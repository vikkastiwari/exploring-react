import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log("validationSuccess");
  })
  .catch((error) => {
    console.error(error);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User Validity: ", user?.isAnonymous);
  }
});
