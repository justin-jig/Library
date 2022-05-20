

class _SetTimeMethod {

    awitTime (timeToDelay) {

        return new Promise((resolve) => setTimeout(resolve, timeToDelay));
    } 
   
}

const SetTimeUtility = new _SetTimeMethod();
export default SetTimeUtility