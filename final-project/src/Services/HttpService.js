import axios from 'axios'

class HttpService {

    post(path, data) {
        const instance = axios.create({
            baseURL: 'http://crud-api.hypetech.xyz/v1',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        })

        return instance.post(path, data)     // metoda post vraca promis
    }



}

export const http = new HttpService();