import { useState } from "react";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

import {
  useNavigate
} from "react-router-dom";


function AdminLogin() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin");

    }

    catch (error) {

      alert("ইমেইল অথবা পাসওয়ার্ড ভুল!");

    }

    finally {

      setLoading(false);

    }

  };


  return (

    <div className="login-page">

      <form
        className="login-card"
        onSubmit={handleLogin}
      >

        <h1>
          Admin Login
        </h1>

        <p>
          জাহিদ হাসান নিউজ পোর্টাল
        </p>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e =>
            setEmail(e.target.value)
          }
          required
        />


        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e =>
            setPassword(e.target.value)
          }
          required
        />


        <button
          type="submit"
          disabled={loading}
        >

          {loading
            ? "অপেক্ষা করুন..."
            : "Login করুন"
          }

        </button>

      </form>

    </div>

  );
}

export default AdminLogin;
