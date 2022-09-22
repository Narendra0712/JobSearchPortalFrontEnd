
import './App.css';

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import JobSeekerRegistration from './components/Job Seeker/JobSeekerRegistration';
import JobProvider from './components/Job Provider/JobInfo';
import JobInfo from './components/Job Provider/JobInfo';
import JobseekerProfile from './components/Job Seeker/JobseekerProfile'
import AdminLogin from './components/Sign In/AdminLogin'
import UpdateJobs from './components/Job Provider/UpdateJobs'
import DeleteJobs from './components/Job Provider/DeleteJobs'
import ViewAllJobSeeker from './components/Job Provider/ViewAllJobSeeker'
import AdminRegisteration from './components/Admin/AdminRegisteration'
import AdminHome from './components/Admin/AdminHome'
import ViewAllJobProviders from './components/Job Provider/ViewAllJobProviders'
import ViewAllJobs from './components/Admin/ViewAllJobs'
import AdminProfile from './components/Admin/AdminProfile'
import UpdateAdmin from './components/Admin/UpdateAdmin';
import DeleteAdmin from './components/Admin/DeleteAdmin';


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
      <Route path="/ViewAllJobSeeker" element={<ViewAllJobSeeker/>}/>
      <Route path="/JobInfo" element={<JobInfo/>}/>
      <Route path="/JobseekerProfile" element={<JobseekerProfile/>}/>
      <Route path="/UpdateJobs" element={<UpdateJobs/>}/>
      <Route path="/DeleteJobs" element={<DeleteJobs/>}/>
      <Route path="/AdminRegisteration" element={<AdminRegisteration/>}/>
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/ViewAllJobProviders" element={<ViewAllJobProviders/>}/>
      <Route path="/ViewAllJobs" element={<ViewAllJobs/>}/>
      <Route path="/AdminProfile" element={<AdminProfile/>}/>
      <Route path="/UpdateAdmin" element={<UpdateAdmin/>}/>
      <Route path="/DeleteAdmin" element={<DeleteAdmin/>}/>



    </Routes>
    </>
    
  );
}

export default App;
