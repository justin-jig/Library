

import CryptoJS from 'crypto-js';

class _SecurityMethod {

    SHA256(data:any, secretKey:any) {
        
        let ciphertext = CryptoJS.SHA256(`${data}${secretKey}`).toString();
        return ciphertext;
    }

    AESEncrypt(data:any, secretKey:any) {

        let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), `${secretKey}`).toString();
        return ciphertext;
    }

    AESDecrypt(data:any, secretKey :any) {

        let bytes = CryptoJS.AES.decrypt(data, `${secretKey}`);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData

    }
   
}

const securityUtil = new _SecurityMethod();
export default securityUtil