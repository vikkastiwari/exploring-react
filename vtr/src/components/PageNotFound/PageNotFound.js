import './PageNotFound.css';
import pnf_img from '../../assets/img/error/404.png';

const PageNotFound = () => {
    return (
        <div className="vtr_page_not_found">
            <img src={pnf_img} alt="comming soon"></img>
        </div>
    );
}

export default PageNotFound;