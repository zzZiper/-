import axios from 'axios';

export default {
  reqGetData (url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      })
    })
  },
  reqPostData (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url,params).then(res => {
        resolve(res.data)
      })
    })
  }
}