function getResponseFromAPI() {
  return new Promise(() => {});
}
module.exports = getResponseFromAPI;

const response = getResponseFromAPI();
console.log(response instanceof Promise);
