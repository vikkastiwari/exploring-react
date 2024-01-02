import { useEffect } from 'react';

const BannerAdUnit = () => {

    useEffect(() => {
        /**
         * @description load Ads only if no Ads are loaded
         */ 
        const adsbygoogleElements = document.querySelectorAll('.adsbygoogle');
        const adsLoaded = Array?.from(adsbygoogleElements)?.some((element) => {
            return element.hasChildNodes();
        });

        if (!adsLoaded) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, []);

    return (
        <div>
            <ins className="adsbygoogle"
                style={{display:"block"}}
                data-ad-client="ca-pub-4200323012008566"
                data-ad-slot="2580211089"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default BannerAdUnit;
