import fetch from 'isomorphic-fetch';

export function inspectForZeroError(response) {
    // request 0 error
    if (response.status === 0) {
        const error = new Error(response.statusText);
        error.response = response;
        error.status = 500;
        throw error;
    }

    return response;
}

export function parseResponse(response) {
    const bodilessStatusCodes = [204, 205, 304];
    if (bodilessStatusCodes.includes(response.status)) {
        return [response, {}];
    }

    return Promise.all([response, response.json()]);
}

export function inspectForErrors([response, data]) {
    if (response.status >= 400) {
        const error = new Error(data.error || response.statusText);
        error.response = response;
        error.data = data;
        error.status = response.status;
        throw error;
    }

    return data;
}

export function get(path, options = {}) {
    const opts = {
        ...options,
        method: 'GET',
        headers: {
            ...options.headers,
        },
    };

    return fetch(path, opts)
        .then(inspectForZeroError)
        .then(parseResponse)
        .then(inspectForErrors);
}

export function post(path, payload, options = {}) {
    const opts = {
        ...options,
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            ...options.headers,
        },
    };

    return fetch(path, opts)
        .then(inspectForZeroError)
        .then(parseResponse)
        .then(inspectForErrors);
}

export function put(path, payload, options = {}) {
    const opts = {
        ...options,
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            ...options.headers,
        },
    };

    return fetch(path, opts)
        .then(inspectForZeroError)
        .then(parseResponse)
        .then(inspectForErrors);
}

export function del(path, options = {}) {
    const opts = {
        ...options,
        method: 'DELETE',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            ...options.headers,
        },
    };

    return fetch(path, opts)
        .then(inspectForZeroError)
        .then(parseResponse)
        .then(inspectForErrors);
}
