import { useEffect } from 'react';

import './ServicesPage.css';
import Services from '../../sections/Services/Services';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Elevate Your Online Presence: Comprehensive Web Services - Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);

  return (
    <div className='vtr_all_services'>
      <Services></Services>
    </div>
  );
}

export default ServicesPage;
