import './Blog.css';
import JsonData from '../../assets/data/content.json';
import Section from "../../components/Section/Section";
import thumb_42x29 from '../../assets/img/thumb/42-29.jpg';
import blog_1 from '../../assets/img/blog/1.jpg';
import blog_2 from '../../assets/img/blog/2.jpg';
import blog_3 from '../../assets/img/blog/3.jpg';

const Blog = () => {
  const blogData = JsonData.blog;

  return (
    <Section id="blog">
      <div className="vtr_tm_news vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{blogData.title}</span>
            <h3>{blogData.heading}</h3>
            <p>{blogData.desc}</p>
          </div>
          <div className="news_list vtr_slider">
            <ul>
              {blogData.lists.map((item,index)=>(
                <li
                  key={index}
                  className="fadeInUp"
                  style={{visibility: "visible", animationDuration: '1s'}}
                >
                  <div className="list_inner">
                    <div className="image">
                      <a href={item.url}  target="_blank" rel="noreferrer">
                        <img src={thumb_42x29} alt="thumb" />
                        <div
                          className="main"
                          data-img-url="img/news/1.jpg"
                          style={{backgroundImage: `url(${blog_1})`}}
                        ></div>
                        <div className="date">
                          <h3>&#35;{item.rank}</h3>
                        </div>
                      </a>
                    </div>
                    <div className="details vtr_whitespace_normal">
                      {item.tags.map((tag,index)=>(
                        <span key={index} className="category">
                          <>&#35;{tag}&nbsp;</>
                        </span>
                      ))}   
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <h3 className="title">
                            {item.title}
                        </h3>
                        <p>Kubernetes has now become the de facto standard for deploying containerized applications at scale in private, public, and hybrid cloud environments. </p>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
