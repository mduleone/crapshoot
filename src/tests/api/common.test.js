import * as common from '../../api/common';

jest.mock('isomorphic-fetch', () => jest.fn(() => Promise.resolve({json: () => {}})));

const fetch = require('isomorphic-fetch');

describe('get', () => {
    it('calls fetch with the path, method: GET, and default accept and content-type with no options object', () => {
        const path = 'https://test.com';
        return common.get(path)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                });
            });
    });

    it('calls fetch with the path, method: GET, default accept and content-type, and the rest of the passed in options', () => {
        const path = 'https://test.com';
        const opts = {
            mode: 'no-cors',
        };
        return common.get(path, opts)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                });
            });
    });
});

describe('post', () => {
    it('calls fetch with the path, method: POST, the JSON stringifyied payload, and default accept and content-type with no options object', () => {
        const path = 'https://test.com';
        const payload = {
            nickname: 'CaptainPlanet',
            message: 'The Power is YOURS!',
        };
        return common.post(path, payload)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
            });
    });

    it('calls fetch with the path, method: POST, the JSON stringifyied payload, and default accept and content-type, and the rest of the passed in options', () => {
        const path = 'https://test.com';
        const payload = {
            nickname: 'CaptainPlanet',
            message: 'The Power is YOURS!',
        };
        const opts = {
            mode: 'no-cors',
        };
        return common.post(path, payload, opts)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
            });
    });
});

describe('put', () => {
    it('calls fetch with the path, method: PUT, the JSON stringifyied payload, and default accept and content-type with no options object', () => {
        const path = 'https://test.com';
        const payload = {
            nickname: 'CaptainPlanet',
            message: 'The Power is YOURS!',
        };
        return common.put(path, payload)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'PUT',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
            });
    });

    it('calls fetch with the path, method: PUT, the JSON stringifyied payload, and default accept and content-type, and the rest of the passed in options', () => {
        const path = 'https://test.com';
        const payload = {
            nickname: 'CaptainPlanet',
            message: 'The Power is YOURS!',
        };
        const opts = {
            mode: 'no-cors',
        };
        return common.put(path, payload, opts)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'PUT',
                    mode: 'no-cors',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
            });
    });
});

describe('del', () => {
    it('calls fetch with the path, method: DELETE, and default accept and content-type with no options object', () => {
        const path = 'https://test.com';
        return common.del(path)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'DELETE',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                });
            });
    });

    it('calls fetch with the path, method: DELETE, default accept and content-type, and the rest of the passed in options', () => {
        const path = 'https://test.com';
        const opts = {
            mode: 'no-cors',
        };
        return common.del(path, opts)
            .then(() => {
                return expect(fetch).toBeCalledWith(path, {
                    method: 'DELETE',
                    mode: 'no-cors',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                    },
                });
            });
    });
});
