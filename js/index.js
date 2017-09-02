const getGithubProfile = () =>
 fetch('https://api.github.com/users/eaknoppanut')

 getGithubProfile()
 .then(response => console.log('response',response))