import axios from 'axios'

export default {
    LocalData: {
        GetLocalData() {
            return axios.get('http://localhost:8080/data.json')
          },
    },
}