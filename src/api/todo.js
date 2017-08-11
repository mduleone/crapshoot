import {get} from './common';

export function getGiphy(text) {
    return get(`//api.giphy.com/v1/gifs/translate?s=${encodeURIComponent(text)}&api_key=dc6zaTOxFJmzC`)
        .then(response => {
            return response.data.images['fixed_height'].url;
        });
}
