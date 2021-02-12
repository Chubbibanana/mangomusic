import { connect } from 'react-redux';
import Splash from './splash';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);