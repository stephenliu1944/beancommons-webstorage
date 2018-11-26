export function setLocal(name, value) {
    var data = value;
    if (typeof (data) !== 'string') {
        if (typeof (data) === 'undefined') {
            data = null;
        } else {
            data = JSON.stringify(data);
        }
    }
    localStorage.setItem(name, data);
}

export function getLocal(name) {
    var data = localStorage.getItem(name);
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
}

export function removeLocal(name) {
    if (localStorage.getItem(name)) {
        localStorage.removeItem(name);
    }
}