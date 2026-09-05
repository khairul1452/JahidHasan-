import Header from "../components/Header";
import Footer from "../components/Footer";
import BreakingNews from "../components/BreakingNews";

import { useEffect, useState } from "react";

import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot
} from "firebase/firestore";

import { db } from "../firebase";

import { Link } from "react-router-dom";


function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const q = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc"),
      limit(6)
    );

    const unsubscribe = onSnapshot(q, snapshot => {

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setPosts(data);

    });

    return () => unsubscribe();

  }, []);


  return (

    <>
      <Header />

      <BreakingNews />


      {/* HERO */}

      <section className="hero">

        <div className="container hero-content">

          <div className="hero-text">

            <span className="badge">
              ৫ নং বানাইল ইউনিয়ন
            </span>

            <h1>
              জনগণের পাশে,<br />
              উন্নয়নের পথে
            </h1>

            <p>
              জাহিদ হাসানের সকল কার্যক্রম,
              সংবাদ এবং জনসেবামূলক উদ্যোগের
              সর্বশেষ তথ্য জানতে আমাদের সঙ্গে থাকুন।
            </p>

            <Link to="/news">

              <button className="primary-btn">
                সর্বশেষ কার্যক্রম দেখুন
              </button>

            </Link>

          </div>


          <div className="hero-image">

            <div className="profile-placeholder">

              <span>জাহিদ হাসান</span>

            </div>

          </div>

        </div>

      </section>



      {/* LATEST NEWS */}

      <section className="news-section">

        <div className="container">

          <div className="section-header">

            <h2>সর্বশেষ কার্যক্রম</h2>

            <Link to="/news">
              সব দেখুন →
            </Link>

          </div>


          <div className="news-grid">

            {posts.map(post => (

              <article
                className="news-card"
                key={post.id}
              >

                <img
                  src={
                    post.featuredImage ||
                    "https://placehold.co/600x400"
                  }
                  alt={post.title}
                />


                <div className="news-content">

                  <span className="category">

                    {post.category}

                  </span>


                  <h3>
                    {post.title}
                  </h3>


                  <p>
                    {post.shortDescription}
                  </p>


                  <Link to={`/news/${post.id}`}>

                    <button>
                      বিস্তারিত দেখুন
                    </button>

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="about-section">

        <div className="container about-content">

          <div>

            <h2>
              জাহিদ হাসান সম্পর্কে
            </h2>

            <p>
              ৫ নং বানাইল ইউনিয়নের মানুষের
              পাশে থেকে সামাজিক ও উন্নয়নমূলক
              কার্যক্রমে অংশগ্রহণ এবং জনগণের
              কল্যাণে কাজ করার লক্ষ্য নিয়ে
              এই প্ল্যাটফর্ম পরিচালিত হচ্ছে।
            </p>

            <Link to="/about">

              <button className="primary-btn">
                আরও জানুন
              </button>

            </Link>

          </div>

        </div>

      </section>


      <Footer />

    </>

  );
}

export default Home;
