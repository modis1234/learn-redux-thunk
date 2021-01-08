import React from "react";
import styled, { css } from "styled-components";

const InsertFormPositioner = styled.div`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const CreatePost = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <input
            autoFocus
            placeholder="title을 입력하세요..."
            value={value.title}
            onChange={onChange}
            name="title"
          />
          <input
            placeholder="body를 입력하세요..."
            value={value.body}
            onChange={onChange}
            name="body"
          />
          <button type="submit">등록</button>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default CreatePost;
