import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { IoPencilSharp, IoTrashOutline, IoCheckmarkSharp, IoClose } from 'react-icons/io5';
function TodoPage() {
  const [todoList, setTodoList] = useState([]);
  const [todoContent, setTodoContent] = useState('');
  const [modifyContent, setModifyContent] = useState('');
  const [isModify, setIsModify] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const inputRef = useRef();
  const modifyRef = useRef();
  //랜덤 아이디 생성
  const [randomId, setRandomId] = useState(0);
  let todoInfo = { id: randomId, todo: todoContent, isCompleted: false, userId: 1 };
  const ex = todoList.map((info) => (
    <>
      {isModify && info.id === selectedId ? (
        <ModifyContainer>
          <ModifyInput
            type="text"
            name="modifyContent"
            ref={modifyRef}
            defaultValue={info.todo}
            onChange={(e) => {
              setModifyContent(e.target.value);
            }}
          ></ModifyInput>
          <Button
            className="confirm"
            onClick={(e) => {
              e.preventDefault();
              const modifiedList = todoList.map((prevList) => {
                if (prevList.id === info.id) {
                  prevList.todo = modifyContent;
                  return prevList;
                } else {
                  return prevList;
                }
              });
              setTodoList(modifiedList);
              setIsModify(false);
            }}
          >
            <IoCheckmarkSharp className="icon" />
          </Button>
          <Button
            className="close"
            onClick={(e) => {
              e.preventDefault();
              setIsModify(false);
            }}
          >
            <IoClose className="icon" />
          </Button>
        </ModifyContainer>
      ) : (
        <TodoList key={info.id}>
          <TodoText
            className={!info.isCompleted ? 'yet' : 'done'}
            onClick={(e) => {
              e.preventDefault();
              const isCompleteList = todoList.map((prevState) => {
                if (prevState.id === info.id) {
                  prevState.isCompleted = !prevState.isCompleted;
                  return prevState;
                } else {
                  return prevState;
                }
              });
              setTodoList(isCompleteList);
            }}
          >
            {info.todo}
          </TodoText>
          <Button
            className="modifiy"
            onClick={(e) => {
              e.preventDefault();
              setSelectedId(info.id);
              setIsModify(true);
            }}
          >
            <IoPencilSharp className="icon" />
          </Button>
          <Button
            className="delete"
            onClick={(e) => {
              e.preventDefault();
              const newList = todoList.filter((e) => e.id !== info.id);
              setTodoList(newList);
            }}
          >
            <IoTrashOutline className="icon" />
          </Button>
        </TodoList>
      )}
    </>
  ));
  return (
    <TodoSection>
      <TodoContainer>
        <TodoHeader>&#9997; Todo List</TodoHeader>
        <TodoForm>
          <TodoInput
            type="text"
            name="content"
            ref={inputRef}
            onChange={(e) => setTodoContent(e.target.value)}
          ></TodoInput>
          <AddButton
            onClick={(e) => {
              e.preventDefault();
              setRandomId(new Date().getTime());
              setTodoList((list) => [...list, todoInfo]);
              inputRef.current.value = '';
              setTodoContent('');
            }}
          >
            +
          </AddButton>
        </TodoForm>
        <ListContainer>{ex}</ListContainer>
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
  overflow: scroll;
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
const ModifyInput = styled.input`
  width: 90%;
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
  flex-direction: column;
`;
const TodoList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12fr 1fr 1fr;
  .icon {
    margin-top: 0.6rem;
  }
`;
const ModifyContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
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
  &.confirm&:hover {
    color: #1a73e8;
  }
  &.close&:hover {
    color: red;
  }
`;
export default TodoPage;
