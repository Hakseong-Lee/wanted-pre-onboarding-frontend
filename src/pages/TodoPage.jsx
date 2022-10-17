import React, { useState } from 'react';
import styled from 'styled-components';
import { IoPencilSharp, IoTrashOutline } from 'react-icons/io5';
function TodoPage() {
  const [isDone, setIsDone] = useState(false);
  return (
    <TodoSection>
      <TodoContainer>
        <TodoHeader>&#9997; Todo List</TodoHeader>
        <TodoForm>
          <TodoInput></TodoInput>
          <AddButton>+</AddButton>
        </TodoForm>
        <ListContainer>
          <TodoList>
            <TodoText className={!isDone ? 'yet' : 'done'} onClick={() => setIsDone(!isDone)}>
              내일 예비군 가기
            </TodoText>
            <Button className="modifiy">
              <IoPencilSharp className="icon" />
            </Button>
            <Button className="delete">
              <IoTrashOutline className="icon" />
            </Button>
          </TodoList>
        </ListContainer>
      </TodoContainer>
    </TodoSection>
  );
}

const TodoSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`;
const TodoContainer = styled.article`
  width: 30rem;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 0;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
`;
const TodoHeader = styled.h1`
  color: #fff;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  align-items: center;
`;
const TodoText = styled.button`
  color: #fff;
  font-size: 1rem;
  &:hover {
    color: #e6e6e6;
  }
  &.done {
    color: #b3b3b3;
    text-decoration: line-through;
  }
`;
const TodoInput = styled.input`
  width: 85%;
  padding: 0.7rem;
  border-radius: 3px;
  background: transparent;
  border: none;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
`;
const AddButton = styled.button`
  font-size: 1.8rem;
  padding: 0.2rem 0.9rem;
  color: #fff;
  border-radius: 3px;
  background-color: #1a73e8;
  &:hover {
    filter: brightness(110%);
  }
`;
const TodoForm = styled.form`
  width: 100%;
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
`;
const ListContainer = styled.div`
  width: 85%;
  display: flex;
`;
const TodoList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12fr 1fr 1fr;
  .icon {
    margin-top: 0.6rem;
  }
`;
const Button = styled.button`
  padding: 0.2rem;
  font-size: 1.5rem;
  opacity: 0.7;
  &.modifiy&:hover {
    color: #1a73e8;
  }
  &.delete&:hover {
    color: red;
  }
`;
export default TodoPage;
