import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home ';
import Login from './Login';
import SignUp from './SignUp';
import NavBar from './NavBar';
import TodoList from './TodoList';
import CourseList from './Course';
import Contact from './Contact';
import AboutPage from './AboutPage';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/courses" element={<CourseList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/todo" element={<TodoList/>} />
      </Routes>
    </Router>
  );
}

export default App;
