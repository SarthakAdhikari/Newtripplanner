import axios from 'axios'

const instance = axios.create({
    baseURL: "http://newtripplanner.com/core"
})

export default instance