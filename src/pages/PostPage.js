import React from 'react';
import PostContainer from '../containers/PostContainer';

const PostPage = ({ match }) => {
    const { id } = match.params; // 주의!! url 파라미터는 문자열이다. -> 타입이 다를 경우 파싱 필요
    const postId = parseInt(id, 10);
    return <PostContainer postId={postId} />;
};

export default PostPage;