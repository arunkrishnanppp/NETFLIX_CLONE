import axios from 'axios'
const instance=  axios.create({
    baseURL:"https://api.themoviedb.org/3"
});


// we cn use instanceof.get('/nextpart')

export default instance