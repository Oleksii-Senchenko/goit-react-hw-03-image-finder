import axios from 'axios';



const API_KEY = '37920091-249696636902b038ed96aea04';
axios.defaults.baseURL = 'https://pixabay.com/api/'
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12
}
const getImage = async (searchQuery, page) => {

    const { data } = await axios.get(`?q=${searchQuery}&page=${page}`)
    return data
}
export default getImage;

