import api from './api'

api()
   .then(response => response.json())
  .catch(e => console.error('Something went wrong',e))
  .then(data => console.log('res', data))
