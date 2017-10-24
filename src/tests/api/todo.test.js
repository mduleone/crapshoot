import * as commonApi from '../../api/common';
import * as api from '../../api/todo';

describe('getGiphy', () => {
    let text;
    let url;

    beforeAll(() => {
        text = 'text';
        url = 'url';
    });

    it('calls the giphy api with correct parameters', () => {
        spyOn(commonApi, 'get').and.returnValue(Promise.resolve({data: {images: {'fixed_height': {url}}}}));

        return api.getGiphy(text).then(() => {
            expect(commonApi.get)
                .toHaveBeenCalledWith(`//api.giphy.com/v1/gifs/translate?s=${encodeURIComponent(text)}&api_key=dc6zaTOxFJmzC`);
        });
    });

    it('parses the response from the giphy api and pulls off the fixed_height url', () => {
        spyOn(commonApi, 'get').and.returnValue(Promise.resolve({data: {images: {'fixed_height': {url}}}}));

        return api.getGiphy(text).then(response => {
            expect(response).toEqual(url);
        });
    });
});
