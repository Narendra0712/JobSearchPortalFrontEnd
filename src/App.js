
import './App.css';
import { ToastContainer } from 'react-toastify';

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';


import AdminLogin from './components/Sign In/AdminLogin';
import JobProviderLogin from './components/Sign In/JobProviderLogin';
import JobSeekerLogin from './components/Sign In/JobSeekerLogin';

import AdminRegisteration from './components/Admin/AdminRegisteration';
import AdminHome from './components/Admin/AdminHome';
import ViewAllJobs from './components/Admin/ViewAllJobs';
import AdminProfile from './components/Admin/AdminProfile';
import UpdateAdmin from './components/Admin/UpdateAdmin';
import DeleteAdmin from './components/Admin/DeleteAdmin';
import ViewAllJobprovider from './components/Admin/ViewAllJobprovider'
import ManageJobProvider from './components/Job Provider/ManageJobProvider'

import JobProviderRegistration from './components/Job Provider/JobProviderRegistration';
import JobProviderHome from './components/Job Provider/JobProviderHome';
import ViewAllEmployees from './components/Job Provider/ViewAllEmployees';
import ViewAllJobSeeker from './components/Job Provider/ViewAllJobSeeker';
import ViewAllPostedJobs from './components/Job Provider/ViewAllPostedJobs';
import PostJobs from './components/Job Provider/PostJobs';
import JobProviderProfile from './components/Job Provider/JobProviderProfile';


import JobSeekerRegistration from './components/Job Seeker/JobSeekerRegistration';


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>

      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/JobProviderLogin" element={<JobProviderLogin/>}/>
      <Route path="/JobSeekerLogin" element={<JobSeekerLogin/>}/>

      
      <Route path="/JobSeekerRegistration" element={<JobSeekerRegistration/>}/>
      <Route path="/AdminRegisteration" element={<AdminRegisteration/>}/>
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/ViewAllJobs" element={<ViewAllJobs/>}/>
      <Route path="/AdminProfile" element={<AdminProfile/>}/>
      <Route path="/UpdateAdmin" element={<UpdateAdmin/>}/>
      <Route path="/DeleteAdmin" element={<DeleteAdmin/>}/>
      <Route path="/ViewAllJobprovider" element={<ViewAllJobprovider/>}/>
      <Route path="/ManageJobProvider" element={<ManageJobProvider/>}/>

      
      <Route path="/JobProviderRegistration" element={<JobProviderRegistration/>}/>
      <Route path="/JobProviderHome" element={<JobProviderHome/>}/>
      <Route path="/ViewAllEmployees" element={<ViewAllEmployees/>}/>
      <Route path="/ViewAllJobSeeker" element={<ViewAllJobSeeker/>}/>
      <Route path="/ViewAllPostedJobs" element={<ViewAllPostedJobs/>}/>
      <Route path="/PostJobs" element={<PostJobs/>}/>
      <Route path="/JobProviderProfile" element={<JobProviderProfile/>}/>



    </Routes>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>
    
  );
}

export default App;
