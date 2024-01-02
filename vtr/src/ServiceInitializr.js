import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import ReactGA from 'react-ga';

/**
 * @description service init handler
 * @author Vikas Tiwari
 */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
const TrackingId = process.env.REACT_APP_TRACKING_ID;

/**
 * @description analytics & app init
 */
ReactGA.initialize(TrackingId);
const app = initializeApp(firebaseConfig);

/**
 * @description enable debug mode - appCheck token
 */ 
console.log("Environment:",process.env.REACT_APP_ENV);
if (process.env.REACT_APP_ENV === "local") {
  window.FIREBASE_APPCHECK_DEBUG_TOKEN=true
  console.log('FIREBASE_APPCHECK_DEBUG_MODE:','enabled');
}

/**
 * @description utility function to initialize appCheck
 */ 
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_SITE_KEY),
  isTokenAutoRefreshEnabled: true
}); 
