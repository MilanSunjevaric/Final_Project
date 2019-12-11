import axios from 'axios'

class UserService {

    get(path) {
        const instance = axios.create({
            baseURL: 'http://crud-api.hypetech.xyz/v1/users',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        })

        return instance.get(path)     // metoda post vraca promis
    }




}

export const http = new UserService();