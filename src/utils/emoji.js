import {emojify} from 'react-emojione';

function makeEmoji(emojiName) {
    return emojify(emojiName, {output: 'unicode'});
}

export default makeEmoji;
