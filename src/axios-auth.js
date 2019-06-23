import axios from 'axios'

const instance = axios.create({
    baseURL: "http://newtripplanner.com/app/core"
})

export default instance