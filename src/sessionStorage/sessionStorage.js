export function setSession(name, value) {
    var data = value;
    if (typeof (data) !== 'string') {
        if (typeof (data) === 'undefined') {
            data = null;
        } else {
            data = JSON.stringify(data);
        }
    }
    sessionStorage.setItem(name, data);
}

export function getSession(name) {
    var data = sessionStorage.getItem(name);
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
}

export function removeSession(name) {
    if (sessionStorage.getItem(name)) {
        sessionStorage.removeItem(name);
    }
}