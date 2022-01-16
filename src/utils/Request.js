const defaultUrl = 'https://localhost:44309';
import store from '../store/store';

const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `${store.getState().user.user.token}`
    }
}

const request = {
    get: (url, successCallback, errorCallback) => {
        requestWithoutBody('GET', url, successCallback, errorCallback);
    },
    delete: (url, successCallback, errorCallback) => {
        requestWithoutBody('DELETE', url, successCallback, errorCallback);
    },
    post: (url, data, successCallback, errorCallback) => {
        requestWithBody('POST', url, data, successCallback, errorCallback);
    },
    put: (url, data, successCallback, errorCallback) => {
        requestWithBody('PUT', url, data, successCallback, errorCallback);
    },
    patch: (url, data, successCallback, errorCallback) => {
        requestWithBody('PATCH', url, data, successCallback, errorCallback);
    },
    openInNewTab: (url) => {
        const newWindow = window.open(defaultUrl + url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    },
    downloadFile: (url, filename = 'unknown') => {
        const fetchOptions = {
            method: 'GET',
            headers: getHeaders(),
        };
        fetch(defaultUrl + url, fetchOptions).then(
            (t) => {
                return t.blob()
                    .then((b)=>{
                        var a = document.createElement("a");
                        a.href = URL.createObjectURL(b);
                        a.setAttribute("download", filename);
                        a.click();
                    }
                );
            }
        )
    }
}

const requestWithBody = (method, url, data, successCallback, errorCallback) => {
    const fetchOptions = {
        method: method,
        headers: getHeaders(),
        body: JSON.stringify(data)
    };
    return fetch(defaultUrl + url, fetchOptions).then(response => {
        if(response.ok) {
            response.json().then(data => {
                successCallback(transformResponse(data));
                return;
            }).catch(error => {
                errorCallback(transformResponse(error, false));
                return;
            })
        } else {
            errorCallback(transformResponseError(res))
            return;
        }
    })
    .catch(error => {
        errorCallback(transformResponseError(error));
    });
}

const requestWithoutBody = (method, url, successCallback, errorCallback) => {
    const fetchOptions = {
        method: method,
        headers: getHeaders(),
    };
    return fetch(defaultUrl + url, fetchOptions)
        .then(response => {
            if(response.ok) {
                response.json().then(data => {
                    successCallback(transformResponse(data));
                    return;
                }).catch(error => {
                    errorCallback(transformResponse(error, false));
                    return;
                })
            } else {
                errorCallback(transformResponseError());
                return;
            }
        })
        .catch(error => {
            errorCallback(transformResponseError());
            return;
        }
    );
}

export default request;

const transformResponse = (data, success = true) => {
    if(typeof(data) === 'object'){
        let keys = Object.keys(data);
        if(!(keys.includes('data') && keys.includes('success') && keys.includes('message'))){
            //if(Array.isArray(data)) {
            return {
                success: success,
                message: '',
                data: data
            }
        }
        else {
            return data;
        }
    } else {
        return {
            success: success,
            message: '',
            data: data
        }
    }
};

const transformResponseError = () => {
    return {
        success: false,
        message: 'Serviço inacessível',
        data: {}
    }
}