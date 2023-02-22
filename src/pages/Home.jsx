import React, { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import SearchPosts from "../components/searchPosts";
import SortBy from "../components/SortBy";
import {
  useGetPostsQuery,
  useLazyGetPostsQuery,
} from "../store/features/posts/api";

function Home() {
  const [getPosts, { data, isLoading, isError }] = useLazyGetPostsQuery();
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    getPosts();
    setPosts(data);
  }, [data]);
  const handleSearch = (query) => {
    if (query === "") return setPosts(data);
    const filtered = data.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query.toLowerCase());
      const contentMatch = post.content
        .toLowerCase()
        .includes(query.toLowerCase());
      return titleMatch || contentMatch;
    });
    setPosts(filtered);
  };
  const handleSortChange = (value) => {
    setSortOption(value);
  };

  const sortedPosts = posts?.slice().sort((a, b) => {
    switch (sortOption) {
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);
      case "title_asc":
        return a.title.localeCompare(b.title);
      case "title_desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
  return (
    <div className="mx-auto max-w-xl">
      <AddPost></AddPost>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between gap-3">
          <SearchPosts onSearch={handleSearch}></SearchPosts>
          <SortBy onChange={handleSortChange}></SortBy>
        </div>
        {posts &&
          sortedPosts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
}

export default Home;
