import axios from 'axios'

// create an instance of the axios client with some default properties
export default axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2"})