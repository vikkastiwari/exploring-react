import React, { useEffect } from 'react';

import './BlogsPage.css';
import BlogJsonData from '../../assets/data/blog-content.json';
import BlogCard from '../../components/Cards/BlogCard/BlogCard';
import Subscribe from '../../sections/Subscribe/Subscribe';
import { useMobileDetect, useTabletDetect } from '../../service/ScreenSizeService';

const BlogsPage = () => {
  const blogData = BlogJsonData;
  const isMobile = useMobileDetect();
  const isTablet = useTabletDetect();

  useEffect(() => {
    document.title = 'Innovation Junction: A Deep Dive into Web Tech - Vikas Tiwari - Learn | Apply | Evolve';
    return () => {
      document.title = 'Vikas Tiwari - Learn | Apply | Evolve';
    };
  }, []);

  return (
    <div className='vtr_all_blogs'>
      <div className="blogs_list container">
        <div className="vtr_tm_main_title" data-text-align="center">
          <span>{blogData.title}</span>
          <h2>{blogData.heading}</h2>
          <p>{blogData.desc}</p>
        </div>
        <ul>
          {blogData.blogPageData.map((item,index)=>(
            <React.Fragment key={index}>
              <li
                className="fadeInUp"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className='blog_card_wrp'>
                  <BlogCard item={item} />
                </div>
              </li>
              {(isMobile ? index === 1 : isTablet ? index === 2 : index === 3) ? <Subscribe /> : ''}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogsPage;
