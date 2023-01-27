import axios from 'axios';
import { apiAbstractUrl } from '../constants/apiUrls';

function GetUserLocation() {
    return axios
        .get(apiAbstractUrl, {
            params: {
                api_key: process.env.REACT_APP_API_ABSTRACT_KEY,
            },
        })
        .then((response) => response.data.city);
}

export default GetUserLocation;
