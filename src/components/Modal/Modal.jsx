import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  modalClose = evt => {
    if (evt.key === 'Escape' || evt.type === 'click') {
      this.props.onClick('');
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.modalClose, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.modalClose, false);
  }

  render() {
    const { imgShow } = this.props;

    return (
      <div className={css.Overlay} onClick={this.modalClose}>
        <div className={css.Modal}>
          <img src={imgShow} alt="modal" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgShow: PropTypes.string,
  modalClose: PropTypes.func,
};