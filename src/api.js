const api = {
  getJobs() {
    return fetch(
      "https://weworkremotelyapi.herokuapp.com/api/jobs?perPage=15"
    ).then((res) => res.json());
  },
};

export default api;
