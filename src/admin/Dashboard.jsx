import { useEffect, useState } from "react";

import {
  collection,
  getCountFromServer
} from "firebase/firestore";

import { db, auth } from "../firebase";

import {
  signOut
} from "firebase/auth";

import {
  Link,
  useNavigate
} from "react-router-dom";


function Dashboard() {

  const [postCount, setPostCount] = useState(0);

  const navigate = useNavigate();


  useEffect(() => {

    async function getStats() {

      const snapshot =
        await getCountFromServer(
          collection(db, "posts")
        );

      setPostCount(snapshot.data().count);

    }

    getStats();

  }, []);


  const logout = async () => {

    await signOut(auth);

    navigate("/admin/login");

  };


  return (

    <div className="admin-layout">

      <aside className="sidebar">

        <h2>
          Admin Panel
        </h2>

        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin/posts">
          সব পোস্ট
        </Link>

        <Link to="/admin/add-post">
          নতুন পোস্ট
        </Link>

        <button onClick={logout}>
          Logout
        </button>

      </aside>


      <main className="admin-main">

        <h1>
          Dashboard
        </h1>


        <div className="stats-grid">

          <div className="stat-card">

            <h3>
              মোট পোস্ট
            </h3>

            <strong>
              {postCount}
            </strong>

          </div>


          <div className="stat-card">

            <h3>
              নিউজ পোর্টাল
            </h3>

            <strong>
              Active
            </strong>

          </div>

        </div>

      </main>

    </div>

  );
}

export default Dashboard;
