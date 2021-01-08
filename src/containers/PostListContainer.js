import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { getPosts, postPost } from "../modules/posts";

const PostListContainer = () => {
  //   const [title, setTitle] = useState("");
  //   const [body, setBody] = useState("");

  const [value, setValue] = useState({
    title: "",
    body: "",
  });
  const { data={}, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const onChange = useCallback((e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault(); // 새로고침 방지
    let postData = {
        title: value.title,
        body: value.body
    }

    dispatch(postPost(postData))
    setValue({
      title: "",
      body: "",
    });
  });

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생!!!</div>;
  if (!data) return null;

  return (
    <>
      <PostList posts={data} />
      <CreatePost value={value} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default PostListContainer;
