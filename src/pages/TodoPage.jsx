import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoPencilSharp, IoTrashOutline, IoCheckmarkSharp, IoClose } from 'react-icons/io5';
import { GetTodosApi, CreateTodosApi, UpdateTodosApi, DeleteTodosApi } from '../components/Apis';

function TodoPage() {
  // 리스트 state
  const [todoList, setTodoList] = useState([]);
  const [todoContent, setTodoContent] = useState('');

  // 리스트 수정 state
  const [modifyContent, setModifyContent] = useState('');
  const [isModify, setIsModify] = useState(false);

  // 선택한 todo state
  const [selectedId, setSelectedId] = useState('');

  // Dom 선택
  const inputRef = useRef();
  const modifyRef = useRef();

  // 리스트 불러오기
  const getTodos = async () => {
    try {
      const res = await GetTodosApi();
      setTodoList(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const navigate = useNavigate();
  //토큰 유무 확인
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    } else {
      getTodos();
    }
  }, []);

  // todo 추가하기
  const handleAdd = async (e) => {
    e.preventDefault();
    const newTodo = { todo: todoContent };
    try {
      await CreateTodosApi(newTodo);
      getTodos();
      inputRef.current.value = '';
      setTodoContent('');
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  // 리스트 변경시 정보 다시 불러오기
  useEffect(() => {
    getTodos();
  }, [todoList]);

  // 로그아웃
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/');
  };
  return (
    <TodoSection>
      <TodoContainer>
        <TodoHeader>&#9997; Todo List</TodoHeader>
        <LogoutBotton onClick={handleLogout}>로그아웃</LogoutBotton>
        <TodoForm>
          <TodoInput
            type="text"
            name="content"
            ref={inputRef}
            onChange={(e) => setTodoContent(e.target.value)}
          ></TodoInput>
          <AddButton onClick={handleAdd}>+</AddButton>
        </TodoForm>
        <ListContainer>
          {todoList.length > 0
            ? todoList.map((info) => (
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
                        onClick={async (e) => {
                          e.preventDefault();
                          const modifiedTodo = {
                            todo: modifyContent,
                            isCompleted: info.isCompleted,
                          };
                          try {
                            await UpdateTodosApi(info.id, modifiedTodo);
                            setIsModify(false);
                          } catch (err) {
                            alert(err.response.data.message);
                          }
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
                        onClick={async (e) => {
                          e.preventDefault();
                          const isCompleted = {
                            todo: info.todo,
                            isCompleted: !info.isCompleted,
                          };
                          try {
                            await UpdateTodosApi(info.id, isCompleted);
                          } catch (err) {
                            alert(err.response.data.message);
                          }
                        }}
                      >
                        {info.todo}
                      </TodoText>
                      <Button
                        className="modifiy"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedId(info.id);
                          setModifyContent(info.todo);
                          setIsModify(true);
                        }}
                      >
                        <IoPencilSharp className="icon" />
                      </Button>
                      <Button
                        className="delete"
                        onClick={async (e) => {
                          e.preventDefault();
                          try {
                            await DeleteTodosApi(info.id);
                          } catch (err) {
                            alert(err.response.data.message);
                          }
                        }}
                      >
                        <IoTrashOutline className="icon" />
                      </Button>
                    </TodoList>
                  )}
                </>
              ))
            : ''}
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
const LogoutBotton = styled.button`
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 2.2rem;
  right: 2rem;
  background-color: #999999;
  &:hover {
    filter: brightness(90%);
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
const ModifyContainer = styled.form`
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
