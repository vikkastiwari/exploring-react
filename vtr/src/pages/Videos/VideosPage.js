import "./VideosPage.css";
import cs_img from '../../assets/img/misc/comming_soon.png';

const VideosPage = () => {
  return (
    <div className="vtr_videos">
      <div className="vtr_tm_main_title" data-text-align="center">
        <img src={cs_img} alt="comming soon"></img>
        <p>
          For now visit:{" "}
          <a href="https://www.youtube.com/@programmersmode" target="_blank" rel="noreferrer">
            @programmersmode
          </a>
        </p>
      </div>
    </div>
  );
};

export default VideosPage;
