import { Link } from "react-router-dom";
import { Menu, Facebook, Youtube } from "lucide-react";

function Header() {

  return (
    <>
      <div className="topbar">

        <div className="container topbar-content">

          <span>
            ৫ নং বানাইল ইউনিয়ন
          </span>

          <div className="social-icons">
            <Facebook size={18} />
            <Youtube size={18} />
          </div>

        </div>

      </div>


      <header className="main-header">

        <div className="container header-content">

          <div className="logo">

            <div className="logo-circle">
              ZH
            </div>

            <div>
              <h1>জাহিদ হাসান</h1>
              <p>৫ নং বানাইল ইউনিয়ন</p>
            </div>

          </div>


          <div className="header-message">
            <strong>জনগণের পাশে, উন্নয়নের পথে</strong>
          </div>

        </div>

      </header>


      <nav className="navbar">

        <div className="container nav-content">

          <Link to="/">হোম</Link>

          <Link to="/news">কার্যক্রম</Link>

          <Link to="/news">সংবাদ</Link>

          <Link to="/gallery">গ্যালারি</Link>

          <Link to="/about">জাহিদ হাসান সম্পর্কে</Link>

          <Link to="/contact">যোগাযোগ</Link>

          <Menu className="mobile-menu" />

        </div>

      </nav>

    </>
  );
}

export default Header;
