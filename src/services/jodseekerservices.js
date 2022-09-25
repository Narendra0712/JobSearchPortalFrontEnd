import axios from "axios";

export const JOBSEEKERLOGIN ="http://localhost:9009/jobseeker/login";
export const JOBSEEKERVIEWPROFILE = "http://localhost:9009/jobseeker/viewprofile/";
export const UPDATEJOBSEEKER = "http://localhost:9009/jobseeker/update";

class jobseekerservices {
    // getAllJobSeeker() {
    //   return axios.get(GETALLADMIN);
    // }
  
    // deleteJobSeeker(jobseekerid) {
    //   return axios.delete(DELETEADMIN + jobseekerid);
    // }
  
    updateJobSeeker(jobseeker) {
      return axios.put(UPDATEJOBSEEKER, jobseeker);
    }
  
    getJobSeekerById(jobseekerid) {
      return axios.get(JOBSEEKERVIEWPROFILE + jobseekerid);
    }
  }

  export default new jobseekerservices();
  