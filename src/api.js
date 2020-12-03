import mockAPI from "./mockAPI";

const api = {
  getJobs() {
    return getMockData(mockAPI.jobs);
  },
};

function getMockData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default api;
