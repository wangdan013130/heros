import axios from 'axios';
const MyAxios = {};

MyAxios.install  = function(vue) {
    axios.defaults.beseUrl = 'http://localhost:3000/';
    vue.prototype.$http = axios;
}

export default MyAxios;