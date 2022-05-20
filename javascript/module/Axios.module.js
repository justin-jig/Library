
/** module import */
import Axios from 'axios';

/** persist import */
import { GlobalContext } from '../context/GlobalContext';

class _CustomAxiosModule {

    AXIOS;
    
    constructor() {
        
        // with credential
        this.AXIOS = Axios.create({
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            },
            withCredentials: false,
            timeout: 15000,
        });

        this.AXIOS.interceptors.response.use(
          
            (response) => {  // 성공 시

                return Promise.resolve(response);
            },

            (error) => {   // 실패 시 
                
                if (error.response.status === 401) {
                    
                    return console.log('http 401 error');
                }
                if (error.response.status === 404) {

                    return console.log('http 404 error');
                }
                if (error.response.status === 406) {

                    return console.log('http 406 error');
                }
                if (error.response.status === 500) {

                    return console.log('http 500 error');
                }
                return Promise.reject(error);
            }
        )
    }

    default() {  /** 수정 */

        let url = GlobalContext.authContext.version.url;
        let token = GlobalContext.authContext.userInfo.token;
        
        if (token != null) { // 개발 서버가 아니면

            this.AXIOS.defaults.headers.common['Authorization'] = `${token}`;
        }
       
        this.AXIOS.defaults.baseURL = `${url}/`;
    }
    
    get(params) { 

        /** 수정 */
        const {URL} = params;
        return this.AXIOS && this.AXIOS.get(URL);
        
    }

    post(params) {

        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.post(URL,DATA);

    }

    patch(params) { 

        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.patch(URL,DATA);

    }

    put(params) {

        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.put(URL,DATA);
    }
    
    delete(params) {

        const { URL } = params;
        const { DATA } = params;
        return this.AXIOS && this.AXIOS.delete(URL, { data : DATA });

    }
}

const axios = new _CustomAxiosModule()
export default axios
