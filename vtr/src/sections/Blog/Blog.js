import { Link } from 'react-router-dom';

import './Blog.css';
import JsonData from '../../assets/data/home-content.json';
import BlogJsonData from '../../assets/data/blog-content.json';
import Section from "../../components/Section/Section";
import BlogCard from '../../components/Cards/BlogCard/BlogCard';

const Blog = () => {
  const blogSectionData = JsonData.blog;
  const blogsData = BlogJsonData;
  const commonData = JsonData.common;

  return (
    <Section id="blog">
      <div className="vtr_tm_blogs vtr_section_padding">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>{blogSectionData.title}</span>
            <h3>{blogSectionData.heading}</h3>
            <p>{blogSectionData.desc}</p>
          </div>
          <div className="blogs_list vtr_slider">
            <ul className='hr_scroll'>
              {blogsData.blogPageData.map((item,index)=>(
                index < 6 ?
                <li
                  key={index}
                  className="fadeInUp"
                  style={{visibility: "visible", animationDuration: '1s'}}
                >
                  <div className='blog_card_wrp'>
                    <BlogCard item={item} />
                  </div>
                </li> : ''
              ))}
            </ul>
          </div>
          <div className="vtr_tm_button vtr_align_center">
              <Link to="/blogs" className="anchor">
                {commonData.viewMoreBtnText}
              </Link>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
