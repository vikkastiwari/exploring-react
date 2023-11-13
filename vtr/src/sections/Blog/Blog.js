import './Blog.css';
import JsonData from '../../assets/data/content.json';
import Section from "../../components/Section/Section";
import thumb_42x29 from '../../assets/img/thumb/42-29.jpg';

const Blog = () => {
  const blogData = JsonData.blog;

  return (
    <Section id="blog">
      <div className="vtr_tm_blogs vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{blogData.title}</span>
            <h3>{blogData.heading}</h3>
            <p>{blogData.desc}</p>
          </div>
          <div className="news_list vtr_slider">
            <ul className='hr_scroll'>
              {blogData.lists.map((item,index)=>(
                <li
                  key={index}
                  className="fadeInUp"
                  style={{visibility: "visible", animationDuration: '1s'}}
                >
                  <div className="list_inner">
                    <div className="image">
                      <a href={item.url}  target="_blank" rel="noopener noreferrer">
                        <img src={thumb_42x29} alt="thumb" />
                        <div
                          className="main"
                          data-img-url="img/blogs/1.jpg"
                          style={{backgroundImage:`url(${require(`../../assets/img/blog/${item.imgSrc}`)})`}}
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
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <h3 className="title">
                            {item.title}
                        </h3>
                        <p>{item.desc}</p>
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
