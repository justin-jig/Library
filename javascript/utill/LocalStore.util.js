
class _LocalstorageMethod {

    setLocalStore(key, value) { // 로컬스토리지 셋팅

        try {

            if (key !== "" && value !== "") {

                localStorage.setItem(key, JSON.stringify(value))
             
                return "succ"
            }

            else {

                return "fail"
            }
        }

        catch(err) {

            return err
        } 
    }

    getLocalStore(key) { // 로컬스토리지 get
  
        try {

            const getData = localStorage.getItem(key);

            let returnData = JSON.parse(getData); 

            return returnData;

        } catch(e) {
            
            return 'fail'

        }
    }

    delLocalStore(key) { // 로컬스토리지 delete

        window.localStorage.removeItem(key)
    }

}

const LocalstorageUtility = new _LocalstorageMethod();
export default LocalstorageUtility