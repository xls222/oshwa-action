const webrequest = require('webrequest-action/webrequest')

async function post_project(url, token, payload) {
  const headers = { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' };
  return await webrequest(url + 'projects/', 'post', payload, headers);
}
module.exports.post_project = post_project;

async function get_project(url, token, id) {
  const headers = { 'Authorization': 'Bearer ' + token };
  return await webrequest(url + 'projects/' + id, 'get', '', headers);
}
module.exports.get_project = get_project;

async function get_options(url, token) {
  const headers = { 'Authorization': 'Bearer ' + token };
  return await webrequest(url + 'options/', 'get', '', headers);
}
module.exports.get_options = get_options;
