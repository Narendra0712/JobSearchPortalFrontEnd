import logo from './logo.svg';
import './App.css';

import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Sign In/Login';
import JobSeekerRegistration from './components/Job Seeker/JobSeekerRegistration';
import JobProvider from './components/Job Provider/JobInfo';
import JobSeeker from './components/Job Seeker/JobSeeker';
import JobInfo from './components/Job Provider/JobInfo';
import UserProfile from './components/Job Seeker/UserProfile'

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
