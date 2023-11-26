import './ProjectCard.css';
import thumb_1x1 from '../../../assets/img/thumb/1-1.jpg';

const ProjectCard = (props) => {
    
    return (
        <div className="vtr_project_card_wrapper">
            <div className="image">
            <img src={thumb_1x1} alt={props.item.alt} />
            <div
                className="main"
                data-img-url="img/portfolio/1.jpg"
                style={{backgroundImage:`url(${require(`../../../assets/img/work/${props.item.src}`)})`}}
            ></div>
            </div>
            <div className="details vtr_whitespace_normal">
                <span className="category">{props.item.title}</span>
                <p className="title">{props.item.category}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
