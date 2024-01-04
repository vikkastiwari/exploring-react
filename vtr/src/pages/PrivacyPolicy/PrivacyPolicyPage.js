import { useEffect } from 'react';

import "./PrivacyPolicyPage.css";
import PrivacyPolicyJsonData from '../../assets/data/policy-content.json';

const PrivacyPolicyPage = () => {
  const privacyPolicyJsonData = PrivacyPolicyJsonData;
  useEffect(() => {
    document.title = 'Privacy policy - Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);

  return (
    <>
      <div className="vtr_all_privacy container">
        <h2>{privacyPolicyJsonData?.heading}</h2>
        <p>{privacyPolicyJsonData?.desc}</p>
        
        {privacyPolicyJsonData?.policy?.map((item, index) => (
          <div key={index}>
            <h4>{item?.title}</h4>
            <p>{item?.desc}</p>
          </div>
        ))}

        <h4>{privacyPolicyJsonData?.information?.heading}</h4>

        <p>
          {privacyPolicyJsonData?.information?.desc}&nbsp;
          <br />
          {privacyPolicyJsonData?.information?.emailText}&nbsp;
          <br />
          {privacyPolicyJsonData?.information?.post}
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
