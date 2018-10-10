import * as types from '../constants/loginTypes';


let user = {
    name: 'xuke',
    age: 23
};

export function login() {
    console.log('登陆方法');
    return dispatch => {
        //正在执行登陆
        dispatch(isLogining());
        //模拟用户登录
        let result = fetch('https://www.baidu.com')
            .then((response) => {
                dispatch(loginSuccess(true, user));
            })
            .catch((error) => {
                dispatch(loginError(false));
            })

    }
}

function isLogining() {
    console.log('loading');
    return {
        type: types.LOGIN_IN_DOING
    };
}


function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    }
}

function loginError() {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR
    }

}
