import axios from 'axios'
const baseUrl = 'http://restcountries.com/all'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}

export default getAll