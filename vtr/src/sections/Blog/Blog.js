import { Link } from 'react-router-dom';

import './Blog.css';
import JsonData from '../../assets/data/content.json';
import Section from "../../components/Section/Section";
import BlogCard from '../../components/Cards/BlogCard/BlogCard';

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
          <div className="blogs_list vtr_slider">
            <ul className='hr_scroll'>
              {blogData.lists.map((item,index)=>(
                <li
                  key={index}
                  className="fadeInUp"
                  style={{visibility: "visible", animationDuration: '1s'}}
                >
                  <BlogCard item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="vtr_tm_button vtr_align_center">
              <Link to="/blogs" className="anchor">
                View More
              </Link>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
