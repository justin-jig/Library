let validateObj = {

    email : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    passwoard : /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=.]).*$/,
    nick : /^[a-z0-9]{4,20}$/
}

type validationReturnType = {

    email : (value:any ) => void;
    password : (value:any) => void;
    nickname : (value:any) => void;
};

class _CustomValidation implements validationReturnType {

    email (value:any) {

        if (!validateObj.email.test(value)) {
            
            return 'fail'

        } else {

            return 'success'
        }
        
    }

    password (value:any ) {

        if (!validateObj.passwoard.test(value)) {

            return 'fail'

        } else {

            return 'success'
        }

    }

    nickname (value:any ) {

        if (!validateObj.nick.test(value)) {
            
            return 'fail'

        } else {

            return 'success'
        }
    }
   
}

export const validation = new _CustomValidation();
