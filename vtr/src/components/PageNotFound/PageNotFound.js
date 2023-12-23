import { Link } from 'react-router-dom';

import './PageNotFound.css';
import pnf_img from '../../assets/img/error/404.png';
import JsonData from '../../assets/data/home-content.json';

const PageNotFound = () => {
    const commonData = JsonData.common;

    return (
        <div className="vtr_page_not_found">
            <img src={pnf_img} alt="comming soon"></img>
            <div className="vtr_tm_button vtr_align_center">
                <Link to="/" className="anchor">
                    {commonData?.backToHomeText}
                </Link>
            </div>
        </div>
    );
}

export default PageNotFound;