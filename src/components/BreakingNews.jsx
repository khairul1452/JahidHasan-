import { useEffect, useState } from "react";

import {
  collection,
  query,
  where,
  onSnapshot
} from "firebase/firestore";

import { db } from "../firebase";

function BreakingNews() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    const q = query(
      collection(db, "breakingNews"),
      where("active", "==", true)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setNews(data);

    });

    return () => unsubscribe();

  }, []);


  if (news.length === 0) return null;


  return (

    <div className="breaking-news">

      <div className="breaking-label">
        🔴 ব্রেকিং নিউজ
      </div>

      <div className="breaking-content">

        <div className="ticker">

          {news.map(item => (
            <span key={item.id}>
              {item.title}
            </span>
          ))}

        </div>

      </div>

    </div>

  );
}

export default BreakingNews;
