import axios from "axios";

export const JOBSEEKERLOGIN ="http://localhost:9009/jobseeker/login";
export const JOBSEEKERVIEWPROFILE = "http://localhost:9009/jobseeker/viewprofile/";
export const UPDATEJOBSEEKER = "http://localhost:9009/jobseeker/update";
export const GETALLJOBSEEKERS = "http://localhost:9009/admin/getalljobseeker";

class jobseekerservices {
    getAllJobSeeker() {
    return axios.get(GETALLJOBSEEKERS);
    }
  
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
  