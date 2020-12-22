const api = {
  getJobs() {
    return fetch(
      "https://weworkremotelyapi.herokuapp.com/api/jobs?perPage=50"
    ).then((res) => res.json());
  },
};

export default api;
