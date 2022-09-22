import logo from './logo.svg';
import './App.css';

import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import JobSeekerRegistration from './components/JobSeekerRegistration';
import JobProvider from './components/JobProvider';
import JobSeeker from './components/JobSeeker';
import JobInfo from './components/JobInfo';
import UserProfile from './components/UserProfile'



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/JobSeekerRegistration" element={<JobSeekerRegistration/>}/>
      <Route path="/JobProvider" element={<JobProvider/>}/>
      <Route path="/JobSeeker" element={<JobSeeker/>}/>
      <Route path="/JobInfo" element={<JobInfo/>}/>
      <Route path="/UserProfile" element={<UserProfile/>}/>
    </Routes>
    </>
    
  );
}

export default App;
