

import CryptoJS from 'crypto-js'

class _SecurityMethod {

    AESEncrypt(data, secretKey) {
        
        let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), `${secretKey}`).toString();
        return ciphertext;
    }

    AESDecrypt(data, secretKey) {

        let bytes = CryptoJS.AES.decrypt(data, `${secretKey}`);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData

    }

    MD5Encrypt(data) {
     
        let ciphertext = CryptoJS.MD5(data).toString();
        return ciphertext
    } 
   
}

const SecurityUtility = new _SecurityMethod();
export default SecurityUtility