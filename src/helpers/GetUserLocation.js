import axios from 'axios';
import { apiAbstractKey } from '../constants/apiKeys';

function GetUserLocation () {
    return axios
        .get('https://ipgeolocation.abstractapi.com/v1/', {
            params: {
                api_key: apiAbstractKey,
            },
        })
        .then((response) => response.data.city);
}

export default GetUserLocation;
