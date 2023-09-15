import './Blog.css';
import Section from "../../components/Section/Section";
import thumb_42x29 from '../../assets/img/thumb/42-29.jpg';
import blog_1 from '../../assets/img/blog/1.jpg';
import blog_2 from '../../assets/img/blog/2.jpg';
import blog_3 from '../../assets/img/blog/3.jpg';

const Blog = () => {
  return (
    <Section>
      <div className="vtr_tm_news">
        <div className="container">
          <div className="vtr_tm_main_title" data-text-align="center">
            <span>From My Blog</span>
            <h3>Recent Blogs, Updates &amp; More</h3>
            <p>Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate</p>
          </div>
          <div className="news_list">
            <ul>
              <li
                className="wow fadeInUp"
                data-wow-duration="1s"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_42x29} alt="thumb" />
                    <div
                      className="main"
                      data-img-url="img/news/1.jpg"
                      style={{backgroundImage: `url(${blog_1})`}}
                    ></div>
                    <div className="date">
                      <h3>23</h3>
                      <span>Dec</span>
                    </div>
                    <a className="vtr_tm_full_link" href="/">{}</a>
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="/">Web Development</a>
                    </span>
                    <h3 className="title">
                      <a href="/">
                        Jim Morisson Says when the musics over turn off the
                        light
                      </a>
                    </h3>
                  </div>
                  <div className="news_hidden_details">
                    <div className="news_popup_informations">
                      <div className="text">
                        <p>
                          vtr is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.
                        </p>
                        <p>
                          That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration="1s"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_42x29} alt="thumb" />
                    <div
                      className="main"
                      data-img-url="img/news/2.jpg"
                      style={{backgroundImage: `url(${blog_2})`}}
                    ></div>
                    <div className="date">
                      <h3>23</h3>
                      <span>Dec</span>
                    </div>
                    <a className="vtr_tm_full_link" href="/">{}</a>
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="/">Branding</a>
                    </span>
                    <h3 className="title">
                      <a href="/">
                        How to be appreciated for your hard work as a developer
                      </a>
                    </h3>
                  </div>
                  <div className="news_hidden_details">
                    <div className="news_popup_informations">
                      <div className="text">
                        <p>
                          vtr is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.
                        </p>
                        <p>
                          That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration="1s"
                style={{visibility: "visible", animationDuration: '1s'}}
              >
                <div className="list_inner">
                  <div className="image">
                    <img src={thumb_42x29} alt="thumb" />
                    <div
                      className="main"
                      data-img-url="img/news/3.jpg"
                      style={{backgroundImage: `url(${blog_3})`}}
                    ></div>
                    <div className="date">
                      <h3>23</h3>
                      <span>Dec</span>
                    </div>
                    <a className="vtr_tm_full_link" href="/">{}</a>
                  </div>
                  <div className="details">
                    <span className="category">
                      <a href="/">Social Media</a>
                    </span>
                    <h3 className="title">
                      <a href="/">
                        How designers and developers can collaborate better
                      </a>
                    </h3>
                  </div>
                  <div className="news_hidden_details">
                    <div className="news_popup_informations">
                      <div className="text">
                        <p>
                          vtr is a leading web design agency with an
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p>
                          In today’s digital world, your website is the first
                          interaction consumers have with your business. That's
                          why almost 95 percent of a user’s first impression
                          relates to web design. It’s also why web design
                          services can have an immense impact on your company’s
                          bottom line.
                        </p>
                        <p>
                          That’s why more companies are not only reevaluating
                          their website’s design but also partnering with Kura,
                          the web design agency that’s driven more than $2.4
                          billion in revenue for its clients. With over 50 web
                          design awards under our belt, we're confident we can
                          design a custom website that drives sales for your
                          unique business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div
          className="brush_1 wow zoomIn"
          data-wow-duration="1s"
        //   style="visibility: visible; animation-duration: 1s;"
        >
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div
          className="brush_2 wow zoomIn"
          data-wow-duration="1s"
        //   style="visibility: visible; animation-duration: 1s;"
        >
          <img src="img/brushes/news/2.png" alt="image" />
        </div> */}
      </div>
    </Section>
  );
};

export default Blog;
