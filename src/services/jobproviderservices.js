
import axios from "axios";

export const GETALLJOBS = "http://localhost:9009/job/getalljobs";
export const JOBPROVIDERLOGIN = "http://localhost:9009/jobprovider/login";
export const DELETEJOBS = "http://localhost:9009/jobprovider/deletejobpost?jobid=";




class jobproviderservices {
    getAllJobs() {
      return axios.get(GETALLJOBS);
    }
  
    deleteJobs(jobid) {
      return axios.delete(DELETEJOBS + jobid);
    }
  }
  
  export default new jobproviderservices();
  