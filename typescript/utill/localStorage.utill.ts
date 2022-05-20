

type StorageType = 'session' | 'local';

type UseStorageReturnValue = {

  getItem: (key: string, type?: StorageType) => string;
  setItem: (key: string, value: string, type?: StorageType) => boolean;
  removeItem: (key: string, type?: StorageType) => void;

};

class  _CustomLocalStoroge implements UseStorageReturnValue {


    isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
    private storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`;
  
    getItem = (key: string, type?: StorageType)  => {
  
      return this.isBrowser ? 

            window[this.storageType(type)][key] ? JSON.parse( window[this.storageType(type)][key]) : ''
            
            : '';
  
    };
  
    setItem = (key: string, value: any, type?: StorageType) => {
  
      if (this.isBrowser) {

        window[this.storageType(type)].setItem(key,  JSON.stringify(value));
        
        return true;
        
      }
  
      return false;
    };
  
    removeItem = (key: string, type?: StorageType): void => {
  
      window[this.storageType(type)].removeItem(key);
  
    };
}

const customWindowStoroge = new _CustomLocalStoroge()

export default customWindowStoroge
