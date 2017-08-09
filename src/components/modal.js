import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        children: PropTypes.any.isRequired,
        reactModalProps: PropTypes.shape({
            isOpen: PropTypes.bool.isRequired,
            onRequestClose: PropTypes.func.isRequired,
            contentLabel: PropTypes.string.isRequired,
        }).isRequired,
    };

    render() {
        const {children, reactModalProps} = this.props;
        const styles = {
            overlay: {
                backgroundColor: 'rgba(32, 32, 32, .5)',
            },
            content: {
                backgroundColor: '#303030',
                border: 'none',
                bottom: 'auto',
            },
        };

        return (
            <ReactModal style={styles} {...reactModalProps}>
                {children}
            </ReactModal>
        );
    }
}

export default Modal;
