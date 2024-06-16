import axios from "axios";
import {DELETE, GET, POST, PUT} from "../utils/requestActionConstants";

export async function processReq(method, url, data, customHeader) {
    const token = '';//sessionStorage.getItem('token');
    let response = {data: null, error: true}
    let headerConfig = {
        headers: {
            'Authorization': `Bearer ${token}`,
            // 'SocketId': sessionStorage.getItem('socketId')
        }
    };

    if (customHeader) {
        headerConfig = customHeader;
    }

    // console.log(headerConfig);

    switch (method) {
        case GET:
            try {
                let result = await axios.get(url, headerConfig);

                response = result.data;
            } catch (error) {

                // console.log('error printing', error.toString());
                // alert(error.toString());
                response = false;
            }
            
            break;
        case POST:
            try {
                let result = await axios.post(url, data, headerConfig);
                
                response = result.data;
            } catch (error) {
                // console.log('error printing', error.toString());
                // alert(error.toString());
                // console.log(error.toString())
                response.message = (error.response && error.response.data.message ? error.response.data.message : '') || error.toString();
                
                if (error.response && error.response.data) {
                    response.errorMessage = error.response.data.errorMessage;
                }
                // window.location.replace('/');
            }
            
            break;
        case DELETE:
            try {
                let result = await axios.delete(url, headerConfig);
                response = result.data;
            } catch (error) {
                response.message = (error.response && error.response.data.message ? error.response.data.message : '') || error.toString();
            }
            break;
        case PUT:
            try {
                let result = await axios.put(url, data, headerConfig);
                
                response = result.data;
            } catch (error) {
                // console.log('error printing', error.toString());
                // alert(error.toString());
                // console.log(error.toString())
                response.message = (error.response && error.response.data.message ? error.response.data.message : '') || error.toString();
                
                // window.location.replace('/');
            }
            
            break;
        default:
            response = {};
    }

    return response;
}

export const fetcher = ({method, url, data}) => processReq(method, url, data);

export const headerConfig = () => {
    const token = '' //sessionStorage.getItem('token');

    return ({
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};