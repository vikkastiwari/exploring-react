import ReactGA from 'react-ga4';

import './BlogCard.css';
import thumb_42x29 from '../../../assets/img/thumb/42-29.jpg';

const BlogCard = (props) => {

    const blogClickHandler = () => {
        ReactGA.event({
            category:"Blogs",
            action:"blog_clicked",
            label:props.item.title,
            value:+props.item.rank
        })
    };

    return (
        <div className="vtr_blog_card_wrapper" onClick={blogClickHandler}>
            <div className="image">
                <a href={props.item.url}  target="_blank" rel="noopener noreferrer">
                <img src={thumb_42x29} alt="thumb" />
                <div
                    className="main"
                    style={{backgroundImage:`url(${require(`../../../assets/img/blog/${props.item.imgSrc}`)})`}}
                ></div>
                <div className="date">
                    <h3>&#35;{props.item.rank}</h3>
                </div>
                </a>
            </div>
            <div className="details vtr_whitespace_normal">
                {props.item.tags.map((tag,index)=>(
                    <span key={index} className="category">
                        <>&#35;{tag}&nbsp;</>
                    </span>
                ))}   
                <a href={props.item.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="title">
                        {props.item.title}
                    </h3>
                    <p>{props.item.desc}</p>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
