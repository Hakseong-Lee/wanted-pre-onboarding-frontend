import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
