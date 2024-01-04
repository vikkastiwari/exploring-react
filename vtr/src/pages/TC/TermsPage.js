import { useEffect } from 'react';

import "./TermsPage.css";
import TermsJsonData from '../../assets/data/tnc-content.json';

const TermsPage = () => {
  const termsJsonData = TermsJsonData;
  useEffect(() => {
    document.title = 'Terms of services - Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);

  return (
    <div className="vtr_all_terms container">
      <h2>{termsJsonData?.heading}</h2>
      <p>{termsJsonData?.desc}</p>
      
      <h4>{termsJsonData?.overview?.heading}</h4>
      {termsJsonData?.overview?.desc?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {termsJsonData?.terms?.map((item, index) => (
        <div key={index}>
          <h4>{item?.title}</h4>
          <p>{item?.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsPage;
