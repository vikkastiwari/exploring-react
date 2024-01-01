import { useEffect } from 'react';

import './ContactPage.css';
import Contact from '../../sections/Contact/Contact';

const ContactPage = () => {

  useEffect(() => {
    document.title = 'Let’s Build Something Amazing: Contact Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);

  return (
    <Contact></Contact>
  );
}

export default ContactPage;
