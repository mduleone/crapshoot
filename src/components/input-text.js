import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputText extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
        onEnter: PropTypes.func,
        placeholder: PropTypes.string,
        inputProps: PropTypes.object,
    };

    onKeyPress = (event) => {
        const {onEnter} = this.props;

        if (event.which === 13) {
            typeof onEnter === 'function' && onEnter();
        }
    };

    render() {
        const {value, onChange, placeholder, inputProps} = this.props;
        return (
            <input value={value} onChange={onChange} placeholder={placeholder} onKeyPress={this.onKeyPress} {...inputProps} />
        );
    }
}

export default InputText;
