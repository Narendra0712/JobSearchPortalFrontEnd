import axios from "axios";

export const GETALLJOBS = "http://localhost:9009/job/getalljobs";
export const JOBPROVIDERLOGIN = "http://localhost:9009/jobprovider/login";
export const DELETEJOBS ="http://localhost:9009/jobprovider/deletejobpost?jobid=";
export const GETALLJOBPROVIDERS="http://localhost:9009/admin/getalljobprovider";
export const VIEWJOBPROVIDERPROFILE="http://localhost:9009/jobprovider/viewprofile";

class jobproviderservices {
  getAllJobProvider(){
    return axios.get(GETALLJOBPROVIDERS);
  }
  
  getAllJobs() {
    return axios.get(GETALLJOBS);
  }

  deleteJobs(jobid) {
    return axios.delete(DELETEJOBS + jobid);
  }

  getJobProviderById(){
    return axios.get(VIEWJOBPROVIDERPROFILE);
  }
}

export default new jobproviderservices();
