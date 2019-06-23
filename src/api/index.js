import axios from 'axios';

const memberUrl = "http://rap2api.taobao.org/app/mock/222582";

export default {
  reqGetData (url) {
    return new Promise((resolve, reject) => {
      axios.get(memberUrl + url).then(res => {
        resolve(res.data)
      })
    })
  },
  reqPostData (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(memberUrl + url).then(res => {
        resolve(res.data)
      })
    })
  }
}