import './BlogsPage.css';
import BlogJsonData from '../../assets/data/blog-content.json';
import BlogCard from '../../components/Cards/BlogCard/BlogCard';

const BlogsPage = () => {
  const blogData = BlogJsonData;

  return (
    <div className='vtr_all_blogs'>
      <div className="blogs_list container">
        <div className="vtr_tm_main_title" data-text-align="center">
          <h2>{blogData.heading}</h2>
          <p>{blogData.desc}</p>
        </div>
        <ul>
          {blogData.blogPageData.map((item,index)=>(
            <li
              key={index}
              className="fadeInUp"
              style={{visibility: "visible", animationDuration: '1s'}}
            >
              <div className='blog_card_wrp'>
                <BlogCard item={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogsPage;
