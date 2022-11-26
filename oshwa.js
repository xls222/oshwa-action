const webrequest = require('webrequest-action/webrequest')

function post_project(url, token, payload) {
  const auth = { 'Authorization': 'Bearer ' + token };
  return response = webrequest(url + 'projects/', 'post', payload, auth);
}
module.exports.post_project = post_project;

function get_project(url, token, id) {
  const auth = { 'Authorization': 'Bearer ' + token };
  return response = webrequest(url + 'projects/' + id, 'get', '', auth);
}
module.exports.get_project = get_project;

function get_options(url, token) {
  const auth = { 'Authorization': 'Bearer ' + token };
  return response = webrequest(url + 'options/', 'get', '', auth);
}
module.exports.get_options = get_options;
