
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import JobSeekerRegistration from './components/Job Seeker/JobSeekerRegistration';
import JobProvider from './components/Job Provider/JobInfo';
import JobSeeker from './components/Job Seeker/JobSeeker';
import JobInfo from './components/Job Provider/JobInfo';
import JobseekerProfile from './components/Job Seeker/JobseekerProfile'
import AdminLogin from './components/Sign In/AdminLogin'
import UpdateJobs from './components/Job Provider/UpdateJobs'
import DeleteJobs from './components/Job Provider/DeleteJobs'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/JobSeekerRegistration" element={<JobSeekerRegistration/>}/>
      <Route path="/JobProvider" element={<JobProvider/>}/>
      <Route path="/JobSeeker" element={<JobSeeker/>}/>
      <Route path="/JobInfo" element={<JobInfo/>}/>
      <Route path="/JobseekerProfile" element={<JobseekerProfile/>}/>
      <Route path="/UpdateJobs" element={<UpdateJobs/>}/>
      <Route path="/DeleteJobs" element={<DeleteJobs/>}/>
    </Routes><Footer/>
    </>
    
  );
}

export default App;
