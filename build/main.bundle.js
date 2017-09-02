'use strict';

var getGithubProfile = function getGithubProfile() {
  return fetch('https://api.github.com/users/eaknoppanut');
};

getGithubProfile().then(function (response) {
  return console.log('response', response);
});
