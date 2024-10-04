import React, { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://tpo-9ws3.onrender.com/api/posts" + search
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="mainhome">
      <Posts posts={posts} />
    </div>
  );
}
