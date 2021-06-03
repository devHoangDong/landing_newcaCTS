import React from 'react';
import {
  BrowserRouter as Router,
  Link, useHistory
} from 'react-router-dom';


export default function Index() {

  let history = useHistory();
  function handleClick() { history.push('/register') }

    return (
      <Router>
          <div id="menu-0" custom-code="true"><section>
    <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
      <div className="container">
        <div className="mbr-table">
          <div className="mbr-table-cell">
            <a className="navbar-caption" target="_blank" rel="noreferrer" href="https://newca.vn/index.html">NEWCA</a>
          </div>
          <div className="mbr-table-cell">
            <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
              <div className="hamburger-icon" />
            </button>
            <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar"><li className="nav-item"><a className="nav-link link mbr-editable-menu-item" href="./">TRANG CHỦ</a></li><li className="nav-item"><a className="nav-link link mbr-editable-menu-item" href="index.html#pricing-table2-f">BẢNG GIÁ</a></li>
              <li className="nav-item nav-btn"><a className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" href="/#" onClick={(e) => e.preventDefault()}><i className="fal fa-comments" />&nbsp;TƯ VẤN TRỰC TUYẾN</a></li><li className="nav-item nav-btn"><a className="nav-link btn btn-white btn-white-outline mbr-editable-menu-item" href="/#" onClick={(e) => e.preventDefault()}><i className="fal fa-phone" />&nbsp;1900 2066</a></li>
            </ul>
            <button className="navbar-toggler navbar-close" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" hidden>
              <div className="close-icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <section className="mbr-section mbr-section-hero mbr-section-full header2 mbr-parallax-background mbr-after-navbar" id="header2-1" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://wallpaper.dog/large/5554822.jpg)'}}>
    <div className="mbr-overlay" style={{opacity: '0.3', backgroundColor: 'rgb(71, 85, 119)'}}>
    </div>
    <div className="mbr-table mbr-table-full">
      <div className="mbr-table-cell">
        <div className="container">
          <div className="mbr-section row">
            <div className="mbr-table-md-up">
              <div className="mbr-table-cell col-md-5 content-size text-xs-center text-md-right">
                <h3 className="mbr-section-title display-2">TRUNG TÂM CHỨNG THƯ SỐ NEWCA</h3>
                <div className="mbr-section-text">
                  <p>Uy tín - Chuyên nghiệp - Tận tâm&nbsp;</p>
                </div>
                <div className="mbr-section-btn"><a className="btn btn-black" href="./">TÌM HIỂU THÊM</a><button className="btn btn-black" onClick={handleClick}>ĐĂNG KÍ NGAY</button></div>
              </div>
              <div className="mbr-table-cell mbr-valign-top mbr-left-padding-md-up col-md-7 image-size" style={{width: '50%'}}>
                <div className="mbr-figure"><img src="./assets/images/chu-ky-so-newca-co-tot-khong.png" alt="newca" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mbr-arrow mbr-arrow-floating hidden-sm-down" aria-hidden="true"><a href="#header3-k"><i className="mbr-arrow-icon" /></a></div>
  </section>
  <section className="mbr-section mbr-section__container article" id="header3-k" style={{backgroundColor: 'rgb(244, 244, 244)', paddingTop: '60px', paddingBottom: '0px'}}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h3 className="mbr-section-title display-2">CHỮ KÝ SỐ CHO CÁ NHÂN ĐỘC LẬP</h3>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-section article mbr-section__container" id="content1-j" style={{backgroundColor: 'rgb(244, 244, 244)', paddingTop: '20px', paddingBottom: '20px'}}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 lead">Chữ ký số cho cá nhân độc lập&nbsp;</div>
      </div>
    </div>
  </section>
  <section className="mbr-cards mbr-section mbr-section-nopadding" id="features1-e" style={{backgroundColor: 'rgb(244, 244, 244)'}}>
    <div className="mbr-cards-row row striped">
      <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img"><img src="assets/images/chung-thu-so-la-gi.jpg" className="card-img-top" alt="cts" /></div>
            <div className="card-block">
              <h4 className="card-title">Chữ ký số cho cá nhân độc lập</h4>
              {/* <h5 class="card-subtitle">Boostrap</h5> */}
              <p className="card-text">Chứng thư số dành cho Cá nhân là loại chứng thư số được cấp cho những người dùng cá nhân độc lập, không thuộc Tổ chức, doanh nghiệp. Khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương với chữ ký tay của người đó.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img"><img src="assets/images/chung-thu-so-la-gi.jpg" className="card-img-top" alt="cts" /></div>
            <div className="card-block">
              <h4 className="card-title">Chữ ký số cho cá nhân độc lập</h4>
              {/* <h5 class="card-subtitle">Boostrap</h5> */}
              <p className="card-text">Chứng thư số dành cho Cá nhân là loại chứng thư số được cấp cho những người dùng cá nhân độc lập, không thuộc Tổ chức, doanh nghiệp. Khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương với chữ ký tay của người đó.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img"><img src="assets/images/chung-thu-so-la-gi.jpg" className="card-img-top" alt="cts" /></div>
            <div className="card-block">
              <h4 className="card-title">Chữ ký số cho cá nhân độc lập</h4>
              {/* <h5 class="card-subtitle">Boostrap</h5> */}
              <p className="card-text">Chứng thư số dành cho Cá nhân là loại chứng thư số được cấp cho những người dùng cá nhân độc lập, không thuộc Tổ chức, doanh nghiệp. Khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương với chữ ký tay của người đó.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mbr-cards-col col-xs-12 col-lg-3" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img"><img src="assets/images/chung-thu-so-la-gi.jpg" alt="cts" className="card-img-top" /></div>
            <div className="card-block">
              <h4 className="card-title">Chữ ký số cho cá nhân độc lập</h4>
              {/* <h5 class="card-subtitle">Boostrap</h5> */}
              <p className="card-text">Chứng thư số dành cho Cá nhân là loại chứng thư số được cấp cho những người dùng cá nhân độc lập, không thuộc Tổ chức, doanh nghiệp. Khi sử dụng trong giao dịch điện tử có giá trị pháp lý tương đương với chữ ký tay của người đó.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-section" id="msg-box4-6" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '120px', paddingBottom: '120px'}}>
    <div className="container">
      <div className="row">
        <div className="mbr-table-md-up">
          <div className="mbr-table-cell col-md-5 text-xs-center text-md-right content-size">
            <h3 className="mbr-section-title display-2">VIDEO HƯỚNG DẪN</h3>
            <div className="lead">
              <p>Hướng dẫn kiểm tra thời hạn chứng thư số</p>
            </div>
            <div><a className="btn btn-black" href="/#" onClick={(e) => e.preventDefault()}>IPHONE</a> <a className="btn btn-black" href="/#" onClick={(e) => e.preventDefault()}>ANDROID</a></div>
          </div>
          <div className="mbr-table-cell mbr-left-padding-md-up mbr-valign-top col-md-7 image-size" style={{width: '50%'}}>
            <div className="mbr-figure"><iframe className="mbr-embedded-video" title="youtube" src="https://www.youtube.com/embed/5kF4b1lnfDw?rel=0&amp;showinfo=0&autoplay=0&loop=0" allowFullScreen width={1280} height={720} frameBorder={0} /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-cards mbr-section mbr-section-nopadding" id="features4-i" style={{backgroundColor: 'rgb(244, 244, 244)'}}>
    <div className="mbr-cards-row row">
      <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img iconbox"><a href="./" alt="cts" className="mbri-hearth mbr-iconfont mbr-iconfont-features4" style={{color: 'rgb(233, 165, 211)'}} /></div>
            <div className="card-block">
              <h4 className="card-title">Sứ mệnh</h4>
              <h5 className="card-subtitle">Bootstrap 4 has been noted</h5>
              <p className="card-text">Trong giai đoạn phát triển tiếp theo, NewCA xác định sứ mệnh của mình là trở thành một nhà cung cấp các dịch vụ số cho tổ chức, doanh nghiệp và cá nhân góp phần mang lại thành công và gia tăng giá trị cho khách hàng trong xu thế chuyển đổi số và tạo dựng nền kinh tế số tại Việt Nam.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img iconbox"><a href="./" alt="cts" className="mbri-globe-2 mbr-iconfont mbr-iconfont-features4" style={{color: 'rgb(39, 170, 224)'}} /></div>
            <div className="card-block">
              <h4 className="card-title">Triết lý kinh doanh</h4>
              <h5 className="card-subtitle">One of Bootstrap 4's big points</h5>
              <p className="card-text">Với mục tiêu trở thành sự lựa chọn hàng đầu của Khách hàng và đối tác, Nhà cung cấp dịch vụ số NewCA sẽ tiếp tục sáng tạo và cải tiến không ngừng nghỉ để mang đến các giải pháp và sản phẩm dịch vụ số TỐC ĐỘ - TIỆN ÍCH với triết lý cung cấp dịch vụ “NewCA luôn sẵn sàng khi bạn cần nhất” để mỗi Khách hàng, đối tác khi đồng hành cùng NewCA, lợi ích luôn tối đa.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mbr-cards-col col-xs-12 col-lg-4" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="card cart-block">
            <div className="card-img iconbox"><a href="./" alt="cts" className="mbri-smile-face mbr-iconfont mbr-iconfont-features4" style={{color: 'rgb(193, 193, 193)'}} /></div>
            <div className="card-block">
              <h4 className="card-title">Hợp tác</h4>
              <h5 className="card-subtitle">Google has a highly exhaustive list of fonts</h5>
              <p className="card-text">Với thiện chí hợp tác cùng thành công và phát triển kinh doanh bền vững, NewCA cam kết luôn dành cho Quý đối tác một chính sách hợp tác kinh doanh hợp lý, tỷ lệ chiết khấu cao và nhiều ưu đãi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-section mbr-background" id="testimonials1-7" style={{backgroundImage: 'url(assets/images/mbr-2000x1333.jpg)', paddingTop: '120px', paddingBottom: '120px'}}>
    <div className="mbr-overlay" style={{opacity: '0.8', backgroundColor: 'rgb(255, 255, 255)'}}>
    </div>
    <div className="mbr-section mbr-section__container mbr-section__container--middle">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-xs-center">
            <h3 className="mbr-section-title display-2">WHAT OUR FANTASTIC USERS SAY</h3>
            <small className="mbr-section-subtitle">Shape your future web project with sharp design and refine coded functions.</small>
          </div>
        </div>
      </div>
    </div>
    <div className="mbr-testimonials mbr-section mbr-section-nopadding">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <div className="mbr-testimonial card mbr-testimonial-lg">
              <div className="card-block"><p>“its really very amazing app that makes me finish html page in 3 minutes ( that's usually takes more than 1 hours at least from me if i did it from scratch). i hope to have very big library and plugins for this APP thanks again for your nice application”</p></div>
              <div className="mbr-author card-footer">
                <div className="mbr-author-img"><img src="assets/images/ellejmi6dqy-abigail-sisson-160x160.jpg" alt="cts" className="img-circle" /></div>
                <div className="mbr-author-name">Abanoub S.</div>
              </div>
            </div>
          </div><div className="col-xs-12 col-lg-4">
            <div className="mbr-testimonial card mbr-testimonial-lg">
              <div className="card-block"><p>“First of all hands off to you guys for your effort and nice, super tool. Good work mobirise team. We are expecting the new version soon with advance functionality with full bootstrap design. Great effort and super UI experience with easy drag &amp; drop with no time design bootstrap builder in present web design world.”</p></div>
              <div className="mbr-author card-footer">
                <div className="mbr-author-img"><img src="assets/images/fcuj-bvjrrs-alicja-koczaska-160x160.jpg" alt="cts" className="img-circle" /></div>
                <div className="mbr-author-name">Suffian A.</div>
              </div>
            </div>
          </div><div className="col-xs-12 col-lg-4">
            <div className="mbr-testimonial card mbr-testimonial-lg">
              <div className="card-block"><p>“At first view, looks like a nice innovative tool, i like the great focus and time that was given to the responsive design, i also like the simple and clear drag and drop features. Give me more control over the object's properties and ill be using this tool for more serious projects. Regards.”</p></div>
              <div className="mbr-author card-footer">
                <div className="mbr-author-img"><img src="assets/images/fqkbxo2nkq0-sticker-mule-160x160.jpg" alt="cts" className="img-circle" /></div>
                <div className="mbr-author-name">Jhollman C.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-section" id="pricing-table2-f" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '120px', paddingBottom: '120px'}}>
    <div className="mbr-section mbr-section__container mbr-section__container--middle">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-xs-center">
            <h3 className="mbr-section-title display-2">HOW MUCH DOES IT COST?</h3>
            <small className="mbr-section-subtitle">Pricing table with four columns and solid color background.</small>
          </div>
        </div>
      </div>
    </div>
    <div className="mbr-section mbr-section-nopadding mbr-price-table">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-4">
          <div className="mbr-plan card text-xs-center">
            <div className="mbr-plan-header card-block">
              <div className="card-title">
                <h3 className="mbr-plan-title">MONTHLY PLAN</h3>
                <small className="mbr-plan-subtitle">Description</small>
              </div>
              <div className="card-text">
                <div className="mbr-price">
                  <span className="mbr-price-value">$</span>
                  <span className="mbr-price-figure">1</span><small className="mbr-price-term">/mo.</small>
                </div>
                <small className="mbr-plan-price-desc">More details</small>
              </div>
            </div>
            <div className="mbr-plan-body card-block">
              <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">32 GB storage</li><li className="list-group-item">Unlimited users</li><li className="list-group-item">15 GB bandwidth</li></ul></div>
              <div className="mbr-plan-btn"><a href="/#" onClick={(e) => e.preventDefault()} className="btn btn-black btn-black-outline">DEMO</a></div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-4">
          <div className="mbr-plan card text-xs-center">
            <div className="mbr-plan-header card-block bg-primary">
              <div className="mbr-plan-label">HOT!</div>
              <div className="card-title">
                <h3 className="mbr-plan-title">QUARTERY PLAN</h3>
                <small className="mbr-plan-subtitle">Description</small>
              </div>
              <div className="card-text">
                <div className="mbr-price">
                  <span className="mbr-price-value">$</span>
                  <span className="mbr-price-figure">0.75</span><small className="mbr-price-term">/mo.</small>
                </div>
                <small className="mbr-plan-price-desc">More details</small>
              </div>
            </div>
            <div className="mbr-plan-body card-block">
              <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">32 GB storage</li><li className="list-group-item">Unlimited users</li><li className="list-group-item">15 GB bandwidth</li></ul></div>
              <div className="mbr-plan-btn"><a href="/#" onClick={(e) => e.preventDefault()} className="btn btn-black btn-black-outline">DEMO</a></div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-4">
          <div className="mbr-plan card text-xs-center">
            <div className="mbr-plan-header card-block">
              <div className="card-title">
                <h3 className="mbr-plan-title">ANNUAL PLAN</h3>
                <small className="mbr-plan-subtitle">Description</small>
              </div>
              <div className="card-text">
                <div className="mbr-price">
                  <span className="mbr-price-value">$</span>
                  <span className="mbr-price-figure">0.5</span><small className="mbr-price-term">/mo.</small>
                </div>
                <small className="mbr-plan-price-desc">More details</small>
              </div>
            </div>
            <div className="mbr-plan-body card-block">
              <div className="mbr-plan-list"><ul className="list-group list-group-flush"><li className="list-group-item">32 GB storage</li><li className="list-group-item">Unlimited users</li><li className="list-group-item">15 GB bandwidth</li></ul></div>
              <div className="mbr-plan-btn"><a href="/#" onClick={(e) => e.preventDefault()} className="btn btn-black btn-black-outline">DEMO</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-section article mbr-parallax-background" id="msg-box3-g" style={{backgroundImage: 'url(assets/images/mbr-5.jpg)', paddingTop: '120px', paddingBottom: '120px'}}>
    <div className="mbr-overlay" style={{opacity: '0.4', backgroundColor: 'rgb(255, 255, 255)'}}>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-xs-center">
          <h3 className="mbr-section-title display-2">ĐĂNG KÝ NGAY</h3>
          <div><a className="btn btn-black" href="/#" onClick={(e) => e.preventDefault()}>IPHONE</a> <a className="btn btn-black" href="/#" onClick={(e) => e.preventDefault()}>ANDROID</a></div>
        </div>
      </div>
    </div>
  </section>
  <section className="mbr-section article" id="msg-box22-g" style={{paddingTop: '40px', paddingBottom: '20px'}}>
    <div className="mbr-overlay" style={{backgroundColor: '#f4f4f4'}}>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-xs-center">
          <p>(c) 2017 M-App Template by <a href="./" style={{color: '#333', textDecoration: 'underline'}}> Mobirise</a></p>
        </div>
      </div>
    </div>
  </section>
  <input name="animation" type="hidden" />
</div>
      </Router>
    )
}
