import axios from 'axios';
import { apiKeys } from '../constants/apiKeys';
import { apiUrls } from '../constants/apiUrls';

function GetUserLocation() {
    return axios
        .get(apiUrls.apiAbstract, {
            params: {
                api_key: apiKeys.abstract_key,
            },
        })
        .then((response) => response.data.city);
}

export default GetUserLocation;
