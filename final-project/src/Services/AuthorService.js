import axios from 'axios'


class AuthorService {

    get() {
        const instance = axios.create({
            baseURL: 'http://crud-api.hypetech.xyz/v1/users',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        })

        return instance.get()     // metoda post vraca promis
    }




}

export const authorService = new AuthorService();