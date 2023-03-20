import axios from "axios";

// export const getUrl = (url) => {
//   return axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);
// };

export default{
    getUrlnew(url){
        axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);
    }
}