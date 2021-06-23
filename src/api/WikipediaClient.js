import axios from 'axios'

// create an instance of the axios client with some default properties
export default axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php?origin=*"
})